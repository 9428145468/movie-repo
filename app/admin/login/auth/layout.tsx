// client/login/auth/layout.tsx
import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
interface RootLayoutProps {
  children: ReactNode
}
export default function AuthLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        
        {children}
      </body>
    </html>
  )
}