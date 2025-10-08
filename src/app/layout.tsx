import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { ScrollProgress } from "@/components/common/Interactive/ScrollProgress";
import { SafariOptimizedScroll } from "@/components/common/Interactive/SafariOptimizedScroll";
import "./globals.css";

// Optimized Fonts - Reduced weights for faster loading
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Mikasasoft | Building Defenses, Breaking Boundaries",
  description: "Premium software development company specializing in web, mobile, and cloud solutions. We transform ideas into powerful digital experiences.",
  keywords: ["software development", "web development", "mobile apps", "cloud solutions", "UI/UX design"],
  authors: [{ name: "Mikasasoft" }],
  creator: "Mikasasoft",
  publisher: "Mikasasoft",
  metadataBase: new URL("https://mikasasoft.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mikasasoft.com",
    siteName: "Mikasasoft",
    title: "Mikasasoft | Building Defenses, Breaking Boundaries",
    description: "Premium software development company specializing in web, mobile, and cloud solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mikasasoft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikasasoft | Building Defenses, Breaking Boundaries",
    description: "Premium software development company specializing in web, mobile, and cloud solutions.",
    images: ["/og-image.jpg"],
    creator: "@mikasasoft",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased w-full`}
      >
        <SafariOptimizedScroll>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </SafariOptimizedScroll>
      </body>
    </html>
  );
}
