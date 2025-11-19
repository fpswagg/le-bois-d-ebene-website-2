# 🚀 Quick Start Guide - Le Bois d'Ébène

Get your website up and running in 5 minutes!

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- Tailwind CSS
- Shadcn/UI components
- Framer Motion
- TypeScript

## Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Explore the Site

Navigate through these pages:
- **Home** (`/`) - Hero section with parallax, features, menu preview
- **About** (`/about`) - History and values
- **Menu** (`/menu`) - Full gastronomic menu
- **Events** (`/events`) - Upcoming and regular events
- **Gallery** (`/gallery`) - Filterable image gallery with lightbox
- **Contact** (`/contact`) - Reservation form with Google Maps

## Step 4: Customize Content

### Change Menu Items

Edit `data/menu.json`:

```json
{
  "id": "new-dish",
  "name": {
    "fr": "Nom du Plat",
    "en": "Dish Name"
  },
  "description": {
    "fr": "Description française",
    "en": "English description"
  },
  "price": "42€"
}
```

### Add Events

Edit `data/events.json`:

```json
{
  "id": "new-event",
  "title": {
    "fr": "Nouveau Concert",
    "en": "New Concert"
  },
  "date": "2025-12-31",
  "time": "20:00",
  "description": {
    "fr": "Description...",
    "en": "Description..."
  },
  "price": "85€"
}
```

### Update Contact Info

Edit `data/contact.json`:

```json
{
  "info": {
    "name": "Your Restaurant Name",
    "phone": "+33 1 23 45 67 89",
    "email": "contact@yoursite.com"
  }
}
```

## Step 5: Replace Placeholder Images

The site currently uses Unsplash placeholder images. Replace them with your own:

1. Add your images to `public/images/` folder
2. Update image paths in the components:
   - Hero images in `src/app/page.tsx`
   - Gallery images in `data/gallery.json`
   - About page images in `src/app/about/page.tsx`

Example:
```typescript
// Before
backgroundImage: 'url(https://images.unsplash.com/...)'

// After
backgroundImage: 'url(/images/your-image.jpg)'
```

## Step 6: Test Language Switching

Click the **FR / EN** toggle in the header to switch between French and English. All content should update automatically.

## Step 7: Test the Reservation Form

1. Go to `/contact`
2. Fill out the reservation form
3. Submit - you should see a success toast notification
4. Check browser console for form data (in production, connect this to your backend)

## 🎨 Design Customization

### Change Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  ebony: {
    950: '#1a1410',  // Darkest
    900: '#2d241d',
    // ... adjust as needed
  },
  gold: {
    400: '#efc166',  // Main accent
    500: '#e8a63f',
    // ... adjust as needed
  }
}
```

### Modify Fonts

Edit `src/app/layout.tsx`:

```typescript
import { YourSerifFont, YourSansFont } from "next/font/google";

const serif = YourSerifFont({
  subsets: ["latin"],
  variable: "--font-serif",
});
```

### Adjust Animation Speed

Find Framer Motion components and adjust `duration`:

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }} // Adjust this
>
```

## 🏗️ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

## 🚀 Deploy

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Deploy!

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Your own server with Node.js

## ✅ Checklist

- [ ] Installed dependencies
- [ ] Site running on localhost:3000
- [ ] Customized menu items
- [ ] Updated contact information
- [ ] Replaced placeholder images
- [ ] Tested language switching
- [ ] Tested reservation form
- [ ] Customized colors (optional)
- [ ] Built for production
- [ ] Deployed

## 📞 Need Help?

Check the main `README.md` for detailed documentation on:
- Project structure
- Component library
- Content management
- Accessibility features
- Animation system

## 🎉 You're Ready!

Your Le Bois d'Ébène website is now ready to launch. Enjoy your beautiful, performant, multilingual website!

---

**Pro Tips:**

- Use WebP format for all images for best performance
- Test on mobile devices - the site is fully responsive
- Check accessibility with screen readers
- Monitor performance with Lighthouse
- Keep content in JSON files for easy management

