import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata: Metadata = {
  metadataBase: new URL('https://ryanmacalandag.com'),
  title: {
    default: 'Ryan Macalandag | Digital Media Producer and Communications Strategist in Canberra',
    template: '%s | Ryan Macalandag'
  },
  description: "A results-driven Digital Media Producer and Communications Strategist based in Camnberra with over 20 years of expertise across strategic communications, media production, and brand development.",
  openGraph: {
    title: 'Ryan Macalandag | Digital Media Producer and Communications Strategist in Canberra',
    description:
      'A results-driven Digital Media Producer and Communications Strategist based in Camnberra with over 20 years of expertise across strategic communications, media production, and brand development.',
    url: 'https://devtools.ryanmacalandag.com',
    siteName: 'DevTools',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Macalandag | Digital Media Producer and Communications Strategist in Canberra',
    description: 'A results-driven Digital Media Producer and Communications Strategist based in Camnberra with over 20 years of expertise across strategic communications, media production, and brand development.',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-32x32.png', 
        type: 'image/png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-full h-full flex flex-col justify-center items-center bg-paper-neutral`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
