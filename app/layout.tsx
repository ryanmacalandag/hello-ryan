import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Macalandag",
  description: "Profile, portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-full h-full min-h-dvh flex flex-col justify-center items-center bg-paper-neutral`}
      >
        {children}

      </body>
    </html>
  );
}
