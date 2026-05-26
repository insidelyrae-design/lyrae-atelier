'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order');

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8">
          <svg
            className="w-20 h-20 mx-auto text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-5xl font-light mb-6">Payment Successful</h1>
        
        <p className="text-lg text-charcoal/70 mb-4 leading-relaxed">
          Thank you for your purchase. Your digital products have been sent to your email.
        </p>

        {orderId && (
          <p className="text-sm text-charcoal/50 mb-12">
            Order ID: {orderId}
          </p>
        )}

        <div className="bg-warm-white p-8 mb-8 border border-charcoal/10">
          <h2 className="text-2xl font-light mb-4">What happens next?</h2>
          <ul className="text-left space-y-4 max-w-md mx-auto">
            <li className="flex gap-3">
              <span className="text-gold flex-shrink-0">✦</span>
              <span className="text-charcoal/80">Check your email for access instructions and download links</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold flex-shrink-0">✦</span>
              <span className="text-charcoal/80">If you don't see the email within 10 minutes, check your spam folder</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold flex-shrink-0">✦</span>
              <span className="text-charcoal/80">Access to your systems is immediate and permanent</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-charcoal text-cream hover:bg-brown transition-all duration-300 text-sm tracking-widest font-sans"
          >
            CONTINUE EXPLORING
          </Link>
          <br />
          <Link
            href="/"
            className="inline-block text-sm text-brown hover:text-charcoal transition-colors font-sans"
          >
            Return home →
          </Link>
        </div>
      </div>
    </div>
  );
}
