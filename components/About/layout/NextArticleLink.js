// components/About/layout/NextArticleLink.js
import Link from 'next/link';
import ListStance from '../ui/stance/listStance';

function NextArticleLink({ currentArticle, allArticles }) {
  // 次の記事を見つける関数
  function findNextArticle(currentArticle, allArticles) {
    const currentOrder = currentArticle.seriesorder;
    const currentSeries = currentArticle.series.slug; // 現在の記事のシリーズを取得

    // 同じシリーズ内で次の記事を見つける
    const nextArticle = allArticles
      .filter(article => article.series.slug === currentSeries && article.seriesorder > currentOrder)
      .sort((a, b) => a.seriesorder - b.seriesorder)[0]; // seriesOrderが小さい順にソートして最初の要素を取得

    return nextArticle;
  }

  // 次の記事を見つける
  const nextArticle = findNextArticle(currentArticle, allArticles);

  // 次の記事がない場合は何も表示しない
  if (!nextArticle) return null;

  // 次の記事へのリンクを表示
  return (
    <div className="next-article-link py-8">
      <h2 className='text-center text-lg'>次の記事 ⬇️</h2>
      <ListStance
        className="m-auto w-full text-center"
        title={nextArticle.title} 
        url={`/about/${nextArticle.slug}`}
    />
    </div>
  );
}

export default NextArticleLink;