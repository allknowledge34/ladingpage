import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { Providers } from "@/app/providers"

const inter = Inter({ subsets: ["latin"] })

export const metaData: Metadata= {
  title: "Koshi Science Classes (KSC)",
  description: "A morden eLearning platfrom for students and instructors",
  generator: "Next.js",
  applicationName: "Koshi Science Classes (KSC)",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "eLearning",
    "eduction",
    "online courses",
    "learning management system",
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css"