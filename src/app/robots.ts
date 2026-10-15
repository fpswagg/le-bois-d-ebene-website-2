import { MetadataRoute } from 'next'

// Demo site: crawlers may fetch pages (to see the noindex header) but no sitemap is advertised.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }] }
}
