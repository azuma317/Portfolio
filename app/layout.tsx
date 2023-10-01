'use client';

import localFont from 'next/font/local';
import Analytics from '@/components/google-analytics';

import '@/styles/index.css'
import { TopLoader, Providers } from '@/components';

import { metadata } from './meta'

const font = localFont({
  src: '../public/fonts/ibm-plex-sans-var.woff2',
  weight: '400',
  variable: '--font-wibb',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <head>
        <Analytics />
      </head>
      <body>
        <TopLoader
          color={`var(--primary)`}
          easing="ease"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2.5}
          crawl={true}
          showSpinner={false}
          speed={200}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
