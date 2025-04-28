import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuildMaster Engineering",
  description: "Professional Civil Engineering Services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CustomCursor />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
