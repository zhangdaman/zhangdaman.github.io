# Stitch Prompt — Personal Website (AI PM / Builder)

## Role & Goal
Design a high-fidelity desktop + mobile prototype for a personal website that doubles as (a) a job-seeking portfolio for senior AI PM roles and (b) a public-learning channel for an audience that follows the person on Xiaohongshu and GitHub. The two purposes must live as equal "dual-core" paths through the site, not nested under each other.

## Audience
- **Hiring managers / recruiters / founders** evaluating senior AI PM craft.
- **Followers from social** who want to see the human behind the AI-practice posts.

The site must read credibly to both groups from the same content.

## Aesthetic Reference — Signature Move: Editorial Serif

This site is **editorial first, interface second**. The signature visual decision is that the entire site is set in an editorial serif — like a long-form publication (Stripe Press, Pirate Wires, Every, The Browser Company's writing, Anthropic's research posts), not like a SaaS landing page. The serif is the brand. Do not fall back to Inter / grotesk safe defaults.

Concretely:
- **Typography is the entire visual system.** Display, headings, and body are all set in an editorial serif. The site looks like something you'd read, not something you'd click through.
  - **Display & headings:** a high-contrast editorial display serif — Tiempos Headline, GT Sectra, PP Editorial New, or Reckless Neue. Generous size, tight tracking, optical sizing if available.
  - **Body:** a matching text serif — Tiempos Text, Source Serif Pro, or Newsreader. Long measure (~65ch), generous line-height (1.6–1.75).
  - **Mono:** JetBrains Mono / Berkeley Mono / IBM Plex Mono. Used **only** for: metadata rows, tags, section labels (`§ POV` style), terminal motif, and code. Never for prose, never for headings.
  - **No grotesk sans anywhere.** No Inter, no Söhne, no Geist. If a UI control needs a non-serif feel, use mono.
- **Editorial micro-cues** (these are what separate "site that uses a serif font" from "site that feels edited"):
  - A drop cap on the first paragraph of About.
  - All-caps tracked-out mono **kickers** above section titles (e.g. `§ 01 — POSITIONING`).
  - Real typographic punctuation: curly quotes, en-dashes for ranges, em-dashes for asides, true ellipsis.
  - Optional pull-quote treatment on a single line in About, set in display serif at large size with left-aligned hairline rule.
  - Footnote-style side notes on desktop where useful (small mono numerals in the margin, not asterisks).
- Heavy whitespace. Generous line-height. Long measure for prose, short measure for metadata.
- Monochrome base (warm off-white background, near-black foreground) + exactly **one** restrained accent color used sparingly for links and active states.
- Subtle hairline dividers (1px, low-contrast). No drop shadows, no gradients, no glassmorphism, no rounded "card islands" floating on a colored background.
- A faint "terminal / boot sequence" geek motif appears in two places only (hero + contact). It plays a **supporting** role — the serif leads, the terminal whispers "and he also writes code." Keep the terminal panel small enough that the serif headline still dominates the hero. Do not let the terminal and the serif compete for visual weight.
- Motion: micro only. Fade-in on scroll, caret blink on terminal lines, hover underline. No parallax, no large hero animations.

## Hard Constraints
- **No images of people. No avatars. No stock photography. No hero illustrations.** The page must carry itself with typography, layout, and small text-based motifs.
- No icon sets used decoratively. Icons only where functional (external-link arrow, copy-to-clipboard).
- No emoji.
- No dark-mode toggle in v1 — pick one mode and commit. (Default to a warm off-white light mode; show a dark variant only on the hero terminal motif.)
- Fully responsive: desktop (1440), tablet (834), mobile (390).

## Information Architecture
A single-page site with anchor navigation, OR a 5-route site — design supports both, but treat each as a discrete screen in the prototype:

1. **Home** — positioning + routing
2. **About** — the bridge between the two cores
3. **Work** — primary engine for job-seeking
4. **Public Learning / Notes** — primary engine for brand
5. **Contact** — dual-path close

Persistent top nav: left-aligned wordmark (just a name in mono), right-aligned links: `Home · About · Work · Notes · Contact`. No hamburger on desktop. On mobile, collapse to a minimal sheet menu.

---

## Page 1 — Home (Positioning + Routing)

Purpose: state who I am in one line, prove I'm credible at a glance, and split the visitor into one of two paths. This page carries **no evidence** — it must stay extremely thin.

Layout (top to bottom):

1. **Hero block (above the fold)**
   - One-line positioning headline, large display size, tight tracking. Example slot: *"Product manager, ten years in. Building with AI for the last two."*
   - A short credibility line directly underneath, in mono, smaller, muted: `10y product · 2y AI PM · RAG / Agents / ads & growth`
   - A small "boot sequence" terminal motif sits to the right (desktop) or below (mobile). It is not interactive on this page — purely a brand signal. Show 3–5 lines of fake terminal output that subtly restate the positioning, ending in a blinking caret. Mono font, dark panel, single accent color for the prompt symbol.

2. **Two parallel CTAs, equal weight, side by side**
   - Left CTA: **"See the work →"** — sublabel in mono: `for hiring`
   - Right CTA: **"See what I'm learning in public →"** — sublabel in mono: `for following`
   - Both are the same size, same visual weight, same distance from the hero. This equal physical placement is the literal expression of the "dual-core" thesis. Do not make one primary.

3. **A single hairline divider, then nothing else.** The page ends. Do not add testimonials, a featured grid, a logo wall, or "recent posts." Resist the urge.

---

## Page 2 — About (The Bridge)

Purpose: one piece of content serves both audiences. Hiring readers should hear *how he thinks*; social readers should recognize *the person behind the posts*.

Content priority (top to bottom, this order is intentional — do not reorder):

1. **Point of view on product** — 2–3 short paragraphs. Editorial typography, long measure (~65ch). This is the senior signal. Themes to express in copy: *feasibility before polish · shipping is the real practice · learning in public as a method*. Treat this like an essay opener, not a bio.

2. **Career arc, told as a narrative** — not a résumé list. A short prose paragraph that moves from "ten years in product" → "the turn toward AI PM" → "what I'm betting on now." No job titles in bullet form on this page.

3. **What I'm paying attention to technically** — a short, dense paragraph or a tight inline list (comma-separated, mono): `RAG · agent orchestration · evals · ads & growth surfaces · LLM-native product surfaces`.

Layout: single column, max-width ~720px, left-aligned. A mono-styled side rail on desktop (>=1024px) shows section anchors (`§ POV`, `§ Arc`, `§ Focus`) — pure navigation, no decoration. On mobile, the side rail disappears.

Things this page must NOT contain: adjective-driven self-praise, a list of every past role, a skills bar chart, a "fun facts" block.

---

## Page 3 — Work (Job-Seeking Engine) — Signature Move: Three-State Portfolio

Purpose: the deep proof surface for hiring readers. The signature decision on this page is that the portfolio is **partitioned into three lifecycle states**, including a public **Killed** section. Showing what I deliberately killed and why is a rarer senior signal than any "shipped" project — most candidates can't or won't do it. This page must read as the work of someone with the standing to publicly retire their own projects.

Layout: a vertical stack of three labeled sections, each section containing project cards with progressive disclosure. Full content width (~880px on desktop, single column). Mono kickers above each section.

**Section order, with mono kickers:**

### `§ 01 — SHIPPING` (currently in flight)
Active projects, currently being built or iterated. Show **1–2** cards. These look the same as Shipped cards but carry a small live status tag in mono on the right: `[in flight · last updated yyyy.mm]`. A faint pulse animation on the tag dot — micro, not distracting.

### `§ 02 — SHIPPED` (delivered)
The traditional portfolio. Show **2** cards in this prototype:
1. **AdPilot** — flagship. Placed first, with the fullest deep-read. This is the résumé's lead project.
2. **FIELD CLAW** — second, to demonstrate breadth.

Below these two cards, a single muted-mono closing line: `More shipped projects (OMS · Book Curator · Clinic Triage Assistant) — see résumé →`. Pointer, not stack — do not render more shipped cards.

### `§ 03 — KILLED` (retired, with reasons)
**This section is the page's senior-signal centerpiece. Do not visually demote it.** It sits at equal weight to Shipped — same card width, same type sizes, same hairline rhythm. The treatment differs in two specific ways and **only** these two ways:
- The collapsed card title carries a small mono tag at the end: `[killed · yyyy.mm]`. The title itself is **not** struck through — strikethrough reads as failure; this section is not about failure, it's about clarity.
- The third deep-read section is replaced (see below).

Show **at least 1, ideally 2** killed cards in the prototype, with deep-read open on the first one so the pattern is visible.

**Card states (apply to all three sections):**

**Card (collapsed) — always visible in every section:**
- Project name, set in display serif, large.
- One-line problem framing, body serif, regular weight.
- A row of mono metadata tags: `role · timeframe · stack/domain`.
- For Shipping: `[in flight · last updated yyyy.mm]` tag on the right.
- For Killed: `[killed · yyyy.mm]` tag on the right.
- A small `read →` affordance on the right edge.

**Deep read (expanded inline, no modal, no new page) — Shipping & Shipped:**
Four sections, in this exact order, with mono kicker labels:
1. `§ Problem` — what was actually broken / underserved.
2. `§ What I did` — scope of my contribution, in plain language.
3. `§ Key decisions & tradeoffs` — **this is the senior signal**. Show judgment, not feature lists. 2–3 decisions, each with the tradeoff named.
4. `§ Outcome & what carried forward` — result + the durable lesson.

**Deep read (expanded inline) — Killed:**
Four sections, third one substituted:
1. `§ Problem` — what I originally believed was worth solving.
2. `§ What I did` — how far I took it before stopping.
3. **`§ Why I killed it`** — the explicit kill reason. Frame as a clean decision, not a postmortem of failure. Examples of acceptable shapes: *"the market signal we needed never showed up by week 6; continuing would have been ego, not product"*, or *"the underlying assumption (X) was wrong and re-scoping would have produced a different product than the one worth building."* This is the rarest writing on the page and must read **calm, decided, and unapologetic** — never wounded, never self-deprecating, never bragging about killing.
4. `§ What it taught me` — the durable judgment I carried into the next thing.

Things this page must NOT contain: a logo grid, "tech stack" pie charts, screenshots of dashboards, fabricated metrics, sympathy framing around killed projects, or visual demotion of the Killed section (no gray-out, no "archived" greenhouse styling, no collapsed-by-default).

---

## Page 4 — Public Learning / Notes (Brand Engine)

Purpose: this is the high-leverage page for the second core, and the easiest one to over-build. Do **not** design this as a blog with full-length posts. Design it as a **curated index of pointers**.

Layout:

1. **A short intro paragraph (2 sentences max)** explaining what this page is: a hand-picked index of AI-practice notes, with each entry pointing out to the original artifact (Xiaohongshu post, GitHub repo, gist, thread). Make the "this is an index, not an archive" framing explicit in copy.

2. **The index itself.** A vertical list, not a card grid. Each entry has:
   - A short, sharp title (one line).
   - A single sentence of "why this is worth your time" underneath, muted.
   - A mono metadata row on the right: `→ xiaohongshu` / `→ github` / `→ thread`, with a small external-arrow glyph.
   - Date in mono, far right, low-contrast.
   - Entries are separated by hairline dividers only — no boxes, no shadows.
   - Show 6–8 placeholder entries.

3. **A small "working in public" status block** at the top right on desktop (or above the index on mobile). Title it `§ now` in mono. Inside: 2–3 short lines of what I'm currently building or thinking about, dated. This is deliberately lightweight — it signals presence without becoming a microblog.

Things this page must NOT contain: long-form post bodies, comments, RSS-style excerpts, tag clouds, search.

---

## Page 5 — Contact (Dual-Path Close)

Purpose: the literal expression of dual-core at the closing surface. Two paths, equal weight, no favoritism.

Layout: two columns on desktop, stacked on mobile. Each column is the same width, same visual weight, separated by a vertical hairline.

**Left column — `§ for hiring`** (label in mono):
- One sentence inviting hiring conversation.
- Clear, labeled paths: `Résumé (PDF) →`, `Selected PRD →`, `Email`, `WeChat`.
- Email and WeChat shown as copy-to-clipboard affordances, not raw text.

**Right column — `§ for following`** (label in mono):
- One sentence inviting audience connection.
- Clear, labeled paths: `Xiaohongshu →`, `GitHub →`, optional `RSS`.

Below both columns, full width, a closing **terminal motif** echoing the hero. This time it is mildly interactive: typing a recognized command (e.g. `resume`, `xhs`, `email`) routes the visitor to the matching destination above. Keep it small, optional, and unobtrusive — power-user candy, not the main path. Include a faint hint line in mono showing one example command.

---

## Footer (Global)
A single hairline-divided footer row. Left: name + © year, in mono. Right: a one-line colophon naming the typefaces used and the stack (`Built with React · Vite · Tailwind`). Nothing else.

## Component & Style Tokens (give Stitch concrete handles)
- **Type families:**
  - `display` editorial display serif (Tiempos Headline / GT Sectra / PP Editorial New / Reckless Neue).
  - `body` editorial text serif (Tiempos Text / Source Serif Pro / Newsreader).
  - `mono` JetBrains Mono / Berkeley Mono / IBM Plex Mono — metadata, kickers, terminal only.
  - **No grotesk sans anywhere on the site.**
- **Type scale (desktop, more editorial than the previous pass — push display larger, body slightly larger for serif legibility):** display 72/76 (hero) and 56/60 (page openers), h1 44/52, h2 30/38, body 18/30, small 14/22, mono 12/20, kicker mono 11/16 all-caps tracked +0.12em.
- **Editorial details:**
  - Drop cap on the first paragraph of About — 4-line, set in display serif, small accent color allowed.
  - Section kickers above every major block: mono 11/16 all-caps, tracked, muted, prefixed with `§ NN — `.
  - Curly quotes, en/em dashes, true ellipsis. No straight quotes anywhere.
- **Color tokens:** `bg` warm off-white (#FAFAF7 range), `fg` near-black (#111 range), `muted` ~55% gray, `rule` ~12% black (hairlines), `accent` a single restrained hue — pick **one** of: muted blue-violet, desaturated terracotta, or ink blue. `terminal-bg` near-black, `terminal-fg` near-white, `terminal-accent` same accent.
- **Spacing:** 8pt grid. Section vertical rhythm 120–160px on desktop (looser than a SaaS site — this is a publication), 72px on mobile.
- **Radius:** 0 on dividers, inline elements, and editorial blocks; 6px max only where truly needed (terminal panel corners).
- **Borders:** 1px hairlines only, low-contrast (`rule` token).

## Deliverables Expected From Stitch
- High-fidelity desktop frames for all 5 pages, set entirely in editorial serif + mono (no grotesk sans).
- Mobile frames for all 5 pages.
- The Home and Contact terminal motifs rendered as real components, sized so the serif headline still dominates the hero.
- The Work page must show **all three sections** (`Shipping`, `Shipped`, `Killed`) at equal visual weight, with at least one card expanded inside Shipped (AdPilot) and one expanded inside Killed so both deep-read patterns are visible.
- The About page must include the drop cap, at least one tracked mono kicker, and ideally one pull-quote, so the editorial register is unmistakable.
- The Notes page must render the index list with realistic placeholder copy (one-sentence value lines), not lorem ipsum.

## Tone of Placeholder Copy
When generating placeholder text, write like a thoughtful senior PM, not like a marketing site. Short sentences. No adjectives like *passionate*, *innovative*, *cutting-edge*. Prefer concrete nouns and verbs. When in doubt, cut.
