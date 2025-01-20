import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Lora, Playfair_Display } from 'next/font/google';
import Footer from './components/Footer';
import { Navbar } from './components/Nav';
import { baseUrl } from './sitemap';

const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
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
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={cx(
        'text-black dark:text-white',
        playfair.variable,
        lora.variable,
      )}
    >
      <body className="mx-4 max-w-2xl antialiased lg:mx-auto">
        <Theme
          accentColor="mint"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
          appearance="dark"
          className="min-h-screen flex flex-col"
        >
          <Navbar />
          <main className="flex flex-grow min-w-0 flex-col px-2 md:px-0">
            {children}
          </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
