export default function DetailPage() {
    return (
    <header 
      className={`fixed top-0 left-0 w-full h-20 flex items-center z-[1000] transition-all duration-300 `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* 로고 */}
        <div className="text-2xl font-extrabold tracking-tighter text-slate-800">
          <a href="/">
            로고<span className="font-light text-slate-400">이름</span>
          </a>
        </div>

        {/* 네비게이션 */}
        <nav className="hidden md:block">
          
          <div className="flex justify-between">
            <div className="m-2 text-slate-600 hover:text-black">회사정보</div>
            <div className="m-2 text-slate-600 hover:text-black">포트폴리오</div>
            <div className="m-2 text-slate-600 hover:text-black">인력채용</div>
          </div>
          { 
           /* <ul className="flex space-x-10">
            {navItems.map((item) => (
              <li key={item.title}>
                <a 
                  href={item.href} 
                  className="text-base font-medium text-slate-600 hover:text-black transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul> */
          }
          
        </nav>

        {/* 버튼 */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block px-6 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all">
            무료 견적 신청
          </button>
          
          {/* 모바일 햄버거 메뉴 (아이콘 대체용) */}
          <button className="md:hidden text-slate-800 text-2xl">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};