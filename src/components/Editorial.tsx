import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { inView } from '../lib/utils'

export function Editorial() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section id="lookbook" className="relative overflow-hidden h-[55vh] md:h-[80vh]">
      {/* Background image */}
      <img
        src="https://loremflickr.com/1600/900/streetwear,urban?lock=99"
        alt="Soviet Connection SS26 Lookbook"
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0A0A]/60" />

      {/* Red accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#CC0000]" />

      {/* Content */}
      <div
        ref={ref}
        className={`absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-12 md:pb-16 ${inView(isInView)}`}
      >
        <p className="font-mono text-[#CC0000] text-[11px] tracking-[0.3em] uppercase mb-4">
          SS26 LOOKBOOK — MOSCOW × GLOBAL
        </p>
        <h2 className="font-display text-[52px] md:text-[90px] lg:text-[120px] text-[#F0EDE6] leading-none">
          THE REVOLUTION
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #F0EDE6' }}>
            WILL BE STYLED
          </span>
        </h2>
      </div>
    </section>
  )
}
