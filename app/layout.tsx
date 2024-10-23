import type { Metadata } from "next";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

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

      </body>
    </html>
  );
}
