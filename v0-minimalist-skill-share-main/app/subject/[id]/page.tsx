import Link from "next/link"

interface SubjectPageProps {
  params: {
    id: string
  }
}

const subjectMap: Record<string, string> = {
  "sports-sociology": "스포츠사회학",
  "sports-education": "스포츠교육학",
  "sports-psychology": "스포츠심리학",
  "sports-ethics": "스포츠윤리",
  "exercise-physiology": "운동생리학",
  "exercise-mechanics": "운동역학",
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const resolvedParams = await params
  const subjectName = subjectMap[resolvedParams.id] || "과목"

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-16 px-4">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-4xl font-light tracking-tight mb-20 font-sans hover:opacity-70 transition-opacity cursor-pointer">
          Skill Share
        </h1>
      </Link>

      {/* Subject Detail */}
      <div className="max-w-sm w-full text-center">
        <h2 className="text-3xl font-light tracking-tight mb-8 font-sans">{subjectName}</h2>
        <p className="text-gray-500 font-light mb-12">이 과목의 학습 자료가 준비될 예정입니다.</p>

        <Link href="/">
          <button className="px-6 py-3 border border-gray-300 font-light transition-colors duration-200 hover:bg-gray-50">
            돌아가기
          </button>
        </Link>
      </div>
    </div>
  )
}
