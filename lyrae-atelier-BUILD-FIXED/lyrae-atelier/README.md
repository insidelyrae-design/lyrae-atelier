# LYRAE ATELIER E-Commerce Website

A complete, production-ready e-commerce website for LYRAE ATELIER with PayPal integration. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Complete E-Commerce System**: Product catalog, shopping cart, checkout with PayPal
- **Elegant Design**: Warm, sophisticated, editorial luxury aesthetic matching LYRAE brand
- **Fully Responsive**: Mobile-first design with beautiful typography
- **PayPal Integration**: Secure payment processing with PayPal SDK
- **Product Catalog**: 
  - LYRAE Creative Labs (Free lead magnet)
  - LYRAE Voice (€97 - limited time)
  - LYRAE Quotes OS (€197)
  - SOVEREIGN (€297)
- **Email Capture**: Lead magnet form for LYRAE Identity Transformation
- **Cart Management**: Persistent cart with local storage
- **Clean Architecture**: TypeScript, React Server Components, client-side state management

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Cormorant Garamond (display) + Inter (body)
- **Payment**: PayPal JavaScript SDK
- **State Management**: React Context API
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure PayPal

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)
2. Create a new app (or use existing)
3. Copy your **Client ID**
4. Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

5. Edit `.env.local` and add your PayPal Client ID:

```
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_actual_client_id_here
```

**For Testing (Sandbox)**:
- Use Sandbox credentials from PayPal Developer Dashboard
- Test purchases with PayPal Sandbox test accounts

**For Production (Live)**:
- Switch to Live credentials
- Update `.env.local` with live Client ID

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel Dashboard:
   - Go to your project → Settings → Environment Variables
   - Add `NEXT_PUBLIC_PAYPAL_CLIENT_ID` with your PayPal Client ID

### Method 2: GitHub Integration

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Add environment variables
4. Deploy

## 🎯 PayPal Setup Guide

### Creating PayPal App

1. Go to https://developer.paypal.com/dashboard/
2. Click "Apps & Credentials"
3. Choose "Sandbox" (testing) or "Live" (production)
4. Click "Create App"
5. Name your app (e.g., "LYRAE ATELIER")
6. Copy the **Client ID**

### Testing Payments (Sandbox)

1. Use Sandbox Client ID in `.env.local`
2. Create test accounts at https://developer.paypal.com/dashboard/accounts
3. Use test account credentials during checkout
4. Monitor transactions in Sandbox dashboard

### Going Live

1. Switch to "Live" in PayPal Developer Dashboard
2. Update `.env.local` with Live Client ID
3. Redeploy to Vercel with updated environment variable
4. Test with real PayPal account (small amount first!)

## 📁 Project Structure

```
lyrae-atelier/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Homepage
│   ├── shop/               # Shop page (all products)
│   ├── product/[slug]/     # Dynamic product pages
│   ├── cart/               # Shopping cart
│   ├── checkout/           # Checkout with PayPal
│   ├── success/            # Post-purchase thank you
│   └── about/              # About LYRAE
├── components/
│   ├── Navigation.tsx      # Header navigation
│   └── Footer.tsx          # Footer
├── lib/
│   ├── products.ts         # Product catalog data
│   └── cart-context.tsx    # Shopping cart state
└── public/                 # Static assets
```

## 🛍️ Product Catalog

All products are defined in `lib/products.ts`. To add/edit products:

1. Open `lib/products.ts`
2. Edit the `products` array
3. Each product requires all fields

## 🎨 Customization

### Colors

Edit colors in `app/globals.css`

### Product Links

To add payment links for each product, edit `lib/products.ts` and add a `paymentLink` field to each product.

## 📄 License

Built for LYRAE ATELIER. All rights reserved.

---

Built with intention. Deployed without starting over.
