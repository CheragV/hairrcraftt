import Head from "next/head"
import { useRouter } from "next/router"
import siteMetadata from "../siteMetadata"

export default function Seo({ title, description, image, noIndex = false }) {
  const router = useRouter()

  const metaTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title
  const metaDescription = description || siteMetadata.description

  const path = router?.asPath ? router.asPath.split("?")[0] : "/"
  const canonical = `${siteMetadata.siteUrl}${path}`

  const ogImagePath = image || siteMetadata.ogImage
  const ogImage = ogImagePath?.startsWith("http")
    ? ogImagePath
    : `${siteMetadata.siteUrl}${ogImagePath}`

  const departments = (siteMetadata.locations || []).map(location => ({
    "@type": "BeautySalon",
    name: location.name,
    telephone: siteMetadata.phone,
    url: siteMetadata.siteUrl,
    hasMap: location.mapUrl,
    areaServed: location.area,
  }))

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteMetadata.title,
    url: siteMetadata.siteUrl,
    telephone: siteMetadata.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteMetadata.address?.locality,
      addressRegion: siteMetadata.address?.region,
      postalCode: siteMetadata.address?.postalCode,
      addressCountry: siteMetadata.address?.country,
    },
    sameAs: [siteMetadata.instagramUrl, siteMetadata.facebookUrl].filter(Boolean),
    ...(departments.length ? { department: departments } : {}),
  }

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  )
}
