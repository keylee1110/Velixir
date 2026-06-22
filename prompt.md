I want to rebuild the Velixir perfume website from scratch as a custom-coded frontend website.

Current website:
https://velixir-6.myshopify.com/
It redirects to velixir.vn.

Reference website:
https://www.bykilian.com/

Important:
Use By Kilian only as a visual and structural reference. Do not clone it exactly. Do not copy copyrighted assets, code, brand names, or text. Reinterpret the luxury perfume style for Velixir.

Brand:
Velixir is a luxury perfume brand inspired by mythology and modern elegance.
Current brand lines include:
- Velixir Parfums
- Redefining Luxury
- Myths Reborn Through Scent
- Inspired by Legends, Made for Icons
- Crafted to Perfection

Main goal:
This website is not a full ecommerce checkout website.
It is a premium brand showroom and product catalog.
Each product should have detail pages and external purchase buttons linking to Shopee and TikTok Shop.

Tech stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-based architecture
- Responsive design
- SEO-friendly pages
- Clean reusable code

Design style:
Elegant luxury perfume website.
Inspired by By Kilian’s layout: fullscreen hero, luxury header, product grid, editorial image sections, service icons, dark footer.
But adapt the identity to Velixir: mythological, mysterious, refined, cinematic, sensual, premium.

Visual direction:
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

Color palette:
- Primary black: #050505
- Soft black: #111111
- Ivory: #F8F5EF
- Warm beige: #D8C3A5
- Champagne gold: #C9A45C
- Bronze: #8A5A32
- Muted gray: #8A8A8A

Typography:
Use a luxury serif font for large headings, such as Cormorant Garamond or Playfair Display.
Use a clean sans-serif font for body, buttons, and navigation, such as Inter.
Navigation and buttons should use uppercase text with wide letter spacing.

Pages:
1. Homepage
2. Product listing page: /fragrances
3. Product detail page: /products/[slug]
4. About / story page: /story
5. Contact page

Homepage sections:
1. Announcement bar
2. Transparent luxury header
3. Fullscreen hero video
4. Featured collection product grid
5. Editorial brand story section
6. Campaign image section
7. Benefits/service icons section
8. Catalogue/social section
9. Dark luxury footer

Announcement bar:
Text:
"DISCOVER VELIXIR — MYTHS REBORN THROUGH SCENT"
Style:
Black background, white text, centered, small uppercase, letter spacing.

Header:
- Transparent over hero
- Logo centered or left depending on responsiveness
- Menu items:
  Home
  Fragrances
  Story
  Catalogue
  Contact
- Right actions:
  Shopee
  TikTok Shop
- On scroll, header should become solid black or ivory with proper contrast.
- Mobile menu should be elegant and fullscreen or slide-in.

Hero:
- Full viewport height
- Background video from /public/videos/hero.mp4
- Dark overlay
- Centered text:
  VELIXIR PARFUMS
  Redefining Luxury
  Myths reborn through scent.
- Buttons:
  DISCOVER THE COLLECTION
  SHOP ON SHOPEE
- The hero should feel cinematic, slow, elegant, and premium.

Product collection section:
Title:
"EVERY MYTH HAS ITS SCENT"
Subtitle:
"Discover fragrances shaped by legends, crafted for modern icons."

Show 4 products in a clean luxury grid:
- Velixir Demeter Eau De Parfum for Unisex
- Velixir Athena Eau De Parfum for Unisex
- Velixir Icarus Eau De Parfum for Unisex
- Velixir Orion Eau De Parfum for Unisex

Product card:
- Large centered product image
- Optional small "VIEW DETAILS" button on hover
- Product name uppercase
- Notes line
- Price: From 790.000₫
- Buttons:
  SHOP ON SHOPEE
  SHOP ON TIKTOK

Product card style:
- White or ivory background
- Lots of whitespace
- No heavy borders
- Subtle hover lift
- Product image slightly zooms on hover
- Text centered
- Premium spacing

Product detail page:
Layout:
- Left: product image gallery
- Right: product information
Content:
- Product name
- Eau De Parfum for Unisex
- Price
- Short poetic description
- Fragrance notes
- Mood / occasion
- Size
- External purchase buttons:
  SHOP ON SHOPEE
  SHOP ON TIKTOK SHOP

Product detail page should not have internal checkout or cart.
It should focus on brand storytelling and then send users to Shopee/TikTok Shop.

Create product data in /src/data/products.ts with this structure:
slug
name
subtitle
price
notes
topNotes
heartNotes
baseNotes
description
mood
size
image
gallery
shopeeUrl
tiktokUrl

Use placeholder links for Shopee and TikTok Shop.

Brand story section:
Use this copy:
"INSPIRED BY LEGENDS, MADE FOR ICONS"
"Velixir transforms ancient myths into modern scent rituals. Each fragrance is created as a symbol — a presence, a memory, an aura."

CTA:
DISCOVER OUR STORY

Campaign image section:
Use a large full-width image with overlay text:
"CRAFTED TO PERFECTION"
"An invitation to discover elegance through scent."

Benefits section:
Create 4 luxury service items with simple line icons:
1. Authentic Velixir Fragrances
2. Available on Shopee & TikTok Shop
3. Gift-ready Presentation
4. Discover Your Signature Scent

Footer:
Dark black footer with:
- Newsletter sign-up style section
- Brand columns
- Shopee / TikTok Shop links
- Contact information
- Social links
- Legal/company info area

Footer copy:
"VELIXIR"
"Myths reborn through scent."

Responsive requirements:
- Desktop: cinematic luxury layout
- Tablet: maintain large imagery and spacing
- Mobile: hero still strong, product grid becomes 1 column, menu becomes fullscreen drawer
- Make sure videos and images are optimized
- Avoid layout shift

Assets:
Use placeholder paths:
- /videos/hero.mp4
- /images/product-demeter.png
- /images/product-athena.png
- /images/product-icarus.png
- /images/product-orion.png
- /images/story.jpg
- /images/campaign.jpg

Implementation:
Create components:
- AnnouncementBar
- Header
- HeroVideo
- ProductGrid
- ProductCard
- EditorialSection
- BenefitsSection
- Footer
- ProductDetail
- Button

Code quality:
- Clean TypeScript
- Reusable components
- Tailwind utility classes
- Accessible buttons and links
- External marketplace links open in new tab
- Add aria-labels where needed
- No hardcoded repeated product cards; use data mapping