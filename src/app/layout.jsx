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
        url: 'https://github.com/GovCraft/web/assets/24578097/2d4a393a-85fb-488a-9e29-e7781ab1a2c2', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'GovCraft logo displayed prominently in a high-tech data center environment, symbolizing advanced cloud-native AI specialization for government services.',
      },
      {
        url: 'https://github.com/GovCraft/web/assets/24578097/990ee822-bbee-488b-a648-afbe1a4aceea', // Must be an absolute URL
        width: 1800,
        height: 1800,
        alt: 'GovCraft logo displayed prominently in a high-tech data center environment, symbolizing advanced cloud-native AI specialization for government services.',
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
      images: ['https://github.com/GovCraft/web/assets/24578097/990ee822-bbee-488b-a648-afbe1a4aceea'], // Must be an absolute URL
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
