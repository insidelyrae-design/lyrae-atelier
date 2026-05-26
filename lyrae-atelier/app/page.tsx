'use client';

import Link from 'next/link';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-warm-white via-cream to-beige">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(45,41,38,0.1) 2px, rgba(45,41,38,0.1) 4px)`,
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <span className="text-sm tracking-[0.3em] text-brown uppercase font-sans">
              A House of Identity and Expression
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light mb-8 tracking-tight">
            LYRAE ATELIER
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-4 max-w-3xl mx-auto text-balance">
            For the woman who is tired, burnt out, and ready for clarity.
          </p>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
            Build your brand without starting over.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/shop"
              className="px-8 py-4 bg-charcoal text-cream hover:bg-brown transition-all duration-300 text-sm tracking-widest font-sans inline-block"
            >
              EXPLORE THE ATELIER
            </Link>
            <Link
              href="#featured"
              className="px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 text-sm tracking-widest font-sans inline-block"
            >
              START HERE
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <svg
            className="w-6 h-6 text-brown/30 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            You are not over-edited.
            <br />
            You are over-thinking.
          </h2>
          <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
            An identity translation system for women whose thoughts are clear in their mind — but lose meaning the moment they try to express them.
          </p>
          <p className="text-lg leading-relaxed text-charcoal/70">
            LYRAE exists to reverse that.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] text-brown uppercase font-sans block mb-4">
              The Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-light">
              Systems for Clarity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-warm-white p-8 hover:shadow-2xl transition-all duration-500 border border-charcoal/5"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4">
                  {product.type === 'free' && (
                    <span className="inline-block px-3 py-1 bg-gold/20 text-brown text-xs tracking-wider font-sans">
                      FREE ACCESS
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="inline-block px-3 py-1 bg-gold/20 text-brown text-xs tracking-wider font-sans">
                      LIMITED TIME
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-light mb-3 group-hover:text-brown transition-colors">
                  {product.name}
                </h3>
                
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
                  EXPLORE →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof System */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] text-brown uppercase font-sans block mb-4">
              Real Results From LYRAE
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Not motivation. Not theory.
            </h2>
            <p className="text-lg text-charcoal/70">
              Actual shifts in how people think, express, and build.
            </p>
          </div>

          {/* Identity & Expression Proof */}
          <div className="mb-20">
            <h3 className="text-2xl font-light mb-12 text-center text-charcoal/60">
              ✦ When your thoughts finally become language
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Nikkie Burns Testimonial - LYRAE Voice */}
              <div className="bg-cream p-8 border border-charcoal/10">
                <div className="mb-6">
                  <p className="font-sans text-sm tracking-wide text-brown mb-2">LYRAE VOICE</p>
                  <p className="font-light text-lg">Nikkie Burns</p>
                  <p className="text-xs text-charcoal/50">Freedom Creator Coach & Viral AI Creator</p>
                </div>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>I was having one of those days where burnout had completely taken over and I genuinely could not see past how I was feeling.</p>
                  <p>A friend shared LYRAE with me, and I decided to be completely honest and raw with it.</p>
                  <p>What came back genuinely stopped me.</p>
                  <p>It gave me clarity about my identity, my story, and why I do what I do — in a way I couldn't access on my own when I was deep in it.</p>
                  <p>It cut through the noise and got straight to the truth of who I am.</p>
                  <p className="font-light text-lg pt-4 italic">"It felt like a mirror that actually tells you the truth."</p>
                </div>
              </div>

              {/* Alexandria Martin Testimonial - LYRAE Voice */}
              <div className="bg-cream p-8 border border-charcoal/10">
                <div className="mb-6">
                  <p className="font-sans text-sm tracking-wide text-brown mb-2">LYRAE VOICE</p>
                  <p className="font-light text-lg">Alexandria Martin</p>
                </div>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>I thought it was gonna give basic AI responses but the way it breaks down your thoughts into different angles is kinda crazy.</p>
                  <p>I typed in one simple question about feeling overwhelmed and every tab gave me something useful without sounding robotic or cheesy.</p>
                  <p>The Founder Story part felt the most relatable to me because it turned random thoughts into something that actually sounded clear and meaningful. The Identity section was really good too for figuring out deeper messaging and brand voice stuff.</p>
                  <p>Also the aesthetic?? Super clean and calming. It doesn't feel cluttered or confusing like a lot of AI tools.</p>
                  <p className="font-light pt-4 italic">"Definitely one of those apps where you sit there like 'wait... why is this actually kinda accurate?'"</p>
                </div>
              </div>

              {/* Early User Feedback */}
              <div className="bg-cream p-8 border border-charcoal/10">
                <div className="mb-6">
                  <p className="font-sans text-sm tracking-wide text-brown mb-2">EARLY USER FEEDBACK</p>
                  <p className="font-light text-lg">LYRAE Voice Experience</p>
                </div>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>I went in thinking I was testing a storytelling tool, but LYRAE helped me in a way I didn't expect.</p>
                  <p>It gave me language for thoughts, emotions, lived experiences, and identity shifts that were hard to express clearly.</p>
                  <p>It didn't feel like a content tool. It felt reflective.</p>
                  <p>It helped me slow down and turn scattered thoughts into words that felt honest, aligned, and true to who I am.</p>
                  <p className="font-light pt-4">"LYRAE feels like a storytelling companion — a mirror for people who know they have something to say but struggle to express it."</p>
                </div>
              </div>
            </div>

            <div className="bg-beige/30 p-8 text-center">
              <p className="text-lg font-light">
                People don't realise how much they are over-editing themselves until they see their own thoughts translated clearly.
              </p>
            </div>
          </div>

          {/* Monetisation Clarity Proof */}
          <div className="mb-12">
            <h3 className="text-2xl font-light mb-12 text-center text-charcoal/60">
              ✦ From overwhelm to structured direction
            </h3>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-cream p-8 border border-charcoal/10 mb-8">
                <div className="mb-6">
                  <p className="font-sans text-sm tracking-wide text-brown mb-2">SOVEREIGN</p>
                  <p className="font-light text-lg">Nikkie Burns</p>
                  <p className="text-xs text-charcoal/50">Freedom Creator Coach & Viral AI Creator</p>
                </div>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>I honestly did NOT expect this tool to call me out the way it did.</p>
                  <p>I've spent so long trying to build this big "empire vision" and help everyone that I never realised how much it was keeping me stuck and overwhelmed.</p>
                  <p>Within minutes, this gave me clarity on my niche, my offer, my audience, my pricing, and my first real income direction.</p>
                  <p>More clarity than I've had in a long time.</p>
                  <p>It didn't give fluffy motivation — it actually mapped it out: what I should offer, who it helps, what problem it solves, pricing ideas, and how I could realistically reach my income goals.</p>
                </div>
              </div>

              <div className="bg-beige/30 p-8 text-center">
                <p className="text-lg font-light">
                  Most creators don't need more ideas. They need structure for the ideas they already have.
                </p>
              </div>
            </div>
          </div>

          {/* Core Shift */}
          <div className="max-w-4xl mx-auto mt-20 bg-charcoal text-cream p-12">
            <h3 className="text-2xl font-light mb-8 text-center">
              What people experience inside LYRAE
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-cream/90">"I didn't realise how much I was over-editing myself"</p>
              <p className="text-cream/90">"I finally have language for my thoughts"</p>
              <p className="text-cream/90">"I now know what I'm building and why"</p>
              <p className="text-cream/90">"This made everything feel clearer"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to build without starting over?
          </h2>
          <p className="text-lg text-cream/70 mb-12 leading-relaxed">
            Start with clarity. Move with intention. Build from who you are.
          </p>
          <Link
            href="/shop"
            className="inline-block px-12 py-4 bg-gold text-charcoal hover:bg-gold-light transition-all duration-300 text-sm tracking-widest font-sans"
          >
            ENTER THE ATELIER
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
