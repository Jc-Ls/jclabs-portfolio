# 📚 PROJECT MANAGEMENT GUIDE

## 🎯 Your New Projects Added

Your portfolio now includes 10 projects total. The 5 new projects were added with placeholder `.vercel.app` links:

### Projects 01-05 (Existing)
- ✅ Quickserve → `quickserve.vercel.app`
- ✅ TrustRelay → `trustrely.vercel.app`
- ✅ Wedding-OS → `wedding-os.vercel.app`
- ✅ Al-Kawthar → `al-kawthar.vercel.app`
- ✅ Dispatchr → `dispatchr.vercel.app`

### Projects 06-10 (NEW - Placeholder Links)
- 🔗 BABA-K TicketHub → `https://baba-k-tickethub.vercel.app` (update later)
- 🔗 Five Ways International School → `https://five-ways-intl-sch.vercel.app` (update later)
- 🔗 Daily Motivational Quote → `https://daily-motivational-quote.vercel.app` (update later)
- 🔗 Autofest International Driftmaster → `https://autofest-driftmaster.vercel.app` (update later)
- 🔗 TradeExpo → `https://tradeexpo.vercel.app` (update later)

---

## 🔄 HOW TO UPDATE VERCEL LINKS LATER

When you get the actual Vercel deployment URLs for your projects, follow these steps:

### Step 1: Locate the Projects File
```
src/constants/projects.ts
```

### Step 2: Find the Project You Want to Update
Search for the project by `id` and `name`. Example for BABA-K TicketHub:

```typescript
{
  id: '06',
  name: 'BABA-K TicketHub',
  type: 'Ticketing Platform',
  status: 'Deployed',
  description: '...',
  tech: ['Next.js', 'Stripe', 'PostgreSQL'],
  image: '/images/projects/baba-k-tickethub.jpg',
  link: 'https://baba-k-tickethub.vercel.app', // ← UPDATE THIS
}
```

### Step 3: Replace the Link
Change the `link` field to your actual Vercel URL:

```typescript
// Before:
link: 'https://baba-k-tickethub.vercel.app'

// After (example):
link: 'https://baba-k-ticketing-platform-prod.vercel.app'
```

### Step 4: Test the Link
```bash
npm run dev
# Visit http://localhost:3000/projects
# Click "View Live" on the project
# Verify it opens the correct URL
```

### Step 5: Deploy
```bash
npm run build
npm start
# Then deploy to Vercel
```

---

## 📝 QUICK REFERENCE: All Project Links

| ID | Project Name | Current Link | Status |
|-----|-------------|--------------|--------|
| 01 | Quickserve | `quickserve.vercel.app` | ✅ Ready |
| 02 | TrustRelay | `trustrely.vercel.app` | ✅ Ready |
| 03 | Wedding-OS | `wedding-os.vercel.app` | ✅ Ready |
| 04 | Al-Kawthar | `al-kawthar.vercel.app` | ✅ Ready |
| 05 | Dispatchr | `dispatchr.vercel.app` | ✅ Ready |
| 06 | BABA-K TicketHub | `baba-k-tickethub.vercel.app` | 🔄 Placeholder |
| 07 | Five Ways Int'l School | `five-ways-intl-sch.vercel.app` | 🔄 Placeholder |
| 08 | Daily Motivational Quote | `daily-motivational-quote.vercel.app` | 🔄 Placeholder |
| 09 | Autofest Driftmaster | `autofest-driftmaster.vercel.app` | 🔄 Placeholder |
| 10 | TradeExpo | `tradeexpo.vercel.app` | 🔄 Placeholder |

---

## 🖼️ PROJECT IMAGE SETUP

### New Project Images Needed

Add these images to `public/images/projects/`:

| Project | Filename | Specs |
|---------|----------|-------|
| BABA-K TicketHub | `baba-k-tickethub.jpg` | 1200×675px (16:9) |
| Five Ways Int'l School | `five-ways-intl-sch.jpg` | 1200×675px (16:9) |
| Daily Motivational Quote | `daily-motivational-quote.jpg` | 1200×675px (16:9) |
| Autofest Driftmaster | `autofest-driftmaster.jpg` | 1200×675px (16:9) |
| TradeExpo | `tradeexpo.jpg` | 1200×675px (16:9) |

**Steps:**
1. Take screenshots or create mockups of your projects
2. Resize to 1200×675px (16:9 aspect ratio)
3. Optimize for web (quality 80-85%)
4. Save as JPG or WebP
5. Place in `public/images/projects/` with exact filenames above

---

## ✨ PROJECT DETAILS ADDED

All projects already have predefined:
- ✅ **IDs**: 01-10 (sequential)
- ✅ **Types**: Categorized by domain
- ✅ **Status**: All set to "Deployed"
- ✅ **Descriptions**: Professional, detailed
- ✅ **Tech Stack**: Relevant technologies listed
- ✅ **Links**: Placeholder `.vercel.app` URLs

### Project Types Reference
| Project | Type |
|---------|------|
| BABA-K TicketHub | Ticketing Platform |
| Five Ways International School | EdTech Platform |
| Daily Motivational Quote | Wellness App |
| Autofest International Driftmaster | Event Platform |
| TradeExpo | B2B Commerce |

---

## 🔗 LINK UPDATES WORKFLOW

### Batch Update Multiple Links

If updating multiple projects at once, edit `src/constants/projects.ts`:

```typescript
// Find and replace all project links:
const PROJECTS: Project[] = [
  // ... other projects ...
  {
    id: '06',
    name: 'BABA-K TicketHub',
    link: 'https://actual-baba-k-url.vercel.app', // NEW URL
  },
  {
    id: '07',
    name: 'Five Ways International School',
    link: 'https://actual-school-url.vercel.app', // NEW URL
  },
  // ... etc ...
];
```

---

## 🚀 DEPLOYMENT CHECKLIST

Before deploying after link updates:

- [ ] All 5 new projects have images in `public/images/projects/`
- [ ] All vercel.app links are updated to actual URLs
- [ ] `npm run build` runs without errors
- [ ] Test links locally: `npm run dev`
- [ ] Visit `/projects` page and click "View Live" buttons
- [ ] Verify all links open correct Vercel deployments
- [ ] Commit changes: `git add -A && git commit -m "Update project links"`
- [ ] Deploy to production

---

## ⚡ LIVE PREVIEW

Your projects page now shows:
- **Full project grid** with 10 projects
- **Clickable "View Live" buttons** for each project
- **External link indicators** (opens in new tab)
- **Responsive layout** on all devices
- **Hover effects** with image zoom and corner accents

**Current state:** All links are live and clickable. They currently point to placeholder `.vercel.app` URLs.

---

## 💡 TIPS

1. **Link Format**: Always use `https://` (no `http://`)
2. **Testing**: Use `npm run dev` to test locally before deploying
3. **Images**: Match filenames exactly (case-sensitive on Linux/Mac)
4. **Batch Updates**: Edit `src/constants/projects.ts` to update multiple links at once
5. **Git Tracking**: Commit after updates: `git add . && git commit -m "Update project links"`

---

## ❓ TROUBLESHOOTING

### Link not working?
1. Verify URL is correct with `https://`
2. Check the Vercel deployment is live
3. Clear browser cache
4. Test in incognito/private mode

### Image not showing?
1. Check filename matches exactly (case-sensitive)
2. Ensure image is in `public/images/projects/`
3. Verify image is JPG or WebP format
4. Check image dimensions (1200×675px recommended)

### Build fails after update?
1. Check TypeScript: `npx tsc --noEmit`
2. Clear .next cache: `rm -rf .next`
3. Run `npm install` to verify dependencies
4. Check `src/constants/projects.ts` for syntax errors

---

**✅ You're all set! Add images, update links, and deploy when ready!**
