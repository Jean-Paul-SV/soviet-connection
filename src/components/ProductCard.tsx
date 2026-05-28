import { ArrowUpRight } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { inView } from '../lib/utils'
import type { Product } from '../lib/data'

interface Props {
  product: Product
  delay: number
}

export function ProductCard({ product, delay }: Props) {
  const { ref, isInView } = useInViewAnimation()

  return (
    <div
      ref={ref}
      className={`group cursor-pointer ${inView(isInView)}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#DDD9CF] mb-4">
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-[#CC0000] text-white font-mono text-[10px] tracking-widest px-2 py-1">
            NEW
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-[3/4] object-cover grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/25 transition-all duration-400 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <span className="font-mono text-white text-[11px] tracking-widest border border-white/80 px-5 py-2.5">
            QUICK VIEW
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-[22px] text-[#0A0A0A] leading-tight tracking-wide">
            {product.name}
          </h3>
          <p className="font-mono text-[10px] text-[#888880] tracking-widest mt-1.5 uppercase">
            {product.category} — {product.colorway}
          </p>
        </div>
        <ArrowUpRight
          size={16}
          className="text-[#888880] group-hover:text-[#CC0000] transition-colors mt-1 flex-shrink-0"
        />
      </div>
    </div>
  )
}
