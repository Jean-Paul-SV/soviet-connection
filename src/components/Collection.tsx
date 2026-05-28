import { ArrowUpRight } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { inView } from '../lib/utils'
import { products } from '../lib/data'
import { SectionLabel } from './ui/SectionLabel'
import { ProductCard } from './ProductCard'

export function Collection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section id="collection" className="bg-[#F0EDE6] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 ${inView(isInView)}`}
          style={{ animationDelay: '0.1s' }}
        >
          <div>
            <SectionLabel className="mb-3">SS26</SectionLabel>
            <h2 className="font-display text-[56px] md:text-[80px] text-[#0A0A0A] leading-none">
              THE COLLECTION
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-[11px] text-[#0A0A0A] tracking-widest border-b border-[#0A0A0A] pb-0.5 hover:text-[#CC0000] hover:border-[#CC0000] transition-colors self-start sm:self-auto"
          >
            ALL PIECES
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={0.08 * i} />
          ))}
        </div>
      </div>
    </section>
  )
}
