import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Noto_Sans_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Skill Share",
  description: "생체 2급 자격증 과목 학습",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9534145453201587"
      crossOrigin="anonymous"></script>
      </head>
      <body className={`font-sans antialiased ${notoSansKR.className}`}>
        <div className="min-h-screen pb-12">
          {children}
        </div>
        <footer className="fixed bottom-0 left-0 right-0 py-3 border-t border-gray-200 bg-gray-50">
          <p className="text-center text-xs text-gray-500 font-light">
            문의 insta : wonsun2_ , 010-3987-7794
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
