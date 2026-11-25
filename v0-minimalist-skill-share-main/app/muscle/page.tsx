import Link from "next/link"

export default function MusclePage() {
  const parts = [
    { name: "상지", id: "upper-limb" },
    { name: "하지", id: "lower-limb" },
    { name: "목/머리", id: "head-neck" },
    { name: "몸통", id: "trunk" },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="pt-8 pb-6 text-center border-b border-gray-200 w-full animate-fade-in">
        <Link href="/" className="mb-4 text-gray-600 text-sm hover:text-gray-900 transition inline-block">
          ← 돌아가기
        </Link>
        <h1 className="text-2xl font-light tracking-tight text-gray-900">근육</h1>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-md pt-16">
        {parts.map((part, index) => (
          <Link key={part.id} href={`/muscle/${part.id}/quiz`}>
            <button
              className="w-full py-8 px-4 text-center font-light text-lg tracking-tight transition-all duration-300 cursor-pointer rounded-lg animate-fade-in hover:shadow-md hover:scale-105 drop-shadow-sm bg-white hover:bg-gray-50"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              {part.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}
