#!/usr/bin/env node
// Daily feed ETL for the /notes page.
//
// Pulls three public, auth-free sources and writes src/content/feed.json:
//   - aihot.virxact.com      → Chinese AI news (last 24h, curated)
//   - zarazhangrui/follow-builders → top AI builders' tweets + 1 podcast
//   - BuilderPulse/BuilderPulse    → today's indie build recommendation
//
// Resilient by design: each source is fetched independently, and if one
// fails the previous data for that source is preserved (never blanked out).
// Run on cron by .github/workflows/daily-feed.yml, or locally:  node scripts/fetch-feeds.mjs

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../src/content/feed.json')
const BUILDERS_ZH = resolve(__dirname, '../src/content/builders-zh.json')

// aihot's nginx blocks default curl/fetch UAs; a browser UA is required.
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
const FB = 'https://raw.githubusercontent.com/zarazhangrui/follow-builders/main'
const BP = 'https://raw.githubusercontent.com/BuilderPulse/BuilderPulse/main'
const AIHOT = 'https://aihot.virxact.com/api/public'

const ARCHIVE_DAYS = 7
const MAX_AIHOT = 24
const MAX_BUILDERS = 12

async function fetchWithRetry(url, tries = 5) {
  let lastErr
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA } })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res
    } catch (e) {
      lastErr = e
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)))
    }
  }
  throw lastErr
}
const fetchJSON = async (url) => (await fetchWithRetry(url)).json()
const fetchText = async (url) => (await fetchWithRetry(url)).text()

// Date in Asia/Shanghai as { y, iso } — BuilderPulse files are dated in that tz.
function shanghaiDate(d = new Date()) {
  const f = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const iso = f.format(d) // en-CA gives YYYY-MM-DD
  return { y: iso.slice(0, 4), iso }
}

// ─── AI HOT ───────────────────────────────────────────────────────────────
async function fetchAihot() {
  const since = new Date(Date.now() - 24 * 3600 * 1000).toISOString().replace(/\.\d{3}Z$/, 'Z')
  const data = await fetchJSON(`${AIHOT}/items?mode=selected&since=${since}&take=50`)
  const items = (data.items || []).slice(0, MAX_AIHOT).map((it) => ({
    title: it.title,
    source: it.source,
    url: it.url,
    summary: (it.summary || '').slice(0, 240),
    publishedAt: it.publishedAt || null,
    category: it.category || null,
  }))
  return { ok: true, items }
}

// ─── follow-builders ────────────────────────────────────────────────────────
async function fetchBuilders() {
  const [x, pod] = await Promise.all([
    fetchJSON(`${FB}/feed-x.json`),
    fetchJSON(`${FB}/feed-podcasts.json`).catch(() => null),
  ])
  const items = []
  for (const b of x.x || []) {
    for (const t of b.tweets || []) {
      items.push({
        handle: b.handle,
        name: b.name,
        bio: (b.bio || '').replace(/\s+/g, ' ').trim().slice(0, 90),
        text: (t.text || '').replace(/\s+/g, ' ').trim().slice(0, 280),
        url: t.url,
        createdAt: t.createdAt || null,
        engagement: (t.likes || 0) + (t.retweets || 0),
      })
    }
  }
  items.sort((a, b) => (b.engagement || 0) - (a.engagement || 0))
  const top = items.slice(0, MAX_BUILDERS)

  // Merge Chinese translations from builders-zh.json (generated daily by OpenClaw routine)
  try {
    const zh = JSON.parse(await readFile(BUILDERS_ZH, 'utf8'))
    const zhMap = Object.fromEntries((zh.items || []).map((it) => [it.handle, it.textZh]))
    for (const item of top) {
      if (zhMap[item.handle]) item.textZh = zhMap[item.handle]
    }
  } catch {
    // file not yet generated — textZh stays absent, UI falls back to English
  }

  const ep = pod?.podcasts?.[0]
  const podcast = ep ? { name: ep.name, title: ep.title, url: ep.url, publishedAt: ep.publishedAt || null } : null
  return { ok: true, items: top, podcast }
}

// ─── BuilderPulse ───────────────────────────────────────────────────────────
const stripMd = (s) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`/g, '')
    .replace(/\*\*/g, '')
    .trim()

function sectionBody(md, matcher) {
  const lines = md.split('\n')
  let start = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('## ') && matcher(lines[i])) {
      start = i + 1
      break
    }
  }
  if (start < 0) return []
  const body = []
  for (let i = start; i < lines.length; i++) {
    if (lines[i].startsWith('## ')) break
    body.push(lines[i])
  }
  return body
}

function parseBP(md) {
  const leadBody = sectionBody(md, (h) => /📝/.test(h) || /刘小排|Liu Xiaopai/i.test(h))
  const leadPara = leadBody.find((l) => l.trim() && !l.trim().startsWith('**'))
  const lead = leadPara ? stripMd(leadPara) : ''

  const buildBody = sectionBody(md, (h) => /🎯/.test(h) || /2 ?小时|2-hour/i.test(h))
  const buildLine = buildBody.find((l) => l.trim().startsWith('**'))
  let build = { title: '', oneLiner: '' }
  if (buildLine) {
    const m = buildLine.match(/^\*\*(.+?)\*\*\s*[—–\-]+\s*(.+)$/)
    build = m ? { title: m[1].trim(), oneLiner: stripMd(m[2]) } : { title: stripMd(buildLine), oneLiner: '' }
  }

  const sigBody = sectionBody(md, (h) => /Top ?3/i.test(h))
  const signals = sigBody
    .filter((l) => /^\d+\.\s/.test(l.trim()))
    .map((l) => stripMd(l.trim().replace(/^\d+\.\s*/, '')))
    .slice(0, 3)

  return { lead, build, signals }
}

async function fetchBuilderPulse() {
  const candidates = [shanghaiDate(), shanghaiDate(new Date(Date.now() - 24 * 3600 * 1000))]
  for (const d of candidates) {
    try {
      const zh = await fetchText(`${BP}/zh/${d.y}/${d.iso}.md`)
      const en = await fetchText(`${BP}/en/${d.y}/${d.iso}.md`).catch(() => null)
      return {
        ok: true,
        date: d.iso,
        sourceUrl: `https://github.com/BuilderPulse/BuilderPulse/blob/main/zh/${d.y}/${d.iso}.md`,
        zh: parseBP(zh),
        en: en ? parseBP(en) : null,
      }
    } catch {
      // try the previous day
    }
  }
  throw new Error('no BuilderPulse file for today or yesterday')
}

// ─── main ───────────────────────────────────────────────────────────────────
async function main() {
  let prev = {}
  try {
    prev = JSON.parse(await readFile(OUT, 'utf8'))
  } catch {
    // first run — no prior file
  }

  const result = {
    generatedAt: new Date().toISOString(),
    date: shanghaiDate().iso,
    aihot: prev.aihot || { ok: false, items: [] },
    builders: prev.builders || { ok: false, items: [], podcast: null },
    builderpulse: prev.builderpulse || { ok: false },
    archive: Array.isArray(prev.archive) ? prev.archive : [],
  }

  await Promise.allSettled([
    fetchAihot()
      .then((r) => (result.aihot = r))
      .catch((e) => console.error('aihot failed, keeping prior:', e.message)),
    fetchBuilders()
      .then((r) => (result.builders = r))
      .catch((e) => console.error('builders failed, keeping prior:', e.message)),
    fetchBuilderPulse()
      .then((r) => (result.builderpulse = r))
      .catch((e) => console.error('builderpulse failed, keeping prior:', e.message)),
  ])

  // Don't let a transient empty upstream wipe a previously-populated section.
  // (The follow-builders / aihot feeds occasionally return an empty 24h window.)
  if (result.aihot.ok && result.aihot.items.length === 0 && (prev.aihot?.items?.length || 0) > 0) {
    result.aihot = { ...prev.aihot, stale: true }
  }
  if (result.builders.ok && result.builders.items.length === 0 && (prev.builders?.items?.length || 0) > 0) {
    result.builders = { ...prev.builders, stale: true }
  }

  const todayEntry = {
    date: result.date,
    aihotCount: result.aihot?.items?.length || 0,
    buildersCount: result.builders?.items?.length || 0,
    bpBuild: result.builderpulse?.zh?.build?.title || '',
  }
  result.archive = [todayEntry, ...result.archive.filter((a) => a.date !== result.date)].slice(0, ARCHIVE_DAYS)

  await mkdir(dirname(OUT), { recursive: true })
  await writeFile(OUT, JSON.stringify(result, null, 2) + '\n', 'utf8')
  console.log(
    `feed.json written — aihot:${result.aihot.items?.length ?? 0} builders:${result.builders.items?.length ?? 0} bp:${result.builderpulse.ok}`,
  )
}

main().catch((e) => {
  console.error('FATAL', e)
  process.exit(1)
})
