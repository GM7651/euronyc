# Image Guide for EuroNYC German Auto Website

## 🖼️ How to Add Your Own Images

### Brand Logos

**Location:** `public/images/brands/`

Download high-quality SVG or PNG logos for each brand and save them as:
- `bmw.svg` or `bmw.png`
- `mercedes.svg` or `mercedes.png`
- `audi.svg` or `audi.png`
- `vw.svg` or `vw.png`
- `porsche.svg` or `porsche.png`

**Recommended Logo Sources:**
1. **Official Websites** - Best quality, proper licensing
   - BMW: https://www.bmw.com
   - Mercedes-Benz: https://www.mercedes-benz.com
   - Audi: https://www.audi.com
   - Volkswagen: https://www.vw.com
   - Porsche: https://www.porsche.com

2. **Free Logo Resources:**
   - Brandfetch: https://brandfetch.com
   - Seeklogo: https://seeklogo.com
   - Worldvectorlogo: https://worldvectorlogo.com (Currently using as fallback)

**Specifications:**
- Format: SVG (vector) or PNG with transparent background
- Size: 200x200px minimum for PNG
- Colors: Original brand colors or monochrome

### Car Photos

**Location:** `public/images/cars/`

**Hero Section:**
Save your main hero image as: `hero-car.jpg` or `hero-car.png`

**Recommended Car Photo Sources:**
1. **Free High-Quality Photos:**
   - Unsplash: https://unsplash.com/s/photos/german-cars (Currently using)
   - Pexels: https://www.pexels.com/search/luxury%20car/
   - Pixabay: https://pixabay.com/images/search/bmw/

2. **Paid Stock Photos:**
   - Shutterstock
   - Getty Images
   - Adobe Stock

3. **Your Own Photos:**
   - Take photos of actual cars you've serviced
   - Get client permission if needed
   - Use good lighting and clean backgrounds

**Specifications:**
- Format: JPG or PNG
- Size: 1920x1080px recommended (Full HD)
- Aspect ratio: 16:9 or similar
- File size: Under 500KB (optimize before uploading)

### How to Replace Current Images

#### 1. Replace Brand Logos

Edit `components/Brands.tsx`:

```typescript
const brands = [
  { 
    name: 'BMW', 
    logo: '/images/brands/bmw.svg',  // Change this path
    fallbackLogo: 'https://cdn.worldvectorlogo.com/logos/bmw.svg'
  },
  // ... repeat for other brands
];
```

#### 2. Replace Hero Car Image

Edit `components/Hero.tsx`:

Find this line:
```typescript
src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80"
```

Replace with:
```typescript
src="/images/cars/hero-car.jpg"
```

And remove the `unoptimized` prop for better performance.

### Image Optimization Tips

1. **Compress Images:**
   - Use TinyPNG: https://tinypng.com
   - Or ImageOptim (Mac): https://imageoptim.com

2. **Convert to WebP:**
   - Better compression than JPG
   - Supported by Next.js automatically

3. **Responsive Images:**
   - Next.js Image component handles this automatically
   - Serves different sizes based on device

### Legal Considerations

⚠️ **Important:** 
- Always ensure you have proper rights to use images
- Brand logos: Check brand guidelines for usage terms
- Car photos: Use royalty-free or your own photos
- Attribution: Provide credit if required by the license

### Current Setup

**Active External URLs:**
- Brand Logos: WorldVectorLogo CDN (free, but check licensing)
- Hero Car: Unsplash (free for commercial use with attribution)

**To Go Fully Self-Hosted:**
1. Download all logos and save to `public/images/brands/`
2. Download/capture car photos and save to `public/images/cars/`
3. Update file paths in components as shown above
4. Remove `unoptimized` prop from Image components
5. Remove external domain from `next.config.ts` if not needed

### Need Help?

- Next.js Image Documentation: https://nextjs.org/docs/app/api-reference/components/image
- For custom images, contact your designer or photographer
- For brand compliance, check each manufacturer's brand guidelines
