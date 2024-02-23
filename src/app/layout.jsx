import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - GovCraft',
    default: 'GovCraft - Full-service digital contractors for government agencies',
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
