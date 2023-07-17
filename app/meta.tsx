import type { Metadata } from 'next';

const APP_NAME = "Azuma's Blog";
const APP_CREATOR = APP_NAME;

export const metadata: Metadata = {
  metadataBase: new URL('https://pages.azumax.work'),
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s | Azuma's Blog",
  },
  creator: APP_CREATOR,
  publisher: APP_CREATOR,
  description: 'Technical knowledge',
  keywords: ['developer', 'azuma', 'infrastructure', "infra"],
  openGraph: {
    title: APP_CREATOR,
    description: 'Developer and infrastructure.',
    url: 'https://pages.azumax.work',
    siteName: APP_CREATOR,
    images: [
      {
        url: '/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'ja-JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: APP_CREATOR,
    card: 'summary_large_image',
  },
  icons: {
    // icon: '',
    shortcut: '/favicon.ico',
    // apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    // apple: '/apple-touch-icon.png',
    // other: {
    //     rel: 'apple-touch-icon-precomposed',
    //     url: '/apple-touch-icon-precomposed.png',
    // },
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  appleWebApp: {
    title: APP_NAME,
    statusBarStyle: 'black-translucent',
    capable: true,
  },
};