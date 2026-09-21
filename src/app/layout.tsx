import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
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
  title: "Gansystem Limited | Smart Aquaculture Technology",
  description: "Gansystem Limited builds GanSystems, an IoT aquaculture platform for water-quality monitoring, live telemetry, and automated water control.",
  openGraph: {
    title: "Gansystem Limited | Smart Aquaculture Technology",
    description: "GanSystems helps fish farmers monitor water conditions, understand telemetry, and support automated control with practical IoT technology.",
    type: "website",
    images: ["/screenshots/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0A0E0C] text-[#F5F5F5]">
        <div className="flex min-h-screen flex-col">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
