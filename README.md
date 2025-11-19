# Le Bois d'Ébène - Cabaret-Restaurant Website

A prestigious, elegant website for a luxury cabaret-restaurant with deep shadows, ebony wood textures, and subtle gold accents. Built with Next.js 14 (App Router), Tailwind CSS, Shadcn/UI, and Framer Motion.

![Le Bois d'Ébène](https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074)

## ✨ Features

- 🎨 **Elegant Design**: Mythical and prestigious aesthetic with realistic wood textures
- 🌍 **Multilingual**: Full French/English support with JSON-based translations
- 🎭 **Smooth Animations**: Framer Motion animations throughout (respects prefers-reduced-motion)
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: AA/AAA contrast ratios, semantic HTML, keyboard navigation
- 🎯 **SEO Optimized**: Proper meta tags and semantic structure
- 🖼️ **Image Optimization**: WebP format, lazy loading, Next.js Image optimization
- 📝 **Content Management**: Easy-to-edit JSON files for all content

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: Shadcn/UI (Radix UI primitives)
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React

## 📁 Project Structure

```
le-bois-d-ebene/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── menu/
│   │   ├── events/
│   │   ├── gallery/
│   │   ├── contact/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/             # React components
│   │   ├── ui/                 # Shadcn/UI components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── contexts/               # React contexts
│   │   └── LanguageContext.tsx
│   └── lib/                    # Utilities
│       └── utils.ts
├── data/                       # JSON content files
│   ├── menu.json
│   ├── events.json
│   ├── gallery.json
│   ├── contact.json
│   └── translations.json
└── public/
    └── images/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or navigate to the project directory**

```bash
cd le-bois-d-ebene-website-2
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Colors

- **Ebony**: `ebony-950` to `ebony-50` - Main dark background tones
- **Gold**: `gold-500`, `gold-400` - Accent colors for highlights
- **Ivory**: `ivory-100` to `ivory-500` - Text and light elements

### Typography

- **Serif**: Playfair Display (Headings, elegant titles)
- **Sans-serif**: Inter (Body text, UI elements)

### Spacing

- **Base unit**: 8px
- **Common values**: 8px, 16px, 24px, 32px

### Border Radius

- **sm**: 4px
- **md**: 8px
- **lg**: 12px

### Shadows

- **subtle**: Light shadow for cards
- **medium**: Medium depth for elevated components
- **deep**: Deep shadows for hero sections and modals

### Animations

- **Micro-interactions**: 200-400ms
- **Component transitions**: 400-600ms
- **Page transitions**: 800-1200ms
- **Easing**: ease-out, ease-in-out

## 📝 Content Management

All content is stored in JSON files in the `/data` directory. Each file contains French and English translations:

### Example: `/data/translations.json`

```json
{
  "nav": {
    "home": {
      "fr": "Accueil",
      "en": "Home"
    }
  }
}
```

### Editing Content

1. Navigate to the appropriate JSON file in `/data/`
2. Update the French (`fr`) and English (`en`) values
3. Save the file - changes will be reflected immediately in development

### Available Content Files

- **menu.json**: Restaurant menu items and categories
- **events.json**: Upcoming and regular events
- **gallery.json**: Image gallery items and categories
- **contact.json**: Contact information and form fields
- **translations.json**: UI text and navigation labels

## 🌍 Language Support

The site supports French and English. Users can switch languages using the language selector in the header. The selected language is stored in localStorage.

### How it works

1. Language context is provided via `LanguageContext`
2. The `useLanguage` hook provides access to current language and translation function
3. All translatable content uses the `t()` function: `t('key', contentObject)`

## 🎭 Animations

All animations use Framer Motion and respect the user's `prefers-reduced-motion` preference:

- **Page transitions**: Fade and slide effects
- **Parallax**: Hero section background movement
- **Hover effects**: Card lift, button micro-bounce
- **Scroll animations**: Fade-in as elements enter viewport
- **Staggered lists**: Sequential animation for list items

## ♿ Accessibility

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Labels**: Proper labels for screen readers
- **Color Contrast**: AA/AAA compliant contrast ratios
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Motion Preferences**: Respects `prefers-reduced-motion`

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

This creates an optimized production build in the `.next` folder.

## 🎯 Key Features by Page

### Home (/)
- Full-screen hero with parallax effect
- Feature cards with icons
- Menu preview
- Events preview
- Call-to-action section

### About (/about)
- Historical narrative
- Values showcase
- Image gallery

### Menu (/menu)
- Categorized menu items
- Dish descriptions and prices
- Wine pairing information

### Events (/events)
- Upcoming special events
- Regular programming
- Event details and booking

### Gallery (/gallery)
- Filterable image grid
- Lightbox view
- Smooth category transitions

### Contact (/contact)
- Reservation form with validation
- Contact information
- Opening hours
- Google Maps integration
- Toast notifications

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  ebony: {
    // Your custom shades
  },
  gold: {
    // Your custom shades
  }
}
```

### Adding New Pages

1. Create a new folder in `/src/app/[page-name]`
2. Add `page.tsx` in that folder
3. Update navigation in `Header.tsx` and `translations.json`

### Modifying Animations

Adjust Framer Motion props in components:

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

## 📦 Component Library

### Shadcn/UI Components Used

- **Button**: Primary CTA and navigation
- **Card**: Content containers
- **Dialog**: Lightbox and modals
- **Accordion**: Collapsible content
- **Badge**: Labels and tags
- **Toast**: Notifications
- **Carousel**: Image galleries
- **Input/Textarea**: Form fields

## 🐛 Known Issues

None at this time. Please report any issues you encounter.

## 📄 License

This project is private and proprietary to Le Bois d'Ébène.

## 🙏 Acknowledgments

- Images: Unsplash (placeholder images)
- Icons: Lucide React
- Fonts: Google Fonts (Playfair Display, Inter)
- UI Components: Shadcn/UI

---

Built with ❤️ for Le Bois d'Ébène

