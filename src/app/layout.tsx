import type { Metadata } from "next";
import {
  Playfair_Display,
  Montserrat,
  Inter,
  Space_Grotesk
} from "next/font/google";
import "./globals.css";

// Premium Fonts Configuration
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
