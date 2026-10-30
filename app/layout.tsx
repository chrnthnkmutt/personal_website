import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import {
  ibmPlexSans,
  ibmPlexSansThai,
  lora,
  sourceSans,
} from "./assets/font/font";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const options = {
  title: "Charunthon Limseelo | AI Engineer & Data Scientist",
  description:
    "Charunthon Limseelo is an AI Engineer and Data Scientist passionate about artificial intelligence, cloud computing, and innovative technology solutions",
  url: "https://boatchrnthn.vercel.app",
  ogImage:
    "/OpenGraph.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "boatchrnthn.vercel.app",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSansThai.variable} ${lora.variable} ${sourceSans.variable} ${ibmPlexSans.className} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700 min-h-screen flex flex-col`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
