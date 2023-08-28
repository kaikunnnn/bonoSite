import { getArticles, getArticleBySlug } from '@/libs/newt';

// [article]のパスを生成する
export async function getStaticPaths() {
  const articles = await getArticles();
  const paths = articles.map((article) => ({
    params: { article: article.slug },
  }));
  return { paths, fallback: false };
}

// データから情報を取ってくる
export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.article);
  return { props: { article } };
}

export default function ArticlePage({ article }) {
  if (!article) return null;

  return (
    <main className="">
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </main>
  );
}