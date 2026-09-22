import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/lib/content";
 
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
 
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});
 
export const metadata: Metadata = {
  metadataBase: new URL("https://gansystem-web.vercel.app"),
  title: `${company.legalName} | Smart Aquaculture Technology`,
  description: company.description,
  openGraph: {
    title: `${company.legalName} | Smart Aquaculture Technology`,
    description:
      "GanSystems helps fish farmers monitor water conditions, understand telemetry, and support automated control with practical IoT technology.",
    images: ["/screenshots/cover.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.legalName} | Smart Aquaculture Technology`,
    description:
      "GanSystems helps fish farmers monitor water conditions, understand telemetry, and support automated control with practical IoT technology.",
    images: ["/screenshots/cover.png"],
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full`}>
      <body className="min-h-full antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-leaf-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}