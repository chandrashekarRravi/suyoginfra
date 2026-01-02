// BreadcrumbList schema generator
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://suyoginfrasolutions.com"

export function generateBreadcrumbSchema(path: string, name: string) {
  const pathSegments = path.split("/").filter(Boolean)
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
  ]

  let currentPath = ""
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    breadcrumbs.push({
      "@type": "ListItem",
      position: index + 2,
      name: name || segment.charAt(0).toUpperCase() + segment.slice(1),
      item: `${baseUrl}${currentPath}`,
    })
  })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs,
  }
}

