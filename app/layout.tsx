import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lumina Solar | Solarna Energija za Vas Dom - Izracunajte Ustedu',
  description:
    'Lumina Solar - Prestanite da iznajmljujete energiju. Saznajte koliko mozete da ustedite sa solarnim panelima. Besplatna procena, 0 dinara unapred, 25 godina garancije.',
  keywords: [
    'solarna energija',
    'solarni paneli',
    'Srbija',
    'usteda struje',
    'Lumina Solar',
    'obnovljiva energija',
    'solarna instalacija',
  ],
  openGraph: {
    title: 'Lumina Solar | Izracunajte Vasu Ustedu na Struji',
    description:
      'Prestanite da placate skupe racune za struju. Lumina Solar nudi solarna resenja sa 0 dinara unapred i garancijom od 25 godina.',
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
