Update the Velixir project scope to Phase 1: luxury brand showroom with CMS-managed products and content.

Do not implement full ecommerce in this phase.

Strictly do not build:
- Cart
- Checkout
- Payment
- Login/register
- Customer account
- Order history
- Internal order management

The website should use external marketplace purchase links only:
- Shopee
- TikTok Shop
- Optional other channels

Tech stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Sanity CMS
- Responsive design
- SEO-friendly pages

Pages to implement:


5. Lendo-Lab page `/lendo-lab`
Content:
- Article/blog listing
- Inspiration behind fragrance formulas
- Article detail pages if needed:
  `/lendo-lab/[slug]`

6. Policy page `/policy`
Content:
- Privacy policy
- Shipping policy
- Return/exchange policy
Can be one page with sections or CMS-managed policy documents.



CMS requirements:

Use Sanity CMS so shop staff can manage:

Product schema:
- name
- slug
- subtitle
- priceText
- priceNumber optional
- sizes
- gender: male, female, unisex
- collection
- scentFamily
- shortDescription
- description
- notes
- topNotes
- heartNotes
- baseNotes
- mood
- mainImage
- hoverImage
- gallery
- shopeeUrl
- tiktokUrl
- otherMarketplaceUrls optional
- isFeatured
- isPublished
- sortOrder

Homepage CMS schema:
- heroTitle
- heroSubtitle
- heroVideo
- heroPoster
- heroPrimaryCTA
- heroSecondaryCTA
- collectionBannerTitle
- collectionBannerSubtitle
- collectionBannerImage
- aboutTitle
- aboutText
- aboutImage

Founder Story CMS schema:
- title
- subtitle
- content
- images
- quote

Lendo-Lab article schema:
- title
- slug
- excerpt
- coverImage
- content
- relatedProducts
- isPublished
- publishedAt

Policy schema:
- title
- slug
- content
- type: privacy, shipping, returns, general

Contact:
- Create contact form UI now.
- Do not implement complex CRM yet.
- If feasible, prepare simple API route or Sanity document type for contact submissions, but ask before implementing actual submission.

Design direction:
- Luxury perfume brand
- Mythological, elegant, refined, cinematic, premium
- Black, ivory, champagne gold
- Inspired by By Kilian structure but not copied
- Large whitespace
- Editorial imagery
- Uppercase navigation
- Serif headings
- Clean sans-serif body
- Smooth hover effects
- Mobile responsive

Implementation order:
1. Install and configure Sanity
2. Create Sanity schemas
3. Create Sanity client and image URL helper
4. Replace static product data with Sanity fetch functions
5. Build homepage CMS sections
6. Build collection page with filters
7. Build product detail page with image slider
8. Build founder story page
9. Build Lendo-Lab listing and article detail if time allows
10. Build policy page
11. Build contact page UI
12. Run npm run build
13. Run node .agents/scripts/velixir_audit.mjs if available