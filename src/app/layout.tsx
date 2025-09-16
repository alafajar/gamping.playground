import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamping Playground",
  description: "Gamping Playground, untuk kamu yang selo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} antialiased bg-gray-300`}>{children}</body>
    </html>
  );
}
