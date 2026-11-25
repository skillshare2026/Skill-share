import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const categories = [
    {
      name: "근육",
      id: "muscle",
      href: "/muscle",
    },
    {
      name: "국가고시",
      id: "national-exam",
      href: "/national-exam",
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      <div className="pt-8 pb-16 text-center animate-fade-in border-b border-gray-200">
        <Image src="/images/logo.png" alt="zip_biology Logo" width={330} height={120} priority />
        <p className="mt-4 text-gray-600 text-sm font-light tracking-tight">자료모음</p>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-md pt-16">
        {categories.map((category, index) => (
          <Link key={category.id} href={category.href}>
            <button
              className="w-full py-8 px-4 text-center font-light text-lg tracking-tight transition-all duration-300 cursor-pointer rounded-lg animate-fade-in hover:shadow-md hover:scale-105 drop-shadow-sm"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              {category.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="h-5"></div>
    </div>
  )
}
