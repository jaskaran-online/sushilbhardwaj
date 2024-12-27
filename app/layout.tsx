import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Dream Home | Find Your Perfect Property",
  description: "Discover your dream home with our extensive collection of properties. Expert guidance for buying, selling, and renting properties.",
  keywords: "real estate, homes for sale, property listings, real estate agents, houses for rent",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}