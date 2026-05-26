'use client';

import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Your cart is empty</h1>
          <p className="text-lg text-charcoal/70 mb-8">
            Explore the atelier to find systems for clarity.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-charcoal text-cream hover:bg-brown transition-all duration-300 text-sm tracking-widest font-sans"
          >
            EXPLORE THE ATELIER
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-light mb-12 text-center">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-warm-white p-6 border border-charcoal/10 flex gap-6"
              >
                <div className="flex-1">
                  <Link
                    href={`/product/${item.product.slug}`}
                    className="text-2xl font-light hover:text-brown transition-colors mb-2 block"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-charcoal/60 mb-4">
                    {item.product.tagline}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="text-xl font-light">
                      {item.product.currency}{item.product.price}
                    </span>

                    <div className="flex items-center gap-2 border border-charcoal/20">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-charcoal/5 transition-colors"
                      >
                        −
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-charcoal/5 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-sm text-charcoal/40 hover:text-charcoal transition-colors font-sans"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-light">
                    {item.product.currency}{item.product.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-charcoal/40 hover:text-charcoal transition-colors font-sans"
            >
              Clear cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-warm-white p-8 border border-charcoal/10 sticky top-24">
              <h2 className="text-2xl font-light mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-charcoal/10">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-charcoal/70">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="font-light">
                      {item.product.currency}{item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-xl mb-8">
                <span className="font-light">Total</span>
                <span className="font-light">€{total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => router.push('/checkout')}
                className="w-full px-8 py-4 bg-charcoal text-cream hover:bg-brown transition-all duration-300 text-sm tracking-widest font-sans mb-3"
              >
                PROCEED TO CHECKOUT
              </button>

              <Link
                href="/shop"
                className="block w-full px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 text-sm tracking-widest font-sans text-center"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
