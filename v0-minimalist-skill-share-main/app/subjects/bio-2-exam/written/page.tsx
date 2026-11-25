"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function WrittenExamPage() {
  const router = useRouter()
  const subjects = [
    { name: "스포츠사회학", href: "https://www.notion.so/2c017419b2e480c79fa1c33f8079aa1a" },
    { name: "스포츠교육학", href: "https://www.notion.so/2c017419b2e4802f822ce29932e55b64" },
    { name: "스포츠심리학", href: "https://www.notion.so/2c017419b2e4800faddadd1ee377e7cb" },
    { name: "스포츠윤리", href: "https://www.notion.so/2c017419b2e4804f9d9ad750498a73e7" },
    { name: "운동생리학", href: "https://www.notion.so/2c017419b2e480d7a027ce8ead3f5794" },
    { name: "운동역학", href: "https://www.notion.so/2c017419b2e48069bd8bf40a1faec36a" },
    { name: "한국체육사", href: "https://www.notion.so/2c017419b2e4808e9694ee421009c590" },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="sticky top-0 z-10 bg-white pt-8 pb-6 text-center border-b border-gray-200 w-full">
        <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-700 text-sm font-light mb-4">
          ← 돌아가기
        </button>
        <h1 className="text-xl font-light tracking-tight">필기</h1>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-md pt-8">
        {subjects.map((subject, index) => (
          <Link
            key={subject.href}
            href={subject.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="w-full py-8 px-4 text-center font-light text-lg tracking-tight transition-all duration-300 cursor-pointer rounded-lg animate-fade-in hover:shadow-md hover:scale-105 drop-shadow-sm"
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
              }}
            >
              {subject.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="h-5"></div>
    </div>
  )
}
