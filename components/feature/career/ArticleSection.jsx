"use client";

import { ArrowRight } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

const articles = [
  {
    id: 1,
    title: "ポートフォリオのつくり方解説",
    description: "SNSで微妙な情報が溢れる世の中です。対策しようぜ。",
    thumbnail:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2072&auto=format&fit=crop",
    isFree: true,
    slug: "how-to-create-portfolio",
  },
  {
    id: 2,
    title: "プロセス説明が大切な理由",
    description: "SNSで微妙な情報が溢れる世の中です。対策しようぜ。",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    isFree: true,
    slug: "importance-of-process",
  },
  {
    id: 3,
    title: "ポートフォリオに掲載するアウトプットの数は？",
    description: "SNSで微妙な情報が溢れる世の中です。対策しようぜ。",
    thumbnail:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    isFree: false,
    slug: "portfolio-output-count",
  },
];

function ArticleListItem({ article }) {
  return (
    <a href={`/articles/${article.slug}`} className="block">
      <div className="flex-col justify-start items-start -mt-[1px]">
        <div className="self-stretch border-t border-b border-green-950 justify-start items-center flex group">
          <div className="w-[40%] relative aspect-[16/9] bg-zinc-200 flex-col justify-center items-center overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={article.thumbnail}
              alt={article.title}
            />
          </div>
          <div className="flex-1 px-3 sm:px-4 flex flex-col justify-center items-start gap-2">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <div className="w-full">
                <div className="text-green-950 text-sm sm:text-base font-['Roboto Mono'] leading-relaxed group-hover:text-indigo-600 transition-colors duration-300">
                  {article.title}
                </div>
                {article.isFree && (
                  <div className="inline-block px-2 text-xs sm:text-sm bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-md å">
                    無料
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ArticleSection() {
  return (
    <section className="w-full py-8 lg:py-24 bg-gradient-to-b  to-gray-50/50">
      <div className="container px-0 mx-auto flex flex-col items-start gap-8">
        {/* Heading */}
        <div className="w-full max-w-lg flex flex-col items-start gap-2 px-4">
          <div className="px-4 py-1.5 bg-white rounded-full justify-center items-center gap-2.5 inline-flex">
            <div className="text-green-950 text-xs sm:text-sm font-semibold">
              ステップ1
            </div>
          </div>
          <div className="w-full text-green-950 text-lg sm:text-xl md:text-2xl font-medium font-['Noto Sans JP'] leading-relaxed">
            未経験からUIUXデザイナーになれるの？
          </div>
          <div className="w-full text-slate-500 text-sm sm:text-base font-normal font-['Noto Sans JP'] leading-normal">
            顧客中心のデザインを身につける流れです
          </div>
        </div>
        {/* Article List */}
        <div className="max-w-5xl mx-auto">
          <div className="divide-y divide-gray-200">
            {articles.map((article) => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
