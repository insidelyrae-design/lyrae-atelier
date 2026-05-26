import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-light mb-4">LYRAE ATELIER</h2>
            <p className="text-sm text-cream/70 leading-relaxed">
              A house of identity and expression.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm tracking-widest font-sans mb-4">NAVIGATE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-cream/70 hover:text-gold transition-colors">
                  Explore the Atelier
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/70 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-cream/70 hover:text-gold transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest font-sans mb-4">CONNECT</h3>
            <p className="text-sm text-cream/70 mb-2">
              Follow the work:
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/thisislyrae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@thisislyrae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold transition-colors text-sm"
              >
                TikTok
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold transition-colors text-sm"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-sm text-cream/50">
          <p>© {new Date().getFullYear()} LYRAE ATELIER. Built without starting over.</p>
        </div>
      </div>
    </footer>
  );
}
