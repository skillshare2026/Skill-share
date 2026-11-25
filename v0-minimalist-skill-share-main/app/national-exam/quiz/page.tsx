"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { getQuestionsForPeriod, getQuestionsForWeek, isHealthInsuranceSet, examPeriods, lawWeeks, type Question } from "@/lib/national-exam-data"

interface UserAnswer {
  questionId: string
  selectedAnswer: number | number[] | string
  isCorrect: boolean
}

function QuizContent() {
  const searchParams = useSearchParams()
  const periodId = searchParams.get("period") || "period1"
  const weekId = searchParams.get("week") || "week2"

  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [selectedOption, setSelectedOption] = useState<number | number[] | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const period = examPeriods.find((p) => p.id === periodId)

  useEffect(() => {
    // 법규는 선택한 주차 범위에서, 그 외 교시는 해당 교시에서 출제합니다.
    setQuestions(periodId === "period2" ? getQuestionsForWeek(weekId) : getQuestionsForPeriod(periodId, 20))
  }, [periodId, weekId])

  const currentQuestion = questions[currentIndex]
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0
  const gradeOnSelect = periodId === "period2" && isHealthInsuranceSet(weekId)

  const handleOptionClick = (optionIndex: number) => {
    if (currentQuestion.type === "multi-mcq" && !isAnswered) {
      setSelectedOption((previous) => {
        const selected = Array.isArray(previous) ? previous : []
        return selected.includes(optionIndex)
          ? selected.filter((index) => index !== optionIndex)
          : [...selected, optionIndex]
      })
      return
    }

    if (isAnswered) return
    setSelectedOption(optionIndex)
    if (gradeOnSelect) handleAnswerSubmit(optionIndex)
  }

  const handleAnswerSubmit = (optionOverride?: number) => {
    if (!currentQuestion || currentQuestion.type === "short-answer" || isAnswered) return

    const choice = optionOverride ?? selectedOption
    const selected = Array.isArray(choice) ? choice : choice === null ? [] : [choice]
    if (selected.length === 0) return

    const correct = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer
      : [currentQuestion.correctAnswer]
    const isCorrect = selected.length === correct.length && selected.every((index) => correct.includes(index))

    setIsAnswered(true)
    setUserAnswers((prev) => [
      ...prev.filter((answer) => answer.questionId !== currentQuestion.id),
      {
        questionId: currentQuestion.id,
        selectedAnswer: currentQuestion.type === "multi-mcq" ? selected : selected[0],
        isCorrect,
      },
    ])
  }

  const handleShortAnswerReveal = () => {
    if (!currentQuestion) return

    setIsAnswered(true)
    setUserAnswers((prev) => [
      ...prev.filter((answer) => answer.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, selectedAnswer: String(currentQuestion.correctAnswer), isCorrect: true }
    ])
  }

  const handlePrevious = () => {
    if (currentIndex === 0) return

    const previousQuestion = questions[currentIndex - 1]
    const previousAnswer = userAnswers.find((answer) => answer.questionId === previousQuestion.id)

    setCurrentIndex((prev) => prev - 1)
setSelectedOption(
  previousAnswer && (typeof previousAnswer.selectedAnswer === "number" || Array.isArray(previousAnswer.selectedAnswer))
  ? previousAnswer.selectedAnswer
  : null,
  )
  setIsAnswered(Boolean(previousAnswer))
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextQuestion = questions[currentIndex + 1]
      const nextAnswer = userAnswers.find((answer) => answer.questionId === nextQuestion.id)

      setCurrentIndex((prev) => prev + 1)
setSelectedOption(
  nextAnswer && (typeof nextAnswer.selectedAnswer === "number" || Array.isArray(nextAnswer.selectedAnswer))
  ? nextAnswer.selectedAnswer
  : null,
  )
  setIsAnswered(Boolean(nextAnswer))
    } else {
      setShowResult(true)
    }
  }

  const correctCount = userAnswers.filter((a) => a.isCorrect).length
  const currentUserAnswer = currentQuestion
    ? userAnswers.find((answer) => answer.questionId === currentQuestion.id)
    : undefined

  const getAnswerText = (question: Question) => {
    if (typeof question.correctAnswer === "number") {
      return question.options[question.correctAnswer] ?? String(question.correctAnswer)
    }
    if (Array.isArray(question.correctAnswer)) {
      return question.correctAnswer.map((index) => question.options[index] ?? String(index)).join(", ")
    }
    return question.correctAnswer
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center px-4">
        <div className="w-full max-w-md pt-8">
          <Link
            href="/national-exam"
            className="inline-flex items-center gap-2 text-[#737373] hover:text-[#171717] transition-colors duration-150"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-light">뒤로가기</span>
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-lg text-[#a3a3a3] font-light">퀴즈 준비중입니다</p>
        </div>
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center px-4">
        <div className="w-full max-w-md pt-8">
          <Link
            href="/national-exam"
            className="inline-flex items-center gap-2 text-[#737373] hover:text-[#171717] transition-colors duration-150"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-light">돌아가기</span>
          </Link>
        </div>

        <div className="w-full max-w-md pt-12 pb-8">
          <div className="text-center mb-8">
            <p className="text-sm text-[#737373] font-light mb-2">{period?.name} 결과</p>
            <h1 className="text-5xl font-light text-[#171717] mb-2">
              {correctCount}
              <span className="text-2xl text-[#a3a3a3]">/{questions.length}</span>
            </h1>
            <p className="text-sm text-[#737373] font-light">
              {correctCount >= questions.length * 0.7
                ? "훌륭합니다!"
                : correctCount >= questions.length * 0.5
                  ? "좋은 결과입니다!"
                  : "더 연습해보세요!"}
            </p>
          </div>

          {/* 점수 바 */}
          <div className="w-full h-1.5 bg-[#E5E5E5] rounded-full mb-8">
            <div
              className="h-full rounded-full bg-[#171717] transition-all duration-500"
              style={{ width: `${(correctCount / questions.length) * 100}%` }}
            />
          </div>

          {/* 오답 노트 */}
          <div className="mb-8">
            <h2 className="text-sm font-medium text-[#171717] mb-4">오답 노트</h2>
            <div className="space-y-3">
              {userAnswers.map((answer, index) => {
                const question = questions.find((q) => q.id === answer.questionId)
                if (!question) return null

                return (
                  <div
                    key={answer.questionId}
                    className="p-4 rounded-lg border border-[#E5E5E5] bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          answer.isCorrect ? "bg-[#171717] text-white" : "bg-[#E5E5E5] text-[#737373]"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-[11px] text-[#a3a3a3] font-light mb-1">{question.subject}</p>
                        <p className="text-sm text-[#171717] font-light mb-2">{question.question}</p>
                        {!answer.isCorrect && (
                          <>
<p className="text-xs text-[#737373] mb-1">
  선택: {question.type === "short-answer" || question.type === "matching"
  ? "정답 확인"
  : Array.isArray(answer.selectedAnswer)
  ? answer.selectedAnswer.map((index) => question.options[index]).join(", ") || "선택하지 않음"
  : question.options[Number(answer.selectedAnswer)]}
  </p>
  <p className="text-xs text-[#171717] mb-2">
  정답: {question.type === "short-answer" || question.type === "matching"
  ? String(question.correctAnswer)
  : Array.isArray(question.correctAnswer)
  ? question.correctAnswer.map((answer) => question.options[answer]).join(", ")
  : question.options[Number(question.correctAnswer)]}
  </p>
                          </>
                        )}
                        {question.explanation && (
                          <p className="text-xs text-[#737373] bg-[#FAFAFA] rounded p-2">{question.explanation}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <Link href="/national-exam" className="flex-1">
              <button className="w-full py-3 bg-white border border-[#E5E5E5] text-[#171717] rounded-md font-light text-sm hover:bg-[#f5f5f5] transition-colors duration-150">
                다른 교시 선택
              </button>
            </Link>
            <button
              onClick={() => {
                setQuestions(periodId === "period2" ? getQuestionsForWeek(weekId) : getQuestionsForPeriod(periodId, 20))
                setCurrentIndex(0)
                setUserAnswers([])
                setSelectedOption(null)
                setIsAnswered(false)
                setShowResult(false)
              }}
              className="flex-1 py-3 bg-[#171717] text-white rounded-md font-light text-sm hover:bg-[#404040] transition-colors duration-150"
            >
              다시 풀기
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center px-4">
      {/* 헤더 */}
      <div className="w-full max-w-md pt-8 flex items-center justify-between">
        <Link
          href="/national-exam"
          className="inline-flex items-center gap-2 text-[#737373] hover:text-[#171717] transition-colors duration-150"
        >
          <X className="w-5 h-5" />
        </Link>
        <span className="text-sm text-[#737373] font-light">{period?.name}</span>
        <div className="w-5" />
      </div>

      {/* 진행률 바 */}
      <div className="w-full max-w-md mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#a3a3a3] font-light">
            {currentIndex + 1} / {questions.length}
          </span>
          <div className="flex items-center gap-3 text-xs font-light">
            <span className="text-[#737373]">정답 {correctCount}</span>
            <span className="text-[#a3a3a3]">{Math.round(progress)}%</span>
          </div>
        </div>
        <div className="w-full h-1 bg-[#E5E5E5] rounded-full">
          <div
            className="h-full bg-[#171717] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 문제 */}
      <div className="w-full max-w-md mt-10 flex-1">
        {/* 과목명 - 작은 secondary text */}
        <p className="text-xs text-[#a3a3a3] font-light mb-3">{currentQuestion?.subject}</p>

        <p className="text-lg text-[#171717] font-light leading-relaxed mb-8">{currentQuestion?.question}</p>

        {/* 보기 */}
        {currentQuestion?.type === "short-answer" || currentQuestion?.type === "matching" ? (
          <div className="space-y-3">
            {currentQuestion.type === "matching" ? (
              <div className="space-y-2">
                {Array.from({ length: currentQuestion.options.length }).map((_, index) => {
                  const answerText = isAnswered
                    ? currentQuestion.correctAnswer.toString().split(" / ")[index]?.replace(/^\d+\)\s*/, "") || ""
                    : "?"
                  return (
                    <div key={index} className="flex items-center gap-3 rounded-md border border-[#E5E5E5] bg-white px-3 py-3">
                      <span className="w-5 text-sm text-[#737373]">{index + 1})</span>
                      <span className="flex min-h-9 flex-1 items-center justify-center rounded-md border border-[#D4D4D4] bg-[#FAFAFA] px-3 text-sm font-medium text-[#171717]">
                        {answerText}
                      </span>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-sm font-light leading-relaxed text-[#737373]">
                답을 충분히 생각한 뒤 정답을 확인하세요.
              </p>
            )}
            {!isAnswered && (
              <button
                onClick={handleShortAnswerReveal}
                className="w-full rounded-md bg-[#171717] py-3 text-sm font-light text-white transition-colors hover:bg-[#404040]"
              >
                정답 확인
              </button>
            )}
          </div>
        ) : (
        <>
        <div className={`grid gap-3 ${currentQuestion?.type === "mcq" ? "grid-cols-1" : "grid-cols-2"}`}>

          {currentQuestion?.options.map((option, index) => {
            const isSelected = Array.isArray(selectedOption)
              ? selectedOption.includes(index)
              : selectedOption === index
            const isCorrect = Array.isArray(currentQuestion.correctAnswer)
              ? currentQuestion.correctAnswer.includes(index)
              : index === currentQuestion.correctAnswer
            const showCorrect = isAnswered && isCorrect
            const showWrong = isAnswered && isSelected && !isCorrect
            const isO = option === "O"
            const isMcq =
              currentQuestion.type === "mcq" ||
              currentQuestion.type === "matching" ||
              currentQuestion.type === "multi-mcq"

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                aria-label={`${option} 선택`}
                className={`rounded-lg border text-left transition-all duration-150 ${
                  isMcq ? "min-h-14 px-4 py-3" : "min-h-28 flex items-center justify-center"
                } ${
                  showCorrect
                    ? isMcq
                      ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
                      : isO
                        ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
                        : "border-[#DC2626] bg-[#FEF2F2] text-[#DC2626]"
                    : showWrong
                      ? "border-[#DC2626] bg-[#FEF2F2] text-[#DC2626]"
                      : isSelected
                        ? "border-[#171717] bg-white text-[#171717]"
                        : isMcq
                          ? "border-[#E5E5E5] bg-white text-[#171717] hover:border-[#a3a3a3]"
                          : isO
                            ? "border-[#BFDBFE] bg-white text-[#2563EB] hover:border-[#2563EB]"
                            : "border-[#FECACA] bg-white text-[#DC2626] hover:border-[#DC2626]"
                } ${isAnswered && !showCorrect && !showWrong ? "opacity-45" : ""}`}
              >
                {isMcq ? (
                  <span className="flex items-start gap-3 text-sm font-light leading-relaxed">
                    <span className="text-xs text-[#a3a3a3]">{currentQuestion.type === "matching" ? "연결" : index + 1}</span>
                    <span>{option}</span>
                  </span>
                ) : (
                  <span className="text-4xl font-light tracking-tight">{option}</span>
                )}
              </button>
            )
          })}
        </div>
        {!(["short-answer", "matching"] as const).includes(currentQuestion?.type as "short-answer" | "matching") && !isAnswered && !gradeOnSelect && (
          <button
            onClick={() => handleAnswerSubmit()}
            disabled={Array.isArray(selectedOption) ? selectedOption.length === 0 : selectedOption === null}
            className="mt-4 w-full rounded-md bg-[#171717] py-3 text-sm font-light text-white transition-colors hover:bg-[#404040] disabled:cursor-not-allowed disabled:bg-[#E5E5E5] disabled:text-[#a3a3a3]"
          >
            {currentQuestion?.type === "multi-mcq" ? "선택한 답 확인" : "정답 확인"}
          </button>
        )}
        </>
        )}

        {/* 해설 */}
        {isAnswered && currentQuestion && (currentQuestion.explanation || currentQuestion.type === "short-answer" || currentQuestion.type === "matching") && (
          <div
            className={`mt-4 p-4 rounded-lg border ${
              currentQuestion.type === "short-answer"
                ? "border-[#E5E5E5] bg-[#FAFAFA]"
                : currentUserAnswer?.isCorrect
                  ? "border-[#BFDBFE] bg-[#EFF6FF]"
                  : "border-[#E5E5E5] bg-white"
            }`}
            role="status"
            aria-live="polite"
          >
            <p
              className={`text-sm font-medium mb-2 ${
                currentQuestion.type === "short-answer"
                  ? "text-[#737373]"
                  : currentUserAnswer?.isCorrect
                    ? "text-[#2563EB]"
                    : "text-[#737373]"
              }`}
            >
              {currentQuestion.type === "short-answer"
                ? "정답 확인"
                : currentUserAnswer?.isCorrect
                  ? "정답입니다"
                  : "오답입니다"}
            </p>
            {(currentQuestion.type === "short-answer" || currentQuestion.type === "matching" || gradeOnSelect) && (
              <p className="text-xs text-[#171717] font-medium leading-relaxed mb-2">
                정답: {getAnswerText(currentQuestion)}
              </p>
            )}
            <p className="text-xs text-[#737373] font-light leading-relaxed">
              {currentQuestion.explanation || `정답은 ${getAnswerText(currentQuestion)}입니다.`}
            </p>
          </div>
        )}

        {/* 문제 이동 */}
        {(currentIndex > 0 || isAnswered) && (
          <div className="flex gap-3 mt-6 mb-8">
            {currentIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 py-3 bg-white border border-[#E5E5E5] text-[#737373] rounded-md font-light text-sm hover:border-[#a3a3a3] hover:text-[#171717] transition-colors duration-150"
              >
                이전 문제 다시 풀기
              </button>
            )}
            {isAnswered && (
              <button
                onClick={handleNext}
                className="flex-1 py-3 bg-[#171717] text-white rounded-md font-light text-sm hover:bg-[#404040] transition-colors duration-150"
              >
                {currentIndex < questions.length - 1 ? "다음 문제" : "결과 보기"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
          <p className="text-[#737373] font-light">로딩 중...</p>
        </div>
      }
    >
      <QuizContent />
    </Suspense>
  )
}
