import Header from "@/components/layout/Header";
import EyecatchEpisode from "@/components/layout/EyecatchEpisode";
import SEO from "@/components/SEO";

// Newt
import { getArticles, getArticleBySlug } from '@/libs/newt';



// [article]のパスを生成する
export async function getStaticPaths() {
  const articles = await getArticles();
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));
  return { paths, fallback: false };
}

// データから情報を取ってくる
export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug);
  return { props: { article } };
}

export default function ContentDetail({ article }) {
  // articleが存在することをチェック
  if (!article) {
    return <div>Article not found</div>;
  }

  console.log(article);

  return (<>
    <SEO 
            title={article.title} 
            // description={props.description} imgUrl={`${props.emoji.url}`}
            
            ogTitle={`${article.title} | BONO BLOG`}
            // ogDescription={props.description} 
            // ogWidth='160'
            // ogHeight="160"
            >
    </SEO>
    <div className="">
      <Header />
      <div className="ContentSection m-auto py-12 w-11/12 md:w-10/12">
        <EyecatchEpisode article={article} /> 
      </div>
    </div>
  </>);
}
