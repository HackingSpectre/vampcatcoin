import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VampCatCoin - $VCC | Community Driven Memecoin",
  description: "The original VampCatCoin meme coin, taking over social media one human at a time! Community driven memecoin for cat lovers.",
  keywords: ["VampCatCoin", "VCC", "memecoin", "cryptocurrency", "cat coin", "Solana"],
  openGraph: {
    title: "VampCatCoin - $VCC",
    description: "Community driven memecoin for cat lovers, even when they bite us for no reason",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
