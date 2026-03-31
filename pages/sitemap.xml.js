import siteMetadata from "../siteMetadata"

function buildUrl(path) {
  if (path.startsWith("http")) return path
  return `${siteMetadata.siteUrl}${path}`
}

function generateSiteMap(paths) {
  const urls = paths
    .map(url => {
      return `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    })
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`
}

export default function SiteMap() {
  return null
}

export async function getServerSideProps({ res }) {
  const locationRoutes = (siteMetadata.locations || []).map(l => `/locations/${l.slug}`)
  const staticRoutes = ["/", "/about", "/services", "/gallery", "/contact", ...locationRoutes]

  const sitemap = generateSiteMap(staticRoutes.map(buildUrl))

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}
