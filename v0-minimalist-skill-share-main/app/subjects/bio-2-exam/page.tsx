"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Bio2ExamPage() {
  const router = useRouter()
  const examTypes = [
    { name: "필기", href: "https://www.notion.so/2c017419b2e481a19730fbb35cf514ae" },
    { name: "실기", href: "https://www.notion.so/2c017419b2e481ebb1aee02cf071d803" },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="sticky top-0 z-10 bg-white pt-8 pb-6 text-center border-b border-gray-200 w-full">
        <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-700 text-sm font-light mb-4">
          ← 돌아가기
        </button>
        <h1 className="text-xl font-light tracking-tight">생체2급</h1>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-md pt-8">
        {examTypes.map((examType, index) => (
          <Link key={examType.href} href={examType.href} target="_blank" rel="noopener noreferrer">
            <button
              className="w-full py-8 px-4 text-center font-light text-lg tracking-tight transition-all duration-300 cursor-pointer rounded-lg animate-fade-in hover:shadow-md hover:scale-105 drop-shadow-sm"
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
              }}
            >
              {examType.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="h-5"></div>
    </div>
  )
}
