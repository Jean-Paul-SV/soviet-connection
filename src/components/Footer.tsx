import { footerNavLinks, socialLinks, legalLinks } from '../lib/data'
import { SectionLabel } from './ui/SectionLabel'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-8 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-display text-[40px] md:text-[48px] text-[#F0EDE6] leading-none mb-5">
              SOVIET CONNECTION
            </p>
            <p className="font-mono text-xs text-[#888880] tracking-wide leading-[1.9]">
              Streetwear rooted in the aesthetic of Soviet constructivism.
              SS26 now available worldwide.
            </p>
            {/* Newsletter */}
            <div className="flex mt-6">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="flex-1 bg-transparent border border-white/20 font-mono text-[11px] text-[#F0EDE6] tracking-widest placeholder:text-[#444] px-4 py-3 focus:outline-none focus:border-[#CC0000] transition-colors"
              />
              <button className="bg-[#CC0000] font-mono text-[10px] text-white tracking-widest px-4 py-3 hover:bg-[#AA0000] transition-colors whitespace-nowrap">
                JOIN
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16 md:gap-24">
            <div>
              <SectionLabel className="mb-6">NAVIGATE</SectionLabel>
              <div className="space-y-4">
                {footerNavLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block font-mono text-[11px] text-[#888880] hover:text-[#F0EDE6] tracking-widest transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel className="mb-6">FOLLOW</SectionLabel>
              <div className="space-y-4">
                {socialLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block font-mono text-[11px] text-[#888880] hover:text-[#F0EDE6] tracking-widest transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/10">
          <p className="font-mono text-[10px] text-[#888880] tracking-widest">
            © {new Date().getFullYear()} SOVIET CONNECTION. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[10px] text-[#888880] hover:text-[#F0EDE6] tracking-widest transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
