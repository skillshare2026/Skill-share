"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useMemo } from "react"
import { muscleData } from "@/lib/muscle-data"

export default function MuscleQuizPage() {
  const params = useParams()
  const router = useRouter()
  const part = params.part as string

  const partData = muscleData[part as keyof typeof muscleData]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [attempts, setAttempts] = useState(0)

  // 퀴즈용 근육을 무작위로 섞기
  const quizMuscles = useMemo(() => {
    if (!partData) return []
    return [...partData.muscles].sort(() => Math.random() - 0.5)
  }, [partData])

  if (!partData || quizMuscles.length === 0) {
    return <div>퀴즈 데이터를 찾을 수 없습니다.</div>
  }

  const currentMuscle = quizMuscles[currentIndex]
  const progress = ((currentIndex + 1) / quizMuscles.length) * 100

  const handleNext = () => {
    if (currentIndex < quizMuscles.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowAnswer(false)
    } else {
      // 퀴즈 완료
      setShowAnswer(false)
    }
  }

  const handleReveal = () => {
    setShowAnswer(true)
    setAttempts(attempts + 1)
    if (!showAnswer) {
      setCorrectCount(correctCount + 1)
    }
  }

  const isLastQuestion = currentIndex === quizMuscles.length - 1

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="pt-8 pb-6 text-center border-b border-gray-200 w-full">
        <button onClick={() => router.push("/")} className="mb-4 text-gray-600 text-sm hover:text-gray-900 transition">
          ← 메인페이지
        </button>
        <h1 className="text-2xl font-light tracking-tight text-gray-900">{partData.name} 퀴즈</h1>
      </div>

      <div className="w-full max-w-md pt-12">
        {/* 진행도 바 */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-600 font-light">
              {currentIndex + 1} / {quizMuscles.length}
            </p>
            <p className="text-sm text-gray-600 font-light">
              정답: {correctCount} ({attempts > 0 ? Math.round((correctCount / attempts) * 100) : 0}%)
            </p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* 퀴즈 콘텐츠 */}
        <div className="flex flex-col gap-8">
          {/* 근육 정보 카드 */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-light text-gray-600 uppercase tracking-wide mb-2">Origin (기시점)</h3>
                <p className="text-base font-light text-gray-900">{currentMuscle.origin}</p>
              </div>

              <div>
                <h3 className="text-xs font-light text-gray-600 uppercase tracking-wide mb-2">Insertion (정지점)</h3>
                <p className="text-base font-light text-gray-900">{currentMuscle.insertion}</p>
              </div>

              <div>
                <h3 className="text-xs font-light text-gray-600 uppercase tracking-wide mb-2">Action (작용)</h3>
                <p className="text-base font-light text-gray-900">{currentMuscle.action}</p>
              </div>

              <div>
                <h3 className="text-xs font-light text-gray-600 uppercase tracking-wide mb-2">Nerve (신경지배)</h3>
                <p className="text-base font-light text-gray-900">{currentMuscle.nerve}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 font-light mb-4">이 근육의 이름은?</p>
            {/* 정답이 표시될 영역 - 고정 높이로 레이아웃 안정화 */}
            <div className="h-24 flex items-center justify-center">
              {showAnswer ? (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg w-full">
                  <p className="text-xs font-light text-gray-600 uppercase tracking-wide mb-1">정답</p>
                  <p className="text-lg font-light text-gray-900">{currentMuscle.koreanName}</p>
                  <p className="text-sm text-gray-600 font-light mt-1">{currentMuscle.englishName}</p>
                </div>
              ) : (
                <div className="p-4 bg-gray-100 rounded-lg w-full">
                  <p className="text-lg font-light text-gray-400">???</p>
                </div>
              )}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex flex-col gap-3">
            {!showAnswer ? (
              <button
                onClick={handleReveal}
                className="w-full py-3 px-4 text-center font-light text-base tracking-tight transition-all duration-300 cursor-pointer rounded-lg hover:shadow-md hover:scale-105 drop-shadow-sm bg-gray-900 text-white hover:bg-gray-800"
              >
                답
              </button>
            ) : (
              <>
                {currentIndex < quizMuscles.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="w-full py-3 px-4 text-center font-light text-base tracking-tight transition-all duration-300 cursor-pointer rounded-lg hover:shadow-md hover:scale-105 drop-shadow-sm bg-white border border-gray-900 text-gray-900 hover:bg-gray-50"
                  >
                    다음문제
                  </button>
                ) : (
                  <button
                    onClick={() => router.push("/")}
                    className="w-full py-3 px-4 text-center font-light text-base tracking-tight transition-all duration-300 cursor-pointer rounded-lg hover:shadow-md hover:scale-105 drop-shadow-sm bg-white border border-gray-900 text-gray-900 hover:bg-gray-50"
                  >
                    완료
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
