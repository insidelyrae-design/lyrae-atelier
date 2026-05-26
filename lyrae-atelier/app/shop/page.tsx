import Link from 'next/link';
import { products } from '@/lib/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop — LYRAE ATELIER',
  description: 'Explore the complete collection of LYRAE systems for identity, expression, and monetization clarity.',
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-warm-white via-cream to-beige border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-[0.3em] text-brown uppercase font-sans block mb-4">
            The Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            The Atelier
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Systems for clarity. Tools for expression. Frameworks for structure.
            <br />
            Build from who you are, not who you think you should be.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-warm-white p-8 hover:shadow-2xl transition-all duration-500 border border-charcoal/5"
              >
                <div className="mb-4">
                  {product.type === 'free' && (
                    <span className="inline-block px-3 py-1 bg-gold/20 text-brown text-xs tracking-wider font-sans">
                      FREE ACCESS
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="inline-block px-3 py-1 bg-gold/20 text-brown text-xs tracking-wider font-sans ml-2">
                      LIMITED TIME
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-light mb-3 group-hover:text-brown transition-colors">
                  {product.name}
                </h2>
                
                <p className="text-sm text-charcoal/60 mb-4 leading-relaxed">
                  {product.tagline}
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  {product.price === 0 ? (
                    <span className="text-2xl font-light">Free</span>
                  ) : (
                    <>
                      <span className="text-3xl font-light">
                        {product.currency}{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-charcoal/40 line-through">
                          {product.currency}{product.originalPrice}
                        </span>
                      )}
                    </>
                  )}
                </div>

                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="text-sm tracking-wider text-brown group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2 font-sans">
                  LEARN MORE →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-warm-white border-t border-charcoal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light mb-6">
            Most people are not unclear.
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            They are simply over-edited. LYRAE exists to reverse that.
          </p>
        </div>
      </section>
    </div>
  );
}
