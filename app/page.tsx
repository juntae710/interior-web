import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">인테리어 메인 화면</h1>
      
      {/* 상세 화면으로 이동하는 링크 */}
      <Link href="/detail" className="bg-black text-white p-3 rounded mt-5 inline-block">
        시공 사례 보러가기
      </Link>
    </main>
  )
}