import Header from "@/components/layout/Header";
import EyecatchEpisode from "@/components/layout/EyecatchEpisode";
import SEO from "@/components/SEO";

// Newt
import { getArticles, getArticleBySlug } from '@/libs/newt';
import { useEffect, useState } from "react";



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
  
   // Description: HTMLをプレーンテキストに変換
   const [articleDescription, setArticleDescription] = useState(""); // ステートを作成

    useEffect(() => {
      const dummyDiv = document.createElement('div'); 
      dummyDiv.innerHTML = article.body;

      let textContent = dummyDiv.textContent || dummyDiv.innerText;
      // 最初の140文字だけを取得
      textContent = textContent.substring(0, 140);

      setArticleDescription(textContent);  // ステートを更新
    }, [article]);  // 依存配列にarticleを追加

    // articleが存在することをチェック
  if (!article) {
    return <div>Article not found</div>;
  }
 

  return (<>
   <SEO 
            title={`${article.title} | BONO BLOG`}
            description={articleDescription}
            imgUrl={`${article.emoji.src}`}
            ogTitle={`${article.title} | BONO BLOG`}
            ogImage={article.emoji.src}
            ogDescription={articleDescription}
            ogWidth='160'
            ogHeight="160">
        </SEO>

    <div className="">
      <Header />
      <div className="ContentSection m-auto py-12 w-11/12 md:w-10/12">
        <EyecatchEpisode article={article} /> 
      </div>
    </div>
  </>);
}
