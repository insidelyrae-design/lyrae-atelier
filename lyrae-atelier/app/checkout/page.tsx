'use client';

import { useCart } from '@/lib/cart-context';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// PayPal SDK types
declare global {
  interface Window {
    paypal?: any;
  }
}

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const paypalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
      return;
    }

    // Load PayPal SDK
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'YOUR_PAYPAL_CLIENT_ID'}&currency=EUR`;
    script.async = true;
    script.onload = () => {
      setLoading(false);
      renderPayPalButton();
    };
    script.onerror = () => {
      setError('Failed to load PayPal. Please refresh and try again.');
      setLoading(false);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [items]);

  const renderPayPalButton = () => {
    if (!window.paypal || !paypalRef.current) return;

    window.paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'EUR',
                  value: total.toFixed(2),
                  breakdown: {
                    item_total: {
                      currency_code: 'EUR',
                      value: total.toFixed(2),
                    },
                  },
                },
                items: items.map((item) => ({
                  name: item.product.name,
                  description: item.product.tagline,
                  unit_amount: {
                    currency_code: 'EUR',
                    value: item.product.price.toFixed(2),
                  },
                  quantity: item.quantity,
                })),
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log('Payment completed:', order);
          
          // Clear cart
          clearCart();
          
          // Redirect to success page
          router.push(`/success?order=${order.id}`);
        },
        onError: (err: any) => {
          console.error('PayPal error:', err);
          setError('Payment failed. Please try again.');
        },
      })
      .render(paypalRef.current);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-light mb-12 text-center">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-light mb-6">Order Summary</h2>
            <div className="bg-warm-white p-6 border border-charcoal/10 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between pb-4 border-b border-charcoal/5 last:border-0">
                  <div className="flex-1">
                    <p className="font-light mb-1">{item.product.name}</p>
                    <p className="text-sm text-charcoal/60">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-light">
                    €{(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="flex justify-between text-xl pt-4 border-t border-charcoal/20">
                <span className="font-light">Total</span>
                <span className="font-light">€{total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/cart"
              className="block mt-4 text-sm text-brown hover:text-charcoal transition-colors font-sans"
            >
              ← Edit cart
            </Link>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-2xl font-light mb-6">Payment</h2>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 mb-6 text-sm">
                {error}
              </div>
            )}

            {loading ? (
              <div className="bg-warm-white p-12 border border-charcoal/10 text-center">
                <div className="animate-pulse">
                  <div className="h-12 bg-charcoal/10 rounded mb-4"></div>
                  <p className="text-sm text-charcoal/60">Loading PayPal...</p>
                </div>
              </div>
            ) : (
              <div className="bg-warm-white p-6 border border-charcoal/10">
                <p className="text-sm text-charcoal/70 mb-4 text-center">
                  Complete your purchase with PayPal
                </p>
                <div ref={paypalRef}></div>
              </div>
            )}

            <div className="mt-6 text-xs text-charcoal/50 text-center">
              <p className="mb-2">Secure payment powered by PayPal</p>
              <p>
                By completing this purchase, you agree to receive access to your digital products via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
