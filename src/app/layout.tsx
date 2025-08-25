import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visual Vanguard Media | Professional Multimedia Production",
  description: "Professional video production, cinematography, and color grading services. Specializing in documentaries, commercials, creative content, and podcast production with over 10 years of experience.",
  keywords: ["video production", "cinematography", "color grading", "documentary", "commercial video", "podcast production", "multimedia"],
  authors: [{ name: "Visual Vanguard Media" }],
  creator: "Visual Vanguard Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visualvanguardmedia.com",
    title: "Visual Vanguard Media | Professional Multimedia Production",
    description: "Professional video production, cinematography, and color grading services. Transforming your vision into compelling visual narratives.",
    siteName: "Visual Vanguard Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Vanguard Media | Professional Multimedia Production",
    description: "Professional video production, cinematography, and color grading services. Transforming your vision into compelling visual narratives.",
    creator: "@visualvanguard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
