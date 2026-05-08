export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white antialiased">
      <header className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold rounded">S</div>
          <div className="text-lg font-semibold">Synergy · 컵홀더 광고 플랫폼</div>
        </div>
        <nav className="flex gap-6 items-center text-sm">
          <a className="hover:underline" href="#problem">문제</a>
          <a className="hover:underline" href="#solution">솔루션</a>
          <a className="hover:underline" href="#metrics">수치</a>
          <a className="hover:underline" href="#mvp">MVP</a>
          <a className="hover:underline" href="#contact">광고주 문의</a>
        </nav>
      </header>

      <main className="space-y-24">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">광고가 손에 닿는 순간, 브랜드는 기억된다.</h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                컵홀더 광고로 소비자의 실제 행동 시간에 도달합니다. 브랜드의 메시지를 '오래, 가까이, 자연스럽게' 전달하여
                광고 효과를 재정의합니다.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-md shadow hover:opacity-90">광고 제휴 문의</a>
                <a href="#mvp" className="text-sm text-gray-600 dark:text-gray-300">MVP 결과 보기 →</a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              {/* Mockup: coffee cup + sleeve */}
              <div className="relative w-72 h-96">
                <svg viewBox="0 0 200 270" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#000" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#111827" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  {/* cup body */}
                  <rect x="30" y="60" rx="24" ry="24" width="140" height="170" fill="#fff" stroke="#e5e7eb" />
                  {/* sleeve */}
                  <rect x="40" y="120" rx="8" width="120" height="60" fill="#0ea5a2" />
                  <text x="100" y="155" fill="#fff" fontSize="14" fontWeight="700" textAnchor="middle">브랜드 광고</text>
                  {/* QR visual on sleeve */}
                  <rect x="120" y="140" width="26" height="26" fill="#fff" />
                  <rect x="124" y="144" width="8" height="8" fill="#000" />
                  <rect x="134" y="144" width="6" height="6" fill="#000" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Problem visualization */}
        <section id="problem" className="bg-black text-white py-20">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold">광고주의 문제 · 소비자의 고충</h3>
              <ul className="mt-6 space-y-4 text-gray-300">
                <li>• 온라인 광고: 1~3초 만에 스킵되어 기억에 남지 않음</li>
                <li>• 오프라인 광고: 소비자와 물리적 거리가 멀어 관여도가 낮음, 데이터 수집 불가</li>
                <li>• 결정적 공백: 1분 이상 자발적으로 광고를 보는 오프라인 매체 부재</li>
                <li className="mt-4">소비자 측면: 아메리카노 평균 4,500원 — 매일 마시기엔 부담</li>
              </ul>
            </div>

            <div className="bg-white text-black rounded-lg p-8 shadow-lg">
              <h4 className="font-semibold text-xl">핵심 인사이트</h4>
              <p className="mt-4 text-gray-700">광고주는 '오래, 가깝게' 소비자에게 닿을 수단이 없고, 소비자는 매일 쓰는 커피값이 부담스럽다.</p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">49분</div>
                  <div className="text-sm text-gray-500 mt-1">평균 슬리브 노출(해외)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">84%</div>
                  <div className="text-sm text-gray-500 mt-1">광고 인지율 (FGI)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-gray-500 mt-1">커피 수용률 (1차 MVP)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution showcase */}
        <section id="solution" className="py-20">
          <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold">컵홀더가 만드는 '고관여' 광고 경험</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">광고를 손에 직접 전달하여 평균 수십 분의 자발적 노출을 확보합니다. QR 인터랙션으로 데이터와 행동을 유도할 수 있습니다.</p>

              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>• 타깃 손에 직접 닿는 오프라인 매체</li>
                <li>• QR 미션으로 참여형 전환 유도</li>
                <li>• 광고비로 무료 커피 제공 — 브랜드 호감도 상승</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              {/* realistic mockup card */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gradient-to-br from-black to-gray-800 p-8 flex items-center gap-6">
                  <div className="w-28 h-36 bg-white rounded-md flex items-center justify-center text-sm font-bold">컵홀더
                  </div>
                  <div className="text-white">
                    <div className="text-xl font-bold">브랜드 캠페인 예시</div>
                    <div className="mt-2 text-sm text-gray-300">QR로 연결되는 참여형 캠페인 예시를 통해 고객 행동을 유도합니다.</div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="text-sm text-gray-600">캠페인: '오늘의 미션을 완료하고 쿠폰 받기'</div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border">
                <h5 className="font-semibold">QR 상호작용</h5>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">QR 스캔 후 인터랙티브 미션, 쿠폰, 설문 등으로 참여를 측정합니다.</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-20 h-20 bg-white flex items-center justify-center rounded shadow">QR</div>
                  <div className="text-sm text-gray-500">실시간 캠페인 대시보드와 연동되어 성과를 시각화합니다.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics / KPI */}
        <section id="metrics" className="bg-black text-white py-20">
          <div className="max-w-6xl mx-auto px-8">
            <h3 className="text-3xl font-bold">핵심 수치</h3>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold">84%</div>
                <div className="text-sm text-gray-400 mt-2">국내 FGI 광고 인지율</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold">51.5%</div>
                <div className="text-sm text-gray-400 mt-2">1시간+ 시선 노출 응답</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold">49분</div>
                <div className="text-sm text-gray-400 mt-2">평균 슬리브 노출 (AdQuick)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold">100%</div>
                <div className="text-sm text-gray-400 mt-2">커피 수용률 (1차 MVP)</div>
              </div>
            </div>
          </div>
        </section>

        {/* MVP results */}
        <section id="mvp" className="py-20">
          <div className="max-w-6xl mx-auto px-8">
            <h3 className="text-3xl font-bold">1차 MVP 결과 (2025.04.28–29)</h3>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold">커피 수용도</h4>
                <p className="mt-2 text-sm text-gray-600">거부감 없이 수령 비율 약 100%. '고맙다', '좋다' 반응 다수.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold">컵홀더 인지율</h4>
                <p className="mt-2 text-sm text-gray-600">대부분 인지하나 색·디자인 시인성 강화 필요.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold">QR 클릭</h4>
                <p className="mt-2 text-sm text-gray-600">QR 인지율 낮음 — 구두 안내·행동 유도 문구 필요.</p>
              </div>
            </div>
            <div className="mt-8 text-sm text-gray-500">총 배포: 18잔 · 광고: 사주핑 어플 (밈 문구 + QR)</div>
          </div>
        </section>

        {/* QR campaign explanation */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold">QR 캠페인 — 참여를 행동으로</h3>
              <p className="mt-4 text-gray-300">QR로 연결되는 미션을 통해 참여율을 높이고, 캠페인 성과를 대시보드로 실시간 집계합니다.</p>

              <ol className="mt-6 list-decimal list-inside text-gray-400 space-y-3">
                <li>컵홀더의 시선을 끄는 메시지로 스캔 동기 부여</li>
                <li>스캔 후 인터랙티브 미션(퀴즈·사진 업로드·쿠폰)</li>
                <li>완료 시 리워드(추첨·쿠폰) 제공으로 참여율 증가</li>
              </ol>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-56 h-56 bg-white p-4 rounded-md shadow-lg flex items-center justify-center">
                {/* Animated QR placeholder */}
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <rect x="0" y="0" width="140" height="140" fill="#000" rx="8" />
                  <rect x="18" y="18" width="26" height="26" fill="#fff" />
                </svg>
              </div>
              <div className="text-sm text-gray-300">QR 스캔 → 참여형 랜딩 → 대시보드 측정</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h3 className="text-4xl font-extrabold">광고로 학생의 하루를 바꾸세요</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">광고비가 곧 학생들의 커피 한 잔이 됩니다. 브랜드 인지도, 체류 시간, 데이터까지 확보하세요.</p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="mailto:synergy@example.com" className="px-8 py-4 bg-black text-white rounded-md font-semibold">광고 문의 보내기</a>
              <a href="/pitch.pdf" className="px-6 py-4 border rounded-md">피치덱 다운로드</a>
            </div>

            <div className="mt-10 text-sm text-gray-500">수신: 배성규 선배님 · 발신: 창업 동아리 시너지</div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
        <div className="max-w-6xl mx-auto px-8 py-8 text-sm text-gray-500">© {new Date().getFullYear()} Synergy · 컵홀더 광고 플랫폼 — 문의: synergy@example.com</div>
      </footer>
    </div>
  );
}
