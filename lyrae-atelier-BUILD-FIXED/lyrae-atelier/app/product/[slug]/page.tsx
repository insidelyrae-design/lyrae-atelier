'use client';

import { useParams, useRouter } from 'next/navigation';
import { getProductBySlug } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  
  const product = getProductBySlug(params.slug as string);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Product not found</h1>
          <button
            onClick={() => router.push('/shop')}
            className="text-brown hover:underline"
          >
            Return to shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-12 bg-warm-white border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push('/shop')}
            className="text-sm text-brown hover:text-charcoal transition-colors mb-8 flex items-center gap-2 font-sans"
          >
            ← Back to Atelier
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Product Info */}
            <div>
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

              <h1 className="text-5xl md:text-6xl font-light mb-4">
                {product.name}
              </h1>

              <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                {product.tagline}
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                {product.price === 0 ? (
                  <span className="text-4xl font-light">Free</span>
                ) : (
                  <>
                    <span className="text-5xl font-light">
                      {product.currency}{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-2xl text-charcoal/40 line-through">
                        {product.currency}{product.originalPrice}
                      </span>
                    )}
                  </>
                )}
              </div>

              <p className="text-lg leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* CTA */}
              <div className="space-y-3">
                {product.price === 0 ? (
                  <a
                    href={product.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-8 py-4 bg-charcoal text-cream hover:bg-brown transition-all duration-300 text-sm tracking-widest font-sans text-center"
                  >
                    ACCESS FREE TOOL →
                  </a>
                ) : (
                  <>
                    {product.leadMagnetLink && (
                      <a
                        href={product.leadMagnetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-8 py-4 bg-beige/50 text-charcoal hover:bg-beige transition-all duration-300 text-sm tracking-widest font-sans text-center mb-4 border border-charcoal/20"
                      >
                        TRY FREE IDENTITY TRANSFORMATION FIRST →
                      </a>
                    )}
                    <button
                      onClick={handleAddToCart}
                      className="block w-full px-8 py-4 bg-charcoal text-cream hover:bg-brown transition-all duration-300 text-sm tracking-widest font-sans"
                    >
                      {added ? '✓ ADDED TO CART' : 'ADD TO CART'}
                    </button>
                    <button
                      onClick={() => {
                        addToCart(product);
                        router.push('/checkout');
                      }}
                      className="block w-full px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 text-sm tracking-widest font-sans"
                    >
                      BUY NOW
                    </button>
                  </>
                )}
              </div>

              {product.deliverable && (
                <p className="text-sm text-charcoal/60 mt-6 text-center">
                  {product.deliverable}
                </p>
              )}
            </div>

            {/* Right: Features & Details */}
            <div className="space-y-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-light mb-6">What you receive</h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-gold flex-shrink-0 mt-1">✦</span>
                      <span className="text-charcoal/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Whom */}
              <div>
                <h2 className="text-2xl font-light mb-6">This is for you if</h2>
                <ul className="space-y-4">
                  {product.forWhom.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-gold flex-shrink-0 mt-1">✦</span>
                      <span className="text-charcoal/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="bg-beige/30 p-8">
                <h2 className="text-2xl font-light mb-4">The outcome</h2>
                <p className="text-charcoal/80 leading-relaxed">
                  {product.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form for Free Products */}
      {product.price === 0 && (
        <section id="lead-form" className="py-20 bg-cream">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-warm-white p-8 md:p-12 border border-charcoal/10">
              <h2 className="text-3xl font-light mb-4 text-center">
                LYRAE Identity Transformation
              </h2>
              <p className="text-center text-charcoal/70 mb-8">
                Free access before stepping into the full LYRAE Voice
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-sans tracking-wide mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-cream border border-charcoal/20 focus:border-brown focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans tracking-wide mb-2">
                    SURNAME
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-cream border border-charcoal/20 focus:border-brown focus:outline-none transition-colors"
                    placeholder="Your surname"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans tracking-wide mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-cream border border-charcoal/20 focus:border-brown focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-charcoal text-cream hover:bg-brown transition-all duration-300 text-sm tracking-widest font-sans"
                >
                  GET FREE ACCESS
                </button>
              </form>

              <p className="text-xs text-center text-charcoal/50 mt-6">
                If this felt like recognition, the full LYRAE Identity Translation Session goes deeper.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
