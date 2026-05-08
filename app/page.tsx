import CupHolderMockup from './components/CupHolderMockup';
import KPISection from './components/KPISection';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white antialiased">
      <header className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold rounded">
            S
          </div>
          <div className="text-lg font-semibold">
            Synergy · 컵홀더 광고 플랫폼
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a className="hover:underline" href="#problem">
            문제
          </a>
          <a className="hover:underline" href="#solution">
            솔루션
          </a>
          <a className="hover:underline" href="#metrics">
            수치
          </a>
          <a className="hover:underline" href="#mvp">
            MVP
          </a>
          <a className="hover:underline" href="#contact">
            광고주 문의
          </a>
        </nav>
      </header>

      <main className="space-y-24">
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                광고가 손에 닿는 순간, 브랜드는 기억된다.
              </h1>

              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                컵홀더 광고로 소비자의 실제 행동 시간에 도달합니다.
                브랜드의 메시지를 오래, 가까이, 자연스럽게 전달하여 광고
                효과를 재정의합니다.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-md shadow hover:opacity-90"
                >
                  광고 제휴 문의
                </a>

                <a
                  href="#mvp"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                >
                  MVP 결과 보기 →
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <CupHolderMockup />
            </div>
          </div>
        </section>

        <section id="problem" className="py-20">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">기존 광고의 문제</h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                온라인 광고는 쉽게 스킵되고, 오프라인 광고는 성과 측정이
                어렵습니다. 특히 대학가와 카페 공간에서는 소비자의 체류 시간은
                길지만, 브랜드가 자연스럽게 개입할 수 있는 접점은 부족합니다.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <h3 className="font-semibold">낮은 주목도</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  디지털 광고는 피로도가 높고, 사용자는 광고를 빠르게 넘깁니다.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <h3 className="font-semibold">성과 측정의 한계</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  일반 오프라인 광고는 노출 이후 행동 데이터를 확보하기
                  어렵습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="py-20 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Synergy의 솔루션</h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                컵홀더는 소비자가 커피를 마시는 동안 손에 들고, 책상 위에 두며,
                반복적으로 시선이 닿는 매체입니다. 여기에 QR 기반 참여형
                캠페인을 결합해 브랜드 노출과 행동 데이터를 동시에 확보합니다.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <h3 className="font-semibold">가까운 노출</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  컵을 사용하는 동안 브랜드 메시지가 자연스럽게 반복 노출됩니다.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <h3 className="font-semibold">참여형 전환</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  QR을 통해 미션, 쿠폰, 설문, 이벤트 페이지로 연결할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="metrics" className="bg-black text-white py-20">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-bold">핵심 수치</h2>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold">84%</div>
                <div className="text-sm text-gray-400 mt-2">
                  국내 FGI 광고 인지율
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-extrabold">51.5%</div>
                <div className="text-sm text-gray-400 mt-2">
                  1시간+ 시선 노출 응답
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-extrabold">49분</div>
                <div className="text-sm text-gray-400 mt-2">
                  평균 슬리브 노출
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-extrabold">18잔</div>
                <div className="text-sm text-gray-400 mt-2">
                  MVP 테스트 배포 수량
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <KPISection />

        <section id="mvp" className="py-20">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">MVP 테스트 결과</h2>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                초기 MVP에서는 밈 문구와 QR을 삽입한 컵홀더를 배포해 광고 인지,
                QR 주목도, 참여 유도 가능성을 확인했습니다.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold">광고 인지</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    컵홀더라는 물리적 매체는 자연스러운 노출에 강점이 있습니다.
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold">QR 클릭</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    QR 인지율을 높이기 위해 구두 안내, 행동 유도 문구, 리워드
                    설계가 필요합니다.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                총 배포: 18잔 · 광고: 사주핑 어플 · 형식: 밈 문구 + QR
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold">QR 상호작용</h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                QR 스캔 후 인터랙티브 미션, 쿠폰, 설문 등으로 참여를 측정합니다.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-20 h-20 bg-white text-black flex items-center justify-center rounded shadow font-bold">
                  QR
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  실시간 캠페인 대시보드와 연동하여 성과를 시각화합니다.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold">
                QR 캠페인 — 참여를 행동으로
              </h2>

              <p className="mt-4 text-gray-300">
                QR로 연결되는 미션을 통해 참여율을 높이고, 캠페인 성과를
                대시보드로 실시간 집계합니다.
              </p>

              <ol className="mt-6 list-decimal list-inside text-gray-400 space-y-3">
                <li>컵홀더의 시선을 끄는 메시지로 스캔 동기 부여</li>
                <li>스캔 후 인터랙티브 미션, 퀴즈, 사진 업로드, 쿠폰 제공</li>
                <li>완료 시 리워드 제공으로 참여율 증가</li>
              </ol>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-56 h-56 bg-white p-4 rounded-md shadow-lg flex items-center justify-center">
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <rect x="0" y="0" width="140" height="140" fill="#000" rx="8" />
                  <rect x="18" y="18" width="26" height="26" fill="#fff" />
                  <rect x="96" y="18" width="26" height="26" fill="#fff" />
                  <rect x="18" y="96" width="26" height="26" fill="#fff" />
                  <rect x="58" y="58" width="14" height="14" fill="#fff" />
                  <rect x="80" y="58" width="10" height="10" fill="#fff" />
                  <rect x="58" y="84" width="10" height="10" fill="#fff" />
                  <rect x="96" y="96" width="16" height="16" fill="#fff" />
                </svg>
              </div>

              <div className="text-sm text-gray-300">
                QR 스캔 → 참여형 랜딩 → 대시보드 측정
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-extrabold">
              광고로 학생의 하루를 바꾸세요
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              광고비가 곧 학생들의 커피 한 잔이 됩니다. 브랜드 인지도, 체류
              시간, 참여 데이터를 함께 확보하세요.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:synergy@example.com"
                className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-md font-semibold"
              >
                광고 문의 보내기
              </a>

              <a href="/pitch.pdf" className="px-6 py-4 border rounded-md">
                피치덱 다운로드
              </a>
            </div>

            <div className="mt-10 text-sm text-gray-500">
              수신: 배성규 선배님 · 발신: 창업 동아리 시너지
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
        <div className="max-w-6xl mx-auto px-8 py-8 text-sm text-gray-500">
          © {year} Synergy · 컵홀더 광고 플랫폼 — 문의: synergy@example.com
        </div>
      </footer>
    </div>
  );
}
