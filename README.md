# EuroNYC German Auto - Website

A modern, responsive website for a German car mechanic company built with Next.js 15 and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface optimized for conversion
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **SEO Optimized**: Metadata and semantic HTML for better search rankings
- **Brand Focused**: Specialized sections for BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or another package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
euronyc/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Brands.tsx       # German car brands
│   ├── Services.tsx     # Services section
│   ├── About.tsx        # About section
│   ├── Testimonials.tsx # Customer reviews
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── public/              # Static assets
├── .github/             # GitHub configuration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind config
└── next.config.ts       # Next.js config
```

## Customization

### Update Contact Information

Edit `components/Contact.tsx` to update:
- Phone number
- Email address
- Physical address
- Business hours

### Modify Services

Edit `components/Services.tsx` to add or remove services offered.

### Change Images

**Brand Logos:**
- Currently using: WorldVectorLogo CDN (fallback)
- To use your own: Save logos to `public/images/brands/`
- Update paths in `components/Brands.tsx`

**Car Photos:**
- Hero image: Currently using Unsplash
- To use your own: Save to `public/images/cars/`
- Update path in `components/Hero.tsx`

📖 **See `IMAGE_GUIDE.md` for detailed instructions on adding your own images!**

### Change Brand Colors

Edit `tailwind.config.ts` to customize the German-themed color scheme:

```typescript
colors: {
  german: {
    gold: '#FFCC00', // German flag gold
    red: '#DD0000',  // German flag red
    black: '#000000' // German flag black
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:

```bash
npm run build
```

The output will be in the `.next` folder. You can deploy this to any Node.js hosting provider.

## License

This project is private and proprietary.

## Support

For questions or support, contact: info@euronyc.com
