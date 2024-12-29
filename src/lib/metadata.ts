export const siteConfig = {
  name: "Solomon Chika",
  description: "Full-stack Blockchain Developer | Machine Learning Engineer | Digital Marketer",
  url: "https://solomonchika.com",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/IamSolomonChika",
    linkedin: "https://www.linkedin.com/in/iamsolomonchika/",
  },
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}) {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@IamSolomonChika",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
} 