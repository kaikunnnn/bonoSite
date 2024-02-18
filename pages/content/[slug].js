import Header from "@/components/common/layout/Navigation/Header";
import EyecatchEpisode from "@/components/common/layout/EyecatchEpisode";
import SEO from "@/components/common/layout/Navigation/SEO";
import Head from 'next/head';

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
 console.log(article.description);

  return (<>
   <Head>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={`${article.title} | BONO BLOG`}/>
    <meta name="twitter:description" content={article.description} />
    <meta name="twitter:image" content={article.emoji.src} />
   </Head>
   <SEO 
            title="About:運営のスタンス | BONO"
            description="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜"
            imgUrl="/ogp-about.webp"
            ogTitle="アバウト - 運営するスタンス | BONO"
            ogImage="/ogp-about.webp"
            ogDescription={article.description}
            ogWidth='1200'
            ogHeight="630">
        </SEO>

    <div className="">
      <Header />
      <div className="ContentSection m-auto py-12 w-11/12 md:w-10/12">
        <EyecatchEpisode article={article} /> 
      </div>
    </div>
  </>);
}
