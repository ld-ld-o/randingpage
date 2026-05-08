export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">안녕하세요, 박범윤입니다.</h1>

        <p className="mb-2 font-medium">좋아하는 것:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-200">
          <li>커피</li>
          <li>영화</li>
          <li>등산</li>
        </ul>

        <div className="mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-300">한마디</p>
          <blockquote className="mt-2 border-l-4 border-gray-300 pl-4 italic text-gray-600 dark:text-gray-200">자유롭게</blockquote>
        </div>
      </div>
    </main>
  );
}
