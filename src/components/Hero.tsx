import { ArrowDown } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { inView } from '../lib/utils'

export function Hero() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex flex-col overflow-hidden">
      {/* Constructivist grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(240,237,230,1) 79px, rgba(240,237,230,1) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(240,237,230,1) 79px, rgba(240,237,230,1) 80px)',
        }}
      />

      {/* Red vertical accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC0000]" />

      {/* Main content */}
      <div
        ref={ref}
        className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-12 pb-20"
      >
        {/* Label */}
        <div
          className={`flex items-center gap-4 mb-10 ${inView(isInView)}`}
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-10 h-px bg-[#CC0000]" />
          <p className="font-mono text-[11px] text-[#CC0000] tracking-[0.3em] uppercase">
            SS26 — Moscow × Global
          </p>
        </div>

        {/* Giant display text */}
        <div
          className={`${inView(isInView)}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h1 className="font-display text-[22vw] sm:text-[20vw] md:text-[17vw] lg:text-[150px] xl:text-[170px] leading-[0.9] text-[#F0EDE6] tracking-tight">
            SOVIET
          </h1>
          <h1
            className="font-display text-[22vw] sm:text-[20vw] md:text-[17vw] lg:text-[150px] xl:text-[170px] leading-[0.9] text-transparent tracking-tight"
            style={{ WebkitTextStroke: '1.5px #F0EDE6' }}
          >
            CONNECTION
          </h1>
        </div>

        {/* Red divider with star */}
        <div
          className={`flex items-center gap-5 my-10 ${inView(isInView)}`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="h-px bg-[#CC0000] w-24" />
          <span className="text-[#CC0000] text-xl leading-none">★</span>
          <div className="h-px bg-[#CC0000] flex-1 max-w-[80px]" />
        </div>

        {/* Subtext + CTA */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 ${
            inView(isInView)
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <p className="font-mono text-[#888880] text-sm leading-relaxed tracking-wide max-w-sm">
            Streetwear rooted in the raw visual language of Soviet
            constructivism. Utilitarian. Bold. Unapologetically historical.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#collection"
              className="font-mono text-xs tracking-widest bg-[#CC0000] text-white px-8 py-4 hover:bg-[#aa0000] transition-colors"
            >
              VIEW COLLECTION
            </a>
            <a
              href="#about"
              className="font-mono text-xs tracking-widest border border-[#F0EDE6]/25 text-[#F0EDE6] px-8 py-4 hover:border-[#F0EDE6]/60 transition-colors"
            >
              OUR STORY
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-8 flex items-center gap-2 text-[#888880]">
        <ArrowDown size={13} className="animate-bounce" />
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
      </div>
    </section>
  )
}
