"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { examPeriods, healthInsuranceSets, lawWeeks } from "@/lib/national-exam-data"

export default function NationalExamPage() {
  const router = useRouter()
  const [selectedPeriod, setSelectedPeriod] = useState("period1")
  const [selectedWeek, setSelectedWeek] = useState("week2")

  const startQuiz = () => {
    const weekQuery = selectedPeriod === "period2" ? `&week=${selectedWeek}` : ""
    router.push(`/national-exam/quiz?period=${selectedPeriod}${weekQuery}`)
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center px-4">
      {/* 헤더 */}
      <div className="w-full max-w-md pt-8 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#737373] hover:text-[#171717] transition-colors duration-150"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-light">뒤로가기</span>
        </Link>
      </div>

      <div className="w-full max-w-md pt-16">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-light tracking-tight text-[#171717]">국가고시</h1>
          <p className="mt-2 text-[#737373] text-sm font-light">선택한 교시의 문제를 풀어보세요</p>
        </div>

        {/* 교시 선택 탭 */}
        <div className="flex justify-center gap-1 mb-4">
          {examPeriods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-6 py-2 text-sm font-light border-b transition-all duration-150 ${
                selectedPeriod === period.id
                  ? "text-[#171717] border-[#171717]"
                  : "text-[#a3a3a3] border-transparent hover:text-[#737373]"
              }`}
            >
              {period.name}
            </button>
          ))}
        </div>

        {/* 선택한 교시의 과목 안내 */}
        <p className="text-center text-xs text-[#a3a3a3] font-light mb-8">
          {examPeriods.find((period) => period.id === selectedPeriod)?.subjects.join(" · ")}
        </p>

        {selectedPeriod === "period2" && (
          <div className="mb-8" aria-label="의료관계법규 주차 선택">
            <div className="grid grid-cols-3 gap-2">
              {lawWeeks.map((week) => (
                <button
                  key={week.id}
                  onClick={() => setSelectedWeek(week.id)}
                  className={`rounded-md border px-2 py-3 text-center transition-colors duration-150 ${
                    selectedWeek === week.id
                      ? "border-[#171717] bg-white text-[#171717]"
                      : "border-[#E5E5E5] text-[#a3a3a3] hover:border-[#a3a3a3]"
                  }`}
                >
                  <span className="block text-sm font-light">{week.name}</span>
                  <span className="mt-1 block text-[11px] font-light">{week.range}</span>
                </button>
              ))}
            </div>

            <section className="mt-8" aria-labelledby="health-insurance-heading">
              <h2 id="health-insurance-heading" className="mb-3 text-center text-sm font-light text-[#171717]">
                국민건강보험법
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {healthInsuranceSets.map((set) => (
                  <button
                    key={set.id}
                    onClick={() => setSelectedWeek(set.id)}
                    aria-pressed={selectedWeek === set.id}
                    className={`rounded-md border px-2 py-3 text-center transition-colors duration-150 ${
                      selectedWeek === set.id
                        ? "border-[#171717] bg-white text-[#171717]"
                        : "border-[#E5E5E5] text-[#a3a3a3] hover:border-[#a3a3a3]"
                    }`}
                  >
                    <span className="block text-sm font-light">{set.name}</span>
                    <span className="mt-1 block text-[11px] font-light">{set.range}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* 퀴즈 풀기 CTA */}
        <div className="flex flex-col items-center">
          <button
            onClick={startQuiz}
            className="px-8 py-3 bg-[#171717] text-white rounded-md text-sm font-light hover:bg-[#404040] transition-colors duration-150"
          >
            퀴즈 풀기
          </button>
          <p className="mt-4 text-xs text-[#a3a3a3] font-light text-balance text-center">
            선택한 교시의 모든 과목에서 문제가 출제됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
