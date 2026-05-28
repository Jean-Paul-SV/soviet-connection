import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { inView } from '../lib/utils'
import { stats } from '../lib/data'
import { SectionLabel } from './ui/SectionLabel'

export function Manifesto() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section id="about" className="bg-[#0A0A0A] py-24 md:py-36 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`${inView(isInView)}`}
          style={{ animationDelay: '0.1s' }}
        >
          <SectionLabel className="mb-10">OUR MANIFESTO</SectionLabel>

          <div className="font-display leading-tight">
            <p className="text-[48px] md:text-[72px] lg:text-[88px] text-[#F0EDE6]">WE DON'T FOLLOW</p>
            <p className="text-[48px] md:text-[72px] lg:text-[88px] text-[#F0EDE6]">TRENDS.</p>
            <p className="text-[48px] md:text-[72px] lg:text-[88px] text-[#CC0000]">WE MAKE</p>
            <p
              className="text-[48px] md:text-[72px] lg:text-[88px] text-transparent"
              style={{ WebkitTextStroke: '1.5px #F0EDE6' }}
            >
              HISTORY.
            </p>
          </div>

          <div className="mt-12 max-w-lg border-l-2 border-[#CC0000] pl-6">
            <p className="font-mono text-[#888880] text-sm leading-[1.9]">
              Born from the raw visual language of Soviet constructivism — the
              bold geometry, the utilitarian honesty, the refusal to be subtle.
              Soviet Connection is not a tribute. It's a reinterpretation:
              what happens when that aesthetic collides head-on with the modern street.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/10 ${inView(isInView)}`}
          style={{ animationDelay: '0.3s' }}
        >
          {stats.map(({ n, label }) => (
            <div key={label}>
              <p className="font-display text-[40px] md:text-[60px] text-[#F0EDE6] leading-none">
                {n}
              </p>
              <p className="font-mono text-[10px] text-[#888880] tracking-widest mt-2 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
