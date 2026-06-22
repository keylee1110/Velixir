# Velixir Website Design Brief

## 1. Project Overview

I want to rebuild the Velixir perfume website from scratch as a custom-coded frontend website.

### Current Website

- Current website: https://velixir-6.myshopify.com/
- It redirects to: https://velixir.vn/

### Reference Website

- Reference website: https://www.bykilian.com/

### Important Direction

Use By Kilian only as a visual and structural reference.

Do not clone By Kilian exactly. Do not copy copyrighted assets, code, brand names, product names, text, videos, images, icons, or layout one-to-one.

The goal is to reinterpret the luxury perfume style for Velixir with its own identity.

---

## 2. Brand Direction

Velixir is a luxury perfume brand inspired by mythology and modern elegance.

### Current Brand Lines

- Velixir Parfums
- Redefining Luxury
- Myths Reborn Through Scent
- Inspired by Legends, Made for Icons
- Crafted to Perfection

### Brand Personality

Velixir should feel:

- Mythological
- Elegant
- Mysterious
- Refined
- Cinematic
- Sensual
- Premium
- Editorial
- Modern luxury

The website should feel like a luxury fragrance house, not a generic ecommerce template.

---

## 3. Main Goal

This website is not a full ecommerce checkout website.

It is a premium brand showroom and product catalog.

Each product should have its own detail page. From there, users can click external purchase buttons linking to:

- Shopee
- TikTok Shop

### Do Not Build

- Internal cart
- Internal checkout
- Customer account system
- Payment gateway
- Shopify-style ecommerce flow

### Build Instead

- Luxury landing page
- Product catalog
- Product detail pages
- Brand story sections
- Marketplace CTA buttons
- Trust-building content
- Contact and catalogue pages

---

## 4. Tech Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-based architecture
- Responsive design
- SEO-friendly pages
- Clean reusable code

Recommended project structure:

```txt
src/
  app/
    page.tsx
    fragrances/
      page.tsx
    products/
      [slug]/
        page.tsx
    story/
      page.tsx
    contact/
      page.tsx
  components/
    AnnouncementBar.tsx
    Header.tsx
    HeroVideo.tsx
    ProductGrid.tsx
    ProductCard.tsx
    EditorialSection.tsx
    BenefitsSection.tsx
    Footer.tsx
    ProductDetail.tsx
    Button.tsx
  data/
    products.ts

public/
  videos/
    hero.mp4
  images/
    product-demeter.png
    product-athena.png
    product-icarus.png
    product-orion.png
    story.jpg
    campaign.jpg
```

---

## 5. Design Style

The website should be an elegant luxury perfume website.

It can be inspired by By Kilian’s structure:

- Fullscreen hero
- Luxury header
- Product grid
- Editorial image sections
- Service icon row
- Dark footer

But the identity must be adapted to Velixir.

### Visual Direction

- Minimal luxury
- Black and ivory contrast
- Champagne gold accents
- Large whitespace
- Uppercase navigation
- Letter spacing
- Editorial photography
- Fullscreen hero video
- Refined product cards
- Dark premium footer
- Smooth hover effects
- Subtle fade-in animations
- No childish colors
- No generic Shopify template look
- No crowded product-shop layout

---

## 6. Color Palette

Use the following luxury palette:

```txt
Primary Black: #050505
Soft Black: #111111
Ivory: #F8F5EF
Warm Beige: #D8C3A5
Champagne Gold: #C9A45C
Bronze: #8A5A32
Muted Gray: #8A8A8A
```

### Usage Rules

- Use black for hero overlay, footer, luxury contrast sections.
- Use ivory or white for product grid sections.
- Use champagne gold only as an accent, not as a dominant color.
- Use beige and bronze for soft warmth.
- Avoid bright gradients, neon colors, or loud UI effects.
- Borders should be subtle and elegant.
- Shadows should be minimal.

---

## 7. Typography

Use a luxury serif font for large headings, such as:

- Cormorant Garamond
- Playfair Display

Use a clean sans-serif font for body, buttons, and navigation, such as:

- Inter
- Helvetica Neue-style sans serif
- Montserrat if needed

### Typography Rules

Navigation and buttons should use:

```css
text-transform: uppercase;
letter-spacing: 0.12em;
```

Headings should feel refined, spacious, and editorial.

Product names should be uppercase with strong letter spacing.

Body copy should be clean, readable, and not too decorative.

---

## 8. Pages

Create these pages:

1. Homepage: `/`
2. Product listing page: `/fragrances`
3. Product detail page: `/products/[slug]`
4. About / story page: `/story`
5. Contact page: `/contact`

---

## 9. Homepage Structure

The homepage should contain:

1. Announcement bar
2. Transparent luxury header
3. Fullscreen hero video
4. Featured collection product grid
5. Editorial brand story section
6. Campaign image section
7. Benefits / service icons section
8. Catalogue / social proof section
9. Dark luxury footer

---

## 10. Announcement Bar

### Text

```txt
DISCOVER VELIXIR — MYTHS REBORN THROUGH SCENT
```

### Style

- Black background
- White text
- Centered
- Small uppercase text
- Wide letter spacing
- Height around 36–44px
- Should feel premium, not promotional-heavy

---

## 11. Header

### Desktop Header

The header should be transparent over the hero section.

Suggested menu items:

- Home
- Fragrances
- Story
- Catalogue
- Contact

Suggested right actions:

- Shopee
- TikTok Shop

### Header Behavior

- Transparent over the hero video.
- On scroll, become solid black or ivory with proper contrast.
- Smooth transition.
- Logo should feel premium.
- Menu text should be uppercase with letter spacing.
- Avoid bulky buttons in the main nav.

### Mobile Header

The mobile menu should be elegant.

Use either:

- Fullscreen drawer
- Slide-in drawer

Mobile menu should include:

- Home
- Fragrances
- Story
- Catalogue
- Contact
- Shopee
- TikTok Shop

---

## 12. Hero Section

The hero is the most important section.

### Layout

- Full viewport height
- Background video from `/public/videos/hero.mp4`
- Dark overlay
- Centered text
- Premium CTA buttons

### Hero Copy

```txt
VELIXIR PARFUMS
Redefining Luxury
Myths reborn through scent.
```

### Buttons

```txt
DISCOVER THE COLLECTION
SHOP ON SHOPEE
```

### Style

- Cinematic
- Slow
- Elegant
- Premium
- Minimal copy
- Large spacing
- Strong contrast
- Dark overlay around 35–55%

The hero should look like a luxury fragrance campaign, not a normal ecommerce banner.

---

## 13. Product Collection Section

### Title

```txt
EVERY MYTH HAS ITS SCENT
```

### Subtitle

```txt
Discover fragrances shaped by legends, crafted for modern icons.
```

### Products to Show

Show 4 products in a clean luxury grid:

- Velixir Demeter Eau De Parfum for Unisex
- Velixir Athena Eau De Parfum for Unisex
- Velixir Icarus Eau De Parfum for Unisex
- Velixir Orion Eau De Parfum for Unisex

### Product Card Content

Each product card should include:

- Large centered product image
- Optional small `VIEW DETAILS` button on hover
- Product name uppercase
- Notes line
- Price: `From 790.000₫`
- Buttons:
  - `SHOP ON SHOPEE`
  - `SHOP ON TIKTOK`

### Product Card Style

- White or ivory background
- Lots of whitespace
- No heavy borders
- Subtle hover lift
- Product image slightly zooms on hover
- Text centered
- Premium spacing
- Elegant product presentation
- Avoid sale-badge-heavy ecommerce style

---

## 14. Product Listing Page: `/fragrances`

The product listing page should expand the collection section into a dedicated catalog page.

### Layout

- Header
- Page hero or intro section
- Product grid
- Short brand copy
- Footer

### Page Title

```txt
FRAGRANCES
```

### Page Subtitle

```txt
Discover Velixir fragrances inspired by legends, crafted for modern icons.
```

### Requirements

- Use the same product data from `/src/data/products.ts`.
- Do not hardcode repeated product cards.
- Use data mapping.
- Product cards should link to `/products/[slug]`.
- Marketplace buttons should open external links in a new tab.

---

## 15. Product Detail Page: `/products/[slug]`

The product detail page should not behave like a checkout page.

It should focus on brand storytelling and then send users to Shopee or TikTok Shop.

### Desktop Layout

- Left: product image gallery
- Right: product information

### Mobile Layout

- Single column
- Product image first
- Product info below
- CTA buttons easy to tap

### Product Detail Content

Include:

- Product name
- Eau De Parfum for Unisex
- Price
- Short poetic description
- Fragrance notes
- Top notes
- Heart notes
- Base notes
- Mood / occasion
- Size
- External purchase buttons:
  - `SHOP ON SHOPEE`
  - `SHOP ON TIKTOK SHOP`

### Important

Do not include:

- Add to cart
- Quantity selector
- Checkout
- Internal payment
- Account login

### CTA Button Behavior

- External links should open in a new tab.
- Use `target="_blank"` and `rel="noopener noreferrer"`.
- Add clear `aria-label` values.

---

## 16. Product Data Structure

Create product data in:

```txt
/src/data/products.ts
```

Use this structure:

```ts
export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  notes: string[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  description: string;
  mood: string;
  size: string;
  image: string;
  gallery: string[];
  shopeeUrl: string;
  tiktokUrl: string;
};
```

### Example Product Data

```ts
export const products: Product[] = [
  {
    slug: "demeter",
    name: "Velixir Demeter",
    subtitle: "Eau De Parfum for Unisex",
    price: "From 790.000₫",
    notes: ["Floral", "Soft Musk", "Warm Amber"],
    topNotes: ["Citrus", "Green Accord"],
    heartNotes: ["White Floral", "Powdery Notes"],
    baseNotes: ["Musk", "Amber", "Soft Woods"],
    description:
      "Inspired by abundance and quiet grace, Demeter is a luminous fragrance with a soft, elegant trail.",
    mood: "Soft, graceful, day-to-night",
    size: "50ml / 100ml",
    image: "/images/product-demeter.png",
    gallery: ["/images/product-demeter.png", "/images/product-demeter-2.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  }
];
```

---

## 17. Brand Story Section

Use this copy:

```txt
INSPIRED BY LEGENDS, MADE FOR ICONS

Velixir transforms ancient myths into modern scent rituals. Each fragrance is created as a symbol — a presence, a memory, an aura.
```

### CTA

```txt
DISCOVER OUR STORY
```

### Style

- Editorial layout
- Large image
- Text overlay or side-by-side layout
- Premium spacing
- Dark overlay if text is on image
- Serif headline
- Short copy only

---

## 18. Campaign Image Section

Use a large full-width image with overlay text.

### Copy

```txt
CRAFTED TO PERFECTION

An invitation to discover elegance through scent.
```

### Style

- Full-width editorial image
- Dark overlay
- Centered or lower-third text
- CTA optional
- Should feel like a perfume campaign image

---

## 19. Benefits Section

Create 4 luxury service items with simple line icons.

### Items

1. Authentic Velixir Fragrances
2. Available on Shopee & TikTok Shop
3. Gift-ready Presentation
4. Discover Your Signature Scent

### Style

- Ivory or white background
- 4 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Simple gray/gold line icons
- Centered text
- Uppercase small CTA or label if needed
- Similar structure to luxury service icon rows, but adapted for Velixir

---

## 20. Catalogue / Social Proof Section

Create a section that encourages users to view the catalogue or follow the brand.

### Possible Copy

```txt
EXPLORE THE VELIXIR CATALOGUE

Discover the full fragrance universe of Velixir.
```

### CTA Options

- `DOWNLOAD CATALOGUE`
- `VIEW CATALOGUE`
- `FOLLOW ON TIKTOK`
- `SHOP ON SHOPEE`

### Style

- Minimal
- Premium
- Centered text
- Ivory or soft black background depending on page rhythm

---

## 21. Footer

The footer should be dark black and premium.

### Footer Content

Include:

- Newsletter sign-up style section
- Brand columns
- Shopee / TikTok Shop links
- Contact information
- Social links
- Legal/company info area

### Footer Copy

```txt
VELIXIR
Myths reborn through scent.
```

### Suggested Footer Columns

#### Brand

- Our Story
- Fragrances
- Catalogue
- Contact

#### Shop

- Shopee
- TikTok Shop

#### Contact

- Email
- Phone
- Address

#### Social

- Instagram
- TikTok
- Facebook

### Style

- Black background
- White or ivory text
- Champagne gold accents
- Uppercase section labels
- Wide letter spacing
- Thin divider lines
- Spacious layout

---

## 22. Responsive Requirements

### Desktop

- Cinematic luxury layout
- Large hero
- Wide editorial sections
- Product grid with 4 columns
- Premium whitespace

### Tablet

- Maintain large imagery and spacing
- Product grid can become 2 columns
- Header should remain readable

### Mobile

- Hero still strong
- Product grid becomes 1 column
- Menu becomes fullscreen or slide-in drawer
- CTA buttons must be easy to tap
- Avoid tiny text
- Avoid layout shift
- Video should not break mobile performance

---

## 23. Asset Paths

Use placeholder paths:

```txt
/videos/hero.mp4
/images/product-demeter.png
/images/product-athena.png
/images/product-icarus.png
/images/product-orion.png
/images/story.jpg
/images/campaign.jpg
```

### Asset Rules

- Use optimized images.
- Use product PNGs with transparent background if possible.
- Use compressed MP4 for the hero video.
- Provide fallback poster image for the hero video if possible.
- Use `next/image` for product and editorial images.

---

## 24. Components to Create

Create these components:

- `AnnouncementBar`
- `Header`
- `HeroVideo`
- `ProductGrid`
- `ProductCard`
- `EditorialSection`
- `BenefitsSection`
- `Footer`
- `ProductDetail`
- `Button`

### Component Rules

- Components should be reusable.
- Do not repeat product card code manually.
- Use props where needed.
- Keep page files clean.
- Keep styling consistent with Tailwind.

---

## 25. Code Quality Requirements

- Clean TypeScript
- Reusable components
- Tailwind utility classes
- Accessible buttons and links
- External marketplace links open in new tab
- Add `aria-label` values where needed
- No hardcoded repeated product cards; use data mapping
- No internal cart logic
- No checkout logic
- No unnecessary dependencies
- Responsive and mobile-first
- SEO-friendly metadata for pages

---

## 26. Animation and Interaction

Use subtle animations only.

### Allowed

- Header transition on scroll
- Product image zoom on hover
- Product card hover lift
- Fade-in sections
- Underline link animation
- Smooth drawer menu

### Avoid

- Heavy parallax
- Overdone motion
- Flashy effects
- Neon glow
- Large layout-shifting animation
- Slow page load due to animation libraries

---

## 27. SEO Requirements

Add basic SEO metadata.

### Homepage Metadata

```txt
Title: Velixir Parfums | Redefining Luxury
Description: Discover Velixir fragrances inspired by legends and crafted for modern icons.
```

### Fragrances Page Metadata

```txt
Title: Fragrances | Velixir Parfums
Description: Explore Velixir Eau De Parfum collections inspired by mythology and modern elegance.
```

### Product Page Metadata

Each product page should include dynamic metadata:

```txt
Title: [Product Name] | Velixir Parfums
Description: Discover [Product Name], a Velixir Eau De Parfum inspired by mythology and crafted for modern icons.
```

---

## 28. Accessibility Requirements

- Buttons must have visible text.
- External links must have clear labels.
- Use semantic HTML.
- Use `alt` text for all meaningful images.
- Hero video should be muted and decorative.
- If video is decorative, hide it from screen readers or provide meaningful surrounding text.
- Maintain color contrast.
- Mobile menu should be keyboard accessible.

---

## 29. Marketplace Link Rules

All Shopee and TikTok Shop buttons should:

- Open in a new tab.
- Use `rel="noopener noreferrer"`.
- Have clear aria labels.
- Be data-driven from product data.
- Use placeholder links until real links are available.

Example:

```tsx
<a
  href={product.shopeeUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Shop ${product.name} on Shopee`}
>
  SHOP ON SHOPEE
</a>
```

---

## 30. Final Build Goal

The finished site should feel like a luxury perfume brand showroom.

It should:

- Look premium at first glance.
- Make Velixir feel trustworthy.
- Showcase products beautifully.
- Tell the brand story.
- Guide users to Shopee and TikTok Shop for purchase.
- Avoid unnecessary ecommerce complexity.
- Be easy to maintain and expand later.

The final impression should be:

```txt
A cinematic, myth-inspired luxury perfume house with clean product discovery and clear marketplace purchase paths.
```
