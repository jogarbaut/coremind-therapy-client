import type { Metadata } from "next"
import "./globals.css"
import NavigationBar from "./components/ui/NavigationBar"
import { Cardo } from "next/font/google"
import Footer from "./components/ui/Footer"

export const metadata: Metadata = {
  title: "CoreMind Therapy",
  description: "Private therapist based in California",
}

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cardo.className}>
      <body className="bg-vanilla min-h-screen flex flex-col">
        <NavigationBar />
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 py-16">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  )
}
