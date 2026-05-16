import type { ReactNode } from 'react'

export function TerminalPanel({
  title,
  children,
  className = '',
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`terminal-panel font-mono-ui text-mono-ui overflow-hidden ${className}`}>
      {title ? (
        <div className="px-4 py-2 flex items-center gap-2 border-b border-[#333]">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="ml-3 text-[#888] text-xs">{title}</span>
        </div>
      ) : (
        <div className="px-6 pt-6 flex gap-2">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}

export function TerminalLine({
  prompt = '>',
  children,
  emphasize = false,
}: {
  prompt?: string
  children: ReactNode
  emphasize?: boolean
}) {
  return (
    <div className="flex">
      <span className={`text-secondary mr-2 ${emphasize ? 'animate-pulse' : ''}`}>{prompt}</span>
      <span className={emphasize ? 'font-bold text-white' : 'opacity-80'}>{children}</span>
    </div>
  )
}
