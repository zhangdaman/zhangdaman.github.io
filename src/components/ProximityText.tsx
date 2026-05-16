import { useEffect, useRef } from 'react'

type Falloff = 'linear' | 'gaussian' | 'exponential'

interface ProximityTextProps {
  lines: string[]
  radius?: number
  baseColor?: string
  accentColor?: string
  falloff?: Falloff
}

export default function ProximityText({
  lines,
  radius = 140,
  baseColor = '#1b1c1c',
  accentColor = '#9d422f',
  falloff = 'gaussian',
}: ProximityTextProps) {
  const charRefs = useRef<(HTMLSpanElement | null)[]>([])
  const mousePos = useRef({ x: -Infinity, y: -Infinity })

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    if (reduced) return

    const baseRGB = hexToRGB(baseColor)
    const accentRGB = hexToRGB(accentColor)

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    let rafId = 0
    let lastX = NaN
    let lastY = NaN

    const loop = () => {
      const { x: mx, y: my } = mousePos.current
      if (mx !== lastX || my !== lastY) {
        lastX = mx
        lastY = my
        charRefs.current.forEach((el) => {
          if (!el) return
          const rect = el.getBoundingClientRect()
          const cx = rect.left + rect.width / 2
          const cy = rect.top + rect.height / 2
          const dx = mx - cx
          const dy = my - cy
          const distance = Math.sqrt(dx * dx + dy * dy)

          let t: number
          if (distance >= radius) {
            t = 0
          } else {
            const norm = 1 - distance / radius
            switch (falloff) {
              case 'exponential':
                t = norm * norm
                break
              case 'gaussian':
                t = Math.exp(-((distance / (radius / 2)) ** 2) / 2)
                break
              default:
                t = norm
            }
          }

          const r = Math.round(baseRGB[0] + (accentRGB[0] - baseRGB[0]) * t)
          const g = Math.round(baseRGB[1] + (accentRGB[1] - baseRGB[1]) * t)
          const b = Math.round(baseRGB[2] + (accentRGB[2] - baseRGB[2]) * t)
          el.style.color = `rgb(${r}, ${g}, ${b})`
        })
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [radius, falloff, baseColor, accentColor])

  let charIdx = 0
  return (
    <>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {Array.from(line).map((ch) => {
            const idx = charIdx++
            return (
              <span
                key={idx}
                ref={(el) => {
                  charRefs.current[idx] = el
                }}
                style={{ display: 'inline-block', color: baseColor }}
                aria-hidden
              >
                {ch === ' ' ? ' ' : ch}
              </span>
            )
          })}
        </span>
      ))}
      <span className="sr-only">{lines.join(' ')}</span>
    </>
  )
}

function hexToRGB(hex: string): [number, number, number] {
  let val = hex.replace('#', '')
  if (val.length === 3) val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2]
  return [
    parseInt(val.slice(0, 2), 16),
    parseInt(val.slice(2, 4), 16),
    parseInt(val.slice(4, 6), 16),
  ]
}
