import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Header from "@/components/layout/Header";
import EyecatchEpisode from "@/components/layout/EyecatchEpisode";
import SEO from "@/components/SEO";
import { getArticles, getArticleBySlug } from '@/libs/newt';




export default function ContentDetail({ article, relatedArticles }) {
  // articleが存在することをチェック
  if (!article) {
    return <div>Article not found</div>;
  }

  const { featuredImage, title, timetoFinish, mainText } = article.fields;

  return (<>
    <SEO 
            title={title} 
            // description={props.description} imgUrl={`${props.emoji.url}`}
            
            ogTitle={`${title} | BONO BLOG`}
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
      <div className="RelatedSection">
        {relatedArticles.map((relatedArticles) => (
          <EpisodeCard key={relatedArticles.sys.id} article={relatedArticles} />
        ))}
      </div>
    </div>
  </>);
}


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// Generate Paths - 一旦全てのPathを呼び出す
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "article",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Genarate Props - 該当するPathの情報だけ呼び出す
export const getStaticProps = async ({ params }) => {

  const { items } = await client.getEntries({
    content_type: "article",
    //   getStaticPathで呼び出したデータがあるので、params.slugを使うと、現在のページのslugとなる
    "fields.slug": params.slug,
  });

  // 関連記事のデータを取得（ここでは例としてすべての記事を取得しています。実際には適切なクエリを定義する必要があります。）
  const relatedArticles = await client.getEntries({
    content_type: "article",
    limit: 3,  // 例：3つの関連記事を取得
    "fields.slug[ne]": params.slug,  // 現在の記事を除外
  });

  return {
    props: { 
      article: items[0],
      relatedArticles: relatedArticles.items,  // 関連記事のデータを渡す
    },
  };
};
