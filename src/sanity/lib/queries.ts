import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    brandName,
    announcementText,
    shopeeUrl,
    tiktokUrl,
    instagramUrl,
    facebookUrl,
    email,
    phone,
    address,
    footerText
  }
`

// Products
export const allProductsQuery = groq`
  *[_type == "product" && isPublished == true] | order(sortOrder asc, _createdAt desc) {
    slug,
    name,
    subtitle,
    priceText,
    priceNumber,
    sizes,
    gender,
    collection,
    scentFamily,
    shortDescription,
    description,
    notes,
    topNotes,
    heartNotes,
    baseNotes,
    mood,
    mainImage,
    hoverImage,
    gallery,
    shopeeUrl,
    tiktokUrl,
    otherMarketplaceUrls,
    isFeatured,
    sortOrder
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug && isPublished == true][0] {
    "slug": slug.current,
    name,
    subtitle,
    priceText,
    priceNumber,
    sizes,
    gender,
    collection,
    scentFamily,
    shortDescription,
    description,
    notes,
    topNotes,
    heartNotes,
    baseNotes,
    mood,
    mainImage,
    hoverImage,
    gallery,
    shopeeUrl,
    tiktokUrl,
    otherMarketplaceUrls,
    isFeatured
  }
`

// Homepage
export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    heroTitle,
    heroSubtitle,
    heroVideo,
    heroPoster,
    heroPrimaryCTA,
    heroSecondaryCTA,
    collectionBannerTitle,
    collectionBannerSubtitle,
    collectionBannerImage,
    aboutTitle,
    aboutText,
    aboutImage
  }
`

// Founder Story
export const founderStoryQuery = groq`
  *[_type == "founderStory"][0] {
    title,
    subtitle,
    content,
    images,
    quote
  }
`

// Lendo-Lab Articles
export const allArticlesQuery = groq`
  *[_type == "lendoLabArticle" && isPublished == true] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt
  }
`

export const articleBySlugQuery = groq`
  *[_type == "lendoLabArticle" && slug.current == $slug && isPublished == true][0] {
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    content,
    publishedAt,
    relatedProducts[]-> {
      "slug": slug.current,
      name,
      subtitle,
      priceText,
      mainImage,
      shopeeUrl,
      tiktokUrl
    }
  }
`

// Policies
export const policyByTypeQuery = groq`
  *[_type == "policy" && type == $type][0] {
    title,
    "slug": slug.current,
    content,
    type
  }
`

export const allPoliciesQuery = groq`
  *[_type == "policy"] {
    title,
    "slug": slug.current,
    content,
    type
  }
`
