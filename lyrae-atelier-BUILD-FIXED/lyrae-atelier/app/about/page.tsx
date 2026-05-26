import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-warm-white via-cream to-beige border-b border-charcoal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            About LYRAE ATELIER
          </h1>
          <p className="text-xl text-charcoal/70 leading-relaxed">
            A house of identity and expression.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>LYRAE Atelier was not built from a business strategy.</p>
            <p>It was built from disconnection.</p>
            <p>For a long time, I knew I wanted to build something of my own.</p>
            <p>I was tired of depending on other people financially. Tired of feeling like my future existed in someone else's hands.</p>
            <p>So I entered the online world the way many people do: trying to learn how to build a business.</p>
            <p>I watched creators succeed. I studied strategies. I tried different methods. Different approaches. Different versions of what "works."</p>
            <p>But the more I followed what everyone else was doing, the more disconnected I became from myself.</p>
            <p>Nothing felt sustainable. Not because I lacked ambition. Not because I lacked ideas.</p>
            <p className="font-light text-xl">But because I was trying to build from borrowed identities.</p>
            <p>I was building a business using someone else's voice. Someone else's formula. Someone else's way of being seen.</p>
            <p>And eventually, I realised: I could no longer recognise myself inside what I was creating.</p>
            <p className="font-light text-xl">That changed everything.</p>
            <p>Because when I looked deeper, I realised I was not the only one experiencing this.</p>
            <p>So many women online were struggling with the same thing: not a lack of intelligence, not a lack of creativity, but a loss of self-expression underneath performance, imitation, and overconsumption.</p>
            <p>People were no longer building from themselves.</p>
            <p>They were building from what they thought they needed to become in order to succeed.</p>
            <p className="font-light text-xl pt-8">That became the beginning of LYRAE Atelier.</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-beige/30 p-12 mb-12">
            <h2 className="text-3xl font-light mb-8 text-center">A house of identity and expression built around one belief</h2>
            <p className="text-2xl font-light text-center leading-relaxed">
              Your individuality is not the obstacle.<br />It is the foundation.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>LYRAE exists to help women reconnect with:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>their voice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>their expression</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>their positioning</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>their creativity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>and eventually, their ability to build income from who they actually are</span>
              </li>
            </ul>
            <p className="font-light text-xl">not from imitation.</p>

            <p className="pt-8">Every LYRAE system was created around this idea: removing the distortion between who someone is — and how they express themselves to the world.</p>

            <p>Because most people are not unclear.</p>
            <p className="font-light text-xl">They are over-edited.</p>

            <p>And over time, many people begin filtering themselves so heavily that they no longer recognise their own voice.</p>
            <p className="font-light text-xl">LYRAE was created to reverse that.</p>

            <p>Not by teaching women how to become someone else.</p>
            <p>But by helping them build from themselves clearly, intentionally, and without self-erasure.</p>

            <p className="pt-8 text-xl font-light">This is not about becoming a better version of yourself.</p>
            <p className="text-xl font-light">It is about removing everything that made your voice disappear in the first place.</p>
          </div>

          <div className="mt-16 text-right">
            <p className="text-sm tracking-widest text-brown uppercase font-sans">
              — Founder of LYRAE ATELIER
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light mb-6">
            Start With Yourself
          </h2>
          <p className="text-lg text-cream/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Begin your Identity Translation and discover what is shaping the way you express, build, and position yourself.
          </p>
          <Link
            href="/shop"
            className="inline-block px-12 py-4 bg-gold text-charcoal hover:bg-gold-light transition-all duration-300 text-sm tracking-widest font-sans"
          >
            START YOUR LYRAE JOURNEY
          </Link>
        </div>
      </section>
    </div>
  );
}
