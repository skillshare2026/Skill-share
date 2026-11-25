"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { muscleData } from "@/lib/muscle-data"

export default function MusclePartPage() {
  const params = useParams()
  const router = useRouter()
  const part = params.part as string

  const partData = muscleData[part as keyof typeof muscleData]

  if (!partData) {
    return <div>파트를 찾을 수 없습니다.</div>
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="pt-8 pb-6 text-center border-b border-gray-200 w-full">
        <button onClick={() => router.push("/")} className="mb-4 text-gray-600 text-sm hover:text-gray-900 transition">
          ← zip_biology
        </button>
        <h1 className="text-2xl font-light tracking-tight text-gray-900">{partData.name}</h1>
      </div>

      <div className="w-full max-w-md pt-16">
        <Link href={`/muscle/${part}/quiz`}>
          <button className="w-full py-8 px-4 text-center font-light text-lg tracking-tight transition-all duration-300 cursor-pointer rounded-lg hover:shadow-md hover:scale-105 drop-shadow-sm bg-white hover:bg-gray-50">
            퀴즈 풀기
          </button>
        </Link>

        <div className="mt-12">
          <h2 className="text-lg font-light tracking-tight text-gray-900 mb-6">근육 목록</h2>
          <div className="flex flex-col gap-3">
            {partData.muscles.map((muscle) => (
              <div key={muscle.koreanName} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <p className="font-light text-gray-900">{muscle.koreanName}</p>
                <p className="text-sm text-gray-600 font-light">{muscle.englishName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
