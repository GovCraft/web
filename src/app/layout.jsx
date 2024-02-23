import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - GovCraft',
    default: 'GovCraft - Cloud-native AI specialists for federal, state, and local government',
  },
  openGraph: {
    title: 'GovCraft: Pioneering AI Solutions for Government Excellence',
    description: 'At GovCraft, we leverage deep private sector experience to deliver cutting-edge AI and cloud solutions, transforming government operations with efficiency and security.',
    url: 'https://govcraft.ai',
    siteName: 'GovCraft',
    images: [
      {
        url: 'https://govcraft.ai/images/datacenter800x800.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://govcraft.ai/images/datacenter.jpg', // Must be an absolute URL
        width: 1800,
        height: 1800,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
    twitter: {
      card: 'summary_large_image',
      title: 'GovCraft: Pioneering AI Solutions for Government Excellence',
      description: 'At GovCraft, we leverage deep private sector experience to deliver cutting-edge AI and cloud solutions, transforming government operations with efficiency and security.',
      // siteId: '1467726470533754880',
      creator: '@GovCraftAI',
      // creatorId: '1467726470533754880',
      images: ['https://govcraft.ai/images/datacenter.jpg'], // Must be an absolute URL
    },
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-slate-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
