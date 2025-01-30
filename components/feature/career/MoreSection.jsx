"use client";

export default function RelatedContentSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-5xl  px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 text-sm font-medium text-gray-600 tracking-wide">
            BONO利用者の声
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            BONOをもっと使う
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            "デザインはオリジナリティを発揮するもの。と思い込んではいけません。
            まずは世の中の良いものに目を向けて"定番"の表現を吸収していくのです"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* サービスについて知る */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                サービスについて知る
              </h3>
              <p className="text-gray-600 mb-6">
                BONOでUIUXデザインを学んで"創造"して楽しむ旅をスタートしよう
              </p>
              <a 
                href="/about"
                className="inline-flex items-center px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                はじめる
              </a>
            </div>

            {/* コース一覧を見る */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                コース一覧を見る
              </h3>
              <p className="text-gray-600 mb-6">
                BONOでUIUXデザインを学んで"創造"して楽しむ旅をスタートしよう
              </p>
              <a 
                href="/courses"
                className="inline-flex items-center px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                はじめる
              </a>
            </div>

            {/* 料金を知る */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                料金を知る
              </h3>
              <p className="text-gray-600 mb-6">
                BONOでUIUXデザインを学んで"創造"して楽しむ旅をスタートしよう
              </p>
              <a 
                href="/pricing"
                className="inline-flex items-center px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                はじめる
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}