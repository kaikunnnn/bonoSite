// pages/series.js
import SEO from "@/components/SEO";
import React from "react";

// Newt
import { getContents,getSeries,getContentsBySlug,getSeriesBySlug } from "@/libs/newt";

export async function getStaticPaths() {
  const series = await getSeries();
  const contents = await getContents();

  // シリーズとコンテンツの slug を組み合わせたパスを生成
  const paths = series.map(s => {
    return contents.map(c => {
      return { params: { slug: s.slug, content: c.slug } };
    });
  }).flat();  // 2次元配列を1次元に平坦化
  console.log(paths);
  return {
    paths,
    fallback: false  // 存在しないパスにアクセスされた場合は404ページを表示
  };
}


export async function getStaticProps({ params }) {
  // params から slug と content を取得
  const { slug, content } = params;

  // 対応するコンテンツのデータを取得
  const contentData = await getContentsBySlug(content);

  // コンテンツデータがなければ404エラーを返す
  if (!contentData) {
    return { notFound: true };
  }

  

  // コンテンツデータを pageProps としてページコンポーネントに渡す
  return { props: { content: contentData } };
  
}

export default function SeriesDetail({ content }) {
  console.log(content);
  return (
    <>
      <SEO
        title="BONOブログ 東京で個人開発する1人デザイナーの日常"
        description="UIとUXのデザインスキルが身に付く動画コンテンツサービス「BONO」を運営するカイクンの個人ブログです。"
        imgUrl="https:kaikun.bo-no.blog/ogp-bonoblog.jpg"
        ogTitle="BONOブログ 東京で個人開発する1人デザイナーの日常"
        ogDescription="UIとUXのデザインスキルが身に付く動画コンテンツサービス「BONO」を運営するカイクンの個人ブログです。"
        ogWidth="1200"
        ogHeight="600"
      ></SEO>
      <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <div className="Article m-auto w-11/12 md:w-7/12 grid text-center lg:mb-0  lg:text-left">
          {/* TopBlock */}
          <div className="Topblock flex-col justify-start items-start gap-6 inline-flex">
            <div className="Titleblock self-stretch px-12 flex-col justify-start items-start gap-2.5 flex">
              <div className="Category self-stretch justify-start items-center gap-7 inline-flex">
                <div className="Category text-red-300 text-base font-normal font-['Noto Sans'] leading-relaxed tracking-wide">
                  ブログ
                </div>
              </div>
              <h1 className="H1Title self-stretch   text-4xl font-bold font-['Noto Sans JP'] leading-10 tracking-wide">
                {content.title}
              </h1>
            </div>
            <div className="Frame625345 self-stretch px-12 justify-between items-center inline-flex">
              <div className="Actions justify-start items-start gap-4 flex">
                <div className="ButtonSecondTiny h-7 px-2 py-2 bg-white bg-opacity-10 rounded-full justify-center items-center flex">
                  <div className=" text-center   text-xs font-bold font-['Noto Sans JP'] leading-3">
                    質問
                  </div>
                </div>
                <div className="ButtonSecondTiny h-7 px-2 py-2 bg-white bg-opacity-10 rounded-full justify-center items-center flex">
                  <div className=" text-center   text-xs font-bold font-['Noto Sans JP'] leading-3">
                    保存
                  </div>
                </div>
                <div className="ButtonSecondTiny h-7 px-2 py-2 bg-white bg-opacity-10 rounded-full justify-center items-center flex">
                  <div className=" text-center   text-xs font-bold font-['Noto Sans JP'] leading-3">
                    シェア
                  </div>
                </div>
              </div>
              <div className="Date text-stone-300 text-sm font-normal font-['Noto Sans'] leading-snug tracking-wide">
                2023年4月20日
              </div>
            </div>
          </div>

          {/* Movie */}
          <div className="Movie shadow flex-col justify-start items-start gap-6 inline-flex">
            <img
              className="Image42 self-stretch h-96 rounded-lg border border-stone-300"
              src="https://via.placeholder.com/1040x585"
            />
          </div>

          {/* Content
          <div className="Article Body
            prose 
            prose-h1:text-3xl
            prose-lg 
            prose-p:leading-loose
            md:prose-xl 
            m-auto " dangerouslySetInnerHTML={{ __html: article.body }} 
          />

           {/* Only Member's Content *
           <div className="Article Body
            prose 
            prose-h1:text-3xl
            prose-lg 
            prose-p:leading-loose
            md:prose-xl 
            m-auto " dangerouslySetInnerHTML={{ __html: article.body }} 
          /> */}
        </div>
      </main>
    </>
  );
}
