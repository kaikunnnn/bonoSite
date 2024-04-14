import Head from "next/head";
import React from "react";
// Component
import HeaderPodcastPage from "@/components/Podcast/ui/Header";
import PodCastStory from "@/components/Podcast/ui/PodcastStory";
import Header from "@/components/common/layout/Navigation/Header";
import SEO from "@/components/common/layout/Navigation/SEO";

// Newt
import { getContents, getContentBySlug } from "@/libs/newt";

export async function getStaticProps() {
  const contents = await getContents();
  return {
    props: {
      radioContents: contents,
    },
  };
}

function BonoRadio({ radioContents }) {
  console.log(radioContents);
  return (
    <>
      <Head>
        <meta
          name="twitter:card"
          content="https://kaikun.bo-no.design/about/ogp-about.webp"
        />
        <meta name="twitter:title" content="アバウト-運営のスタンス|BONO" />
        <meta
          name="twitter:description"
          content="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SEO
        title="About|BONO"
        description="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜"
        imgUrl="https://kaikun.bo-no.design/about/ogp-about.webp"
        ogTitle="About | BONO"
        ogImage="https://kaikun.bo-no.design/about/ogp-about.webp"
        ogDescription="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜"
        ogWidth="1200"
        ogHeight="630"
      ></SEO>
      <main className="max-h-full text-slate-900 bg-stone-50 pb-80">
        <Header />
        <div className="Radio flex justify-center items-center">
          <div className="Wrapper md:w-[880px] w-11/12 m-auto flex-col justify-start items-center md:gap-6 gap-4 inline-flex">
            <HeaderPodcastPage />
            <div className="Episodes w-full flex-col justify-start items-start gap-4 inline-flex">
              <ul className="ListOfEspisode flex flex-col gap-6">
                {radioContents
                  .filter((article) => article.series?.slug === "bonoradio")
                  .map((article, index) => (
                    <PodCastStory
                      key={index}
                      link={article.slug}
                      title={article.title}
                      timestamp={article.timestamp}
                      description={article.body}
                      audioSrc={article.mediaurl}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default BonoRadio;
