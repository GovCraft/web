import { RootLayout } from '@/components/RootLayout'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
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
      <GoogleAnalytics gtmId="G-LXKPXR51P4" />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "lj6bev14gl");
          `}
        </Script>
        <Script id="segment-script" strategy="afterInteractive">
          {`
 !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="B26X5mfOylrTBxktPYWGDQTYqLwBZBlf";;analytics.SNIPPET_VERSION="5.2.0";
 analytics.load("B26X5mfOylrTBxktPYWGDQTYqLwBZBlf");
 analytics.page();
 }}();          `}
        </Script>
        <RootLayout>{children}
        </RootLayout>
      </body>
    </html>
  )
}
