import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const banilu = localFont({
  src: "../../public/fonts/Banilu.ttf",
  variable: "--font-playfair",
  display: "swap",
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
        className={`${inter.variable} ${banilu.variable} antialiased`}
      >
        {children}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="lazyOnload"
        />
        <Script id="netlify-identity-redirect" strategy="lazyOnload">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", function(user) {
                if (!user) {
                  window.netlifyIdentity.on("login", function() {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
