import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClubPopup from '@/components/ClubPopup'
import Script from 'next/script'
import Tawk from '@/components/Tawk'
import { Suspense } from 'react' // Import Suspense

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Custom Packaging Boxes | Premium & Eco-Friendly | USA',
  description: 'Premium custom packaging boxes including eco-friendly mailers, luxury rigid boxes, and more. Free US shipping, no minimums, and global delivery.',
  keywords: 'custom packaging boxes, custom printed boxes, luxury rigid packaging, eco-friendly packaging, kraft packaging solutions, custom mailer boxes',
  authors: [{ name: 'Custom Box USA' }],
  robots: 'index, follow',
  metadataBase: new URL('https://packifycustomboxes.com/'),
  openGraph: {
    title: 'Custom Packaging Boxes | Premium & Eco-Friendly | USA',
    description: 'Premium custom packaging boxes designed to elevate your brand.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Packify Custom Boxes',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Packaging Boxes USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Packaging Boxes | Premium & Eco-Friendly | USA',
    description: 'Premium custom packaging boxes designed to elevate your brand.',
    images: ['/images/og-image.jpg'],
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-white.png" />
        <link rel="icon" href="/images/Favicon.webp" />
        <link rel="canonical" href="https://packifycustomboxes.com/" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" as="style" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="tsfU_k96qBeW0MTfbS8ER5eUy1XQ_E4OMfKFUJSelPo" />

        {/* Open Graph & Twitter Meta */}
        <meta property="og:title" content="Custom Packaging Boxes | Premium & Eco-Friendly | USA" />
        <meta property="og:description" content="Premium custom packaging boxes designed to elevate your brand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://packifycustomboxes.com/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:site_name" content="Packify Custom Boxes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Packaging Boxes | Premium & Eco-Friendly | USA" />
        <meta name="twitter:description" content="Premium custom packaging boxes designed to elevate your brand." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* 🔥 GOOGLE ANALYTICS */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q9X5E4D8X4" />
        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q9X5E4D8X4');
    `}
        </Script>
      </head>


      <body className={inter.className}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        <main className="min-h-screen">{children}</main>

        <Tawk />
        <Footer />
        <WhatsAppButton />

        {/* Tawk.to Chat Widget */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/687ff2649e6e70191a1b4f39/1j0pslmr5';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* GSAP Scripts */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
