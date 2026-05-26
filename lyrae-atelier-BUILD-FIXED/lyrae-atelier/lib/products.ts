export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  currency: string;
  type: 'free' | 'digital' | 'system';
  description: string;
  longDescription: string;
  features: string[];
  outcome: string;
  forWhom: string[];
  image: string;
  deliverable?: string;
  appLink?: string; // Direct link to the app/tool
  leadMagnetLink?: string; // For free products with separate lead capture
}

export const products: Product[] = [
  {
    id: '1',
    name: 'LYRAE Identity Transformation',
    slug: 'identity-transformation',
    tagline: 'Free Identity Clarity Experience',
    price: 0,
    currency: '€',
    type: 'free',
    description: 'Most women are not disconnected from themselves. They are disconnected from the version of themselves they created to survive online.',
    longDescription: 'LYRAE Identity Transformation is a guided identity reflection system designed to help you reconnect with the thoughts, emotions, and expression patterns you have been filtering, softening, or over-editing. You answer a small number of emotionally precise questions. LYRAE translates your answers into identity clarity, emotional patterns, hidden self-perception shifts, expression insights, and language that reflects who you actually are. Not generic personality results. Not surface-level motivation. A reflection system designed to help you recognise yourself more clearly.',
    features: [
      'Identity clarity - Understand what is shaping your expression',
      'Emotional patterns - Recognize what you have been suppressing',
      'Self-perception shifts - See how over-editing affects your voice',
      'Expression insights - Discover the identity patterns shaping your decisions',
      'Authentic language - Reflection that shows the version of yourself trying to emerge'
    ],
    outcome: 'You may discover why your expression feels disconnected, what you have been suppressing, how over-editing affects your voice, the identity patterns shaping your decisions, and the version of yourself trying to emerge. You were never unclear. Only over-edited.',
    forWhom: [
      'You feel disconnected from your own expression',
      'Your thoughts feel clearer internally than externally',
      'You overthink how you present yourself',
      'You struggle to communicate yourself authentically',
      'You are tired of building from imitation'
    ],
    image: '/images/identity-transformation.jpg',
    deliverable: 'Free access - Complete guided identity reflection',
    appLink: 'https://www.makeform.ai/forms/4DCk0t1z'
  },
  {
    id: '2',
    name: 'LYRAE Creative Labs',
    slug: 'creative-labs',
    tagline: 'Conversion Visual Identity System',
    price: 0,
    currency: '€',
    type: 'free',
    description: 'Most offers do not fail because of quality. They fail because of perception.',
    longDescription: 'Before someone reads your offer, they decide how trustworthy, valuable, and established it feels visually. Creative Labs exists to control that first impression. LYRAE Creative Labs transforms your offer into a structured, high-trust visual direction system designed to increase perceived value instantly. You do not manually design sales assets. You generate perception.',
    features: [
      'Offer Visual System - Structured layouts designed to elevate perceived value immediately',
      'Conversion Messaging Layer - Text hierarchy focused on communicating transformation',
      'Brand Alignment System - Visual direction adapted to luxury, minimal, feminine, bold, modern, or editorial styles',
      'Trust Architecture - Design logic that signals authority and credibility before anyone reads',
      'Perception-based positioning overlays - Everything designed to make your offer feel clearer, more intentional, more established, more trustworthy'
    ],
    outcome: 'Your offer feels structured, elevated, intentional, high-trust, and conversion-ready — without spending hours designing manually. You are not simply improving your design. You are changing how your offer is perceived the moment it is seen.',
    forWhom: [
      'Creators',
      'Digital products',
      'Coaches',
      'Personal brands',
      'Online businesses',
      'Service providers',
      'Those whose offers deserve stronger visual trust and positioning'
    ],
    image: '/images/creative-labs.jpg',
    deliverable: 'Free access - Direct link to app',
    appLink: 'https://aistudio.google.com/apps/4a2aaa7a-d60f-4fe3-a5fd-ee83efe3d3b8'
  },
  {
    id: '3',
    name: 'LYRAE Voice',
    slug: 'voice',
    tagline: 'Identity Translation System for Women Who Think Deeply — But Struggle to Express It Clearly',
    price: 197,
    originalPrice: 197,
    currency: '€',
    type: 'digital',
    description: 'Your thoughts are not unclear. They are over-edited before they are fully expressed.',
    longDescription: 'You rewrite yourself. Filter yourself. Soften your language until your words no longer feel like your own. Over time, you stop trusting your expression. Not because you lack clarity — but because your ideas lose meaning the moment you try to turn them into content. LYRAE Voice exists to reverse that. LYRAE Voice is a premium identity translation system that transforms raw internal clarity into language you can actually use. Not generic content. Not polished performance. But expression that still sounds like you.',
    features: [
      'Founder Story → clearly express who you are and what shaped your perspective',
      'Identity Positioning → define how people understand and remember you',
      'Strategic Language → communicate your value without sounding forced',
      'Cinematic Captions → emotionally resonant content in your tone',
      'Hook Generation → clear, attention-grabbing statements rooted in your identity'
    ],
    outcome: 'Your thoughts become structured and usable. Your voice feels recognizable and consistent. Your content sounds natural instead of performed. Your ideas become easier to communicate and act on. You stop forcing expression and start recognizing yourself in it.',
    forWhom: [
      'You think deeply but struggle to express yourself clearly',
      'Your ideas lose meaning when you try to post them',
      'You are tired of sounding generic online',
      'You want clarity without becoming robotic',
      'You are building something identity-led, personal, or creative',
      'You want to build from yourself — not imitation'
    ],
    image: '/images/voice.jpg',
    deliverable: 'One-time access to LYRAE Voice system - App link sent via email after purchase',
    appLink: 'https://aistudio.google.com/u/5/apps/fbdd4653-edbe-4f9a-afdb-2826d6152c96'
  },
  {
    id: '4',
    name: 'LYRAE Quotes OS',
    slug: 'quotes-os',
    tagline: 'Editorial Content System for Cinematic Brand Expression',
    price: 97,
    currency: '€',
    type: 'digital',
    description: 'Turn one quote into a luxury editorial content direction system in under 30 seconds.',
    longDescription: 'Quote OS transforms simple text into cinematic visual direction, high-status content structure, luxury positioning aesthetics, emotionally intelligent captions, and editorial-level creative output. Without needing to design manually. You do not create content piece by piece. You generate direction.',
    features: [
      'Cinematic AI image prompts - lighting, mood, composition, palette, atmosphere',
      'Visual direction systems - structured prompts for editorial-quality output',
      'Typography and layout hierarchy - clean, high-status visual presentation',
      'Emotional caption variations - reflective, identity-driven, narrative, high-status',
      'Content strategy layer - what the post communicates and how it positions your brand'
    ],
    outcome: 'Visuals that feel like editorial campaign work — not ordinary social media content. Your content becomes intentional, cinematic, editorial, emotionally intelligent, visually elevated, and luxury-positioned.',
    forWhom: [
      'Your content feels visually inconsistent',
      'Your ideas deserve stronger presentation',
      'You want authority without over-designing',
      'You are building a personal or luxury brand',
      'You want your visuals to feel intentional and recognizable',
      'You are tired of template-based aesthetics'
    ],
    image: '/images/quotes-os.jpg',
    deliverable: 'One-time access to Quotes OS - App link sent via email after purchase',
    appLink: 'https://lyrae-quote-os.vercel.app'
  },
  {
    id: '5',
    name: 'SOVEREIGN',
    slug: 'sovereign',
    tagline: 'Monetisation Translation System for Creators',
    price: 297,
    currency: '€',
    type: 'system',
    description: 'Most creators already know what they want to build. What they lack is clarity on how their individuality becomes income.',
    longDescription: 'Not because they lack talent. Not because they lack ideas. But because no system has translated their strengths, positioning, and creative direction into a structured monetisation pathway. SOVEREIGN exists to define that translation. SOVEREIGN is a monetisation clarification system that transforms your current creative direction into a structured income pathway aligned with your strengths, your positioning, your natural abilities, and your current stage of growth. This is not generic business advice. It is a monetisation pathway built around who you already are.',
    features: [
      'Monetisation Pathway - A clear direction for how your creativity becomes income',
      'Income Direction Clarity - The most viable starting point based on your current strengths',
      'Offer Positioning - Guidance on what type of offer aligns naturally with your abilities',
      'Pricing Guidance - Suggested pricing direction based on your current stage and offer type',
      'Focus Simplification - Clarity on what to stop building, what to prioritize, what matters next'
    ],
    outcome: 'You leave with a clearer income direction, aligned offer positioning, structured next steps, simplified focus, and a monetisation pathway that fits your identity instead of forcing you away from it. Clarity replaces fragmentation.',
    forWhom: [
      'You are creating consistently but not monetising clearly',
      'You feel pulled in too many directions',
      'You are tired of copying generic online business advice',
      'You know you have value, but struggle to structure it into income',
      'You want alignment before scaling',
      'You want to build from yourself — not imitation'
    ],
    image: '/images/sovereign.jpg',
    deliverable: 'One-time access - Monetisation clarity report sent via email after purchase',
    appLink: 'https://sovereignbylyraemonetization.lovable.app'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
