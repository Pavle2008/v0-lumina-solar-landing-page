import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lumina Solar | Solarna Energija za Vaš Dom — Izračunajte Uštedu',
  description:
    'Lumina Solar — Prestanite da iznajmljujete energiju. Saznajte koliko možete da uštedite sa solarnim panelima. Besplatna procena, 0 dinara unapred, 25 godina garancije.',
  keywords: [
    'solarna energija',
    'solarni paneli',
    'Srbija',
    'ušteda struje',
    'Lumina Solar',
    'obnovljiva energija',
    'solarna instalacija',
  ],
  openGraph: {
    title: 'Lumina Solar | Izračunajte Vašu Uštedu na Struji',
    description:
      'Prestanite da plaćate skupe račune za struju. Lumina Solar nudi solarna rešenja sa 0 dinara unapred i garancijom od 25 godina.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'Lumina Solar',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#1B3022',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== 'undefined' && window.voiceflow) {
              window.voiceflow.chat.load({
                verify: { projectID: '698af61f71c5be5fc9493b8b' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                voice: {
                  url: 'https://runtime-api.voiceflow.com',
                },
              })
            }
          }}
        />
      </body>
    </html>
  )
}
