# 📸 Image Setup Guide

Your Next.js portfolio is now optimized for image loading. Follow this guide to add your custom images.

## Directory Structure

```
public/
├── images/
│   ├── profile/
│   │   └── olowojare.jpeg       ← Profile image (About page)
│   └── projects/
│       ├── quickserve.jpg       ← Quickserve project
│       ├── trustrely.jpg        ← TrustRelay project
│       ├── wedding-os.jpg       ← Wedding-OS project
│       ├── al-kawthar.jpg       ← Al-Kawthar project
│       ├── dispatchr.jpg        ← Dispatchr project
│       ├── baba-k-tickethub.jpg ← BABA-K TicketHub project
│       ├── five-ways-intl-sch.jpg ← Five Ways International School
│       ├── daily-motivational-quote.jpg ← Daily Motivational Quote
│       ├── autofest-driftmaster.jpg ← Autofest International Driftmaster
│       └── tradeexpo.jpg        ← TradeExpo project
```

## Image Specifications

### Profile Image (`public/images/profile/olowojare.jpeg`)
- **Usage**: About page hero section
- **Aspect Ratio**: 4:5 (portrait)
- **Recommended Size**: 600×800px
- **Format**: JPEG (quality 85) or WebP
- **Purpose**: Professional headshot/portrait

### Project Images (`public/images/projects/*.jpg`)
- **Usage**: Projects page showcase
- **Aspect Ratio**: 16:9 (widescreen)
- **Recommended Size**: 1200×675px (minimum)
- **Format**: JPG (quality 80) or WebP
- **Purpose**: High-quality project screenshots/mockups

#### Project Image Names:
| Project | Filename | Description |
|---------|----------|-------------|
| Quickserve | `quickserve.jpg` | Logistics SaaS platform screenshot |
| TrustRelay | `trustrely.jpg` | Fintech protocol interface |
| Wedding-OS | `wedding-os.jpg` | Event management system UI |
| Al-Kawthar | `al-kawthar.jpg` | Digital Quran application |
| Dispatchr | `dispatchr.jpg` | Fleet management dashboard |

## How to Add Images

### Step 1: Prepare Your Images
- Use an image editor (Photoshop, Figma, GIMP, etc.)
- Crop/resize to recommended dimensions
- Optimize for web (quality 80-85%)
- Export as JPG or WebP

### Step 2: Place Files
1. Save your profile image as `olowojare.jpeg` to `public/images/profile/`
2. Save project images with exact filenames (above) to `public/images/projects/`

### Step 3: Verify in Browser
```bash
npm run dev
```
- Visit `/about` to verify profile image loads
- Visit `/projects` to verify project images load

## Image Optimization Details

All images in your portfolio use Next.js `Image` component with:
- ✅ **Automatic Format Selection**: Serves WebP if supported, falls back to JPG
- ✅ **Responsive Sizing**: Automatically serves correct size for device
- ✅ **Lazy Loading**: Below-fold images load only when scrolled into view
- ✅ **Blur Placeholder**: Shows blur while loading (prevents layout shift)
- ✅ **Priority Loading**: Hero images load first with `priority={true}`

## Image Quality vs File Size

| Quality | File Size | Best For |
|---------|-----------|----------|
| 100 | Large | Print materials |
| 85 | Medium | Website hero images |
| 75 | Small | Gallery thumbnails |
| 60 | Very Small | Progressive enhancement |

**Recommended**: Use quality 80-85 for projects, 85 for profile.

## Troubleshooting

### Images not loading?
1. Check filename matches exactly (case-sensitive on Linux/Mac)
2. Verify image is in correct folder
3. Clear Next.js cache: `rm -rf .next`
4. Restart dev server

### Images look blurry?
1. Ensure source image is high resolution (at least 1200px wide)
2. Check image quality isn't too compressed
3. Use WebP format for better compression

### Layout shifts when images load?
1. Confirmed fixed! Using Next.js `Image` with `fill` and `priority` prevents this.

## Advanced: Custom Blur Placeholders

For ultra-smooth image loading, you can generate blur data URLs:
```bash
npm install plaiceholder
```

Then in your Image component:
```tsx
<Image
  src="/images/profile/olowojare.jpg"
  alt="Profile"
  fill
  priority
  blurDataURL="data:image/jpeg;base64,..." // Generated blur
  placeholder="blur"
/>
```

## Next Steps

1. ✅ Create/gather your images
2. ✅ Resize and optimize them
3. ✅ Place in correct folders with exact filenames
4. ✅ Test in dev server
5. ✅ Deploy to production

**Total expected time**: 10-15 minutes

---

**Questions?** Check your code audit report for more info on image optimization.
