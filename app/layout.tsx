import type { Metadata } from "next";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";
import { Analytics } from "@vercel/analytics/next";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata: Metadata = {
  metadataBase: new URL('https://ryanmacalandag.com'),
  title: {
    default: 'Ryan Macalandag | Digital Media and Creative Communications',
    template: '%s | Ryan Macalandag'
  },
  description: "Profile, portfolio and links",
  ...openGraphImage,
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
