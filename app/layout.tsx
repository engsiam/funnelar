import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TimedPopup } from "@/components/timed-popup"
import { ImagePreloader } from "@/components/image-preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Funnelar - Amazon Marketing Experts",
  description: "Delivering stunning brands, relatable products, & results oriented marketing strategy & execution",
    generator: 'v0.dev'
}

// List of all images to preload
const imagesToPreload = [
  "/logo.png",
  "/logo-white.png",
  "/amazon-dashboard.jpg",
  "/amazon-listing.jpg",
  "/case-study-1.jpg",
  "/case-study-2.jpg",
  "/case-study-3.jpg",
  "/blog-post-1.jpg",
  "/blog-post-2.jpg",
  "/blog-post-3.jpg",
  "/about-image.jpg",
  "/placeholder.svg",
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ImagePreloader imagePaths={imagesToPreload} />
          {children}
          <TimedPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'