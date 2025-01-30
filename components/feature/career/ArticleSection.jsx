"use client";

import { ArrowRight } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

const articles = [
  {
    id: 1,
    title: "ポートフォリオのつくり方解説",
    description: "SNSで微妙な情報が溢れる世の中です。対策しようぜ。",
    thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2072&auto=format&fit=crop",
    isFree: true,
    slug: "how-to-create-portfolio"
  },
  {
    id: 2,
    title: "プロセス説明が大切な理由",
    description: "SNSで微妙な情報が溢れる世の中です。対策しようぜ。",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    isFree: true,
    slug: "importance-of-process"
  },
  {
    id: 3,
    title: "ポートフォリオに掲載するアウトプットの数は？",
    description: "SNSで微妙な情報が溢れる世の中です。対策しようぜ。",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    isFree: true,
    slug: "portfolio-output-count"
  }
];

function ArticleListItem({ article }) {
  return (
    <a 
      href={`/articles/${article.slug}`}
      className="group flex items-center gap-8 py-6 cursor-pointer hover:bg-gray-50/50 transition-colors duration-300"
    >
      <div className="w-[240px] shrink-0">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-3 line-clamp-2">
          {article.description}
        </p>
        {article.isFree && (
          <div className="inline-block px-2 py-1 text-sm bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-md">
            無料
          </div>
        )}
      </div>
      <div className="shrink-0">
        <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </a>
  );
}

export default function ArticleSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 text-sm font-medium text-indigo-600 tracking-wide">
            ARTICLES
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              UIUXデザインの最新記事
            </h2>
            <p className="mt-2 lg:mt-0 text-gray-600">
              現場で活躍するデザイナーによる実践的な記事をお届けします
            </p>
          </div>

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