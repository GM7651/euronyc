# Quick Image Reference

## Current Image URLs (Temporary - Using CDN)

### Brand Logos (WorldVectorLogo CDN)
```
BMW:          https://cdn.worldvectorlogo.com/logos/bmw.svg
Mercedes:     https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg
Audi:         https://cdn.worldvectorlogo.com/logos/audi.svg
Volkswagen:   https://cdn.worldvectorlogo.com/logos/volkswagen.svg
Porsche:      https://cdn.worldvectorlogo.com/logos/porsche.svg
```

### Car Photos (Unsplash)
```
Hero Car:     https://images.unsplash.com/photo-1555215695-3004980ad54e
Background:   https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8
```

## To Replace with Your Own Images:

1. **Download/Create Images**
   - Brand logos: 200x200px SVG or PNG
   - Car photos: 1920x1080px JPG

2. **Save to Public Folder**
   ```
   public/images/brands/
   ├── bmw.svg
   ├── mercedes.svg
   ├── audi.svg
   ├── vw.svg
   └── porsche.svg

   public/images/cars/
   ├── hero-car.jpg
   └── background.jpg
   ```

3. **Update Component Files**
   - `components/Brands.tsx` - Change logo paths
   - `components/Hero.tsx` - Change hero car image
   - `components/Services.tsx` - Change background image

4. **Remove Unoptimized Flag**
   - Once using local images, remove `unoptimized` prop
   - Next.js will automatically optimize images

## Recommended Free Sources:

**Logos:**
- https://brandfetch.com
- https://seeklogo.com
- Official brand press kits

**Photos:**
- https://unsplash.com/s/photos/german-cars
- https://pexels.com/search/luxury%20car
- https://pixabay.com

## File Structure
```
euronyc/
├── public/
│   └── images/
│       ├── brands/     (Car brand logos)
│       └── cars/       (Car photos)
├── components/
│   ├── Brands.tsx      (Uses brand logos)
│   ├── Hero.tsx        (Uses hero car image)
│   └── Services.tsx    (Uses background image)
└── IMAGE_GUIDE.md      (Full documentation)
```
