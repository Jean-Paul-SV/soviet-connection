import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../lib/data'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-[20px] md:text-[24px] text-[#F0EDE6] leading-none tracking-wider hover:text-[#CC0000] transition-colors"
        >
          SOVIET CONNECTION
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[11px] text-[#888880] hover:text-[#F0EDE6] tracking-widest transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#collection"
            className="hidden md:block font-mono text-[11px] tracking-widest bg-[#CC0000] text-white px-5 py-2.5 hover:bg-[#AA0000] transition-colors"
          >
            SHOP NOW
          </a>
          <button
            className="md:hidden text-[#F0EDE6] p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#141414] border-t border-white/10 px-6 pt-6 pb-8 space-y-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block font-mono text-sm text-[#888880] hover:text-[#F0EDE6] tracking-widest transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#collection"
            className="block font-mono text-sm tracking-widest bg-[#CC0000] text-white px-5 py-3 text-center mt-6 hover:bg-[#AA0000] transition-colors"
            onClick={() => setOpen(false)}
          >
            SHOP NOW
          </a>
        </div>
      )}
    </nav>
  )
}
