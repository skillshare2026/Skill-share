"use client"

import { useRouter } from "next/navigation"

export default function PracticalExamPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="sticky top-0 z-10 bg-white pt-8 pb-6 text-center border-b border-gray-200 w-full">
        <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-700 text-sm font-light mb-4">
          ← 돌아가기
        </button>
        <h1 className="text-xl font-light tracking-tight">실기</h1>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-md pt-16">
        <div className="text-center text-gray-500 font-light animate-fade-in">
          준비 중입니다.
        </div>
      </div>
    </div>
  )
}
