interface Props {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: Props) {
  return (
    <p
      className={`font-mono text-[11px] text-[#CC0000] tracking-[0.3em] uppercase ${className}`}
    >
      {children}
    </p>
  )
}
