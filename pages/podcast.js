import HeaderPodcastPage from "@/components/Podcast/ui/Header";
import PodCastStory from "@/components/Podcast/ui/PodcastStory";
import Header from "@/components/common/layout/Navigation/Header";
import SEO from "@/components/common/layout/Navigation/SEO";
import Head from "next/head";
import React from "react";


function BonoRadio({}) {
  
  return (
    <>
    <Head>
      <meta name="twitter:card" content="https://kaikun.bo-no.design/about/ogp-about.webp" />
      <meta name="twitter:title" content="アバウト-運営のスタンス|BONO" />
      <meta name="twitter:description" content="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <SEO
       title="About|BONO"
       description="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜"
       imgUrl="https://kaikun.bo-no.design/about/ogp-about.webp"
       ogTitle="About | BONO"
       ogImage="https://kaikun.bo-no.design/about/ogp-about.webp"
       ogDescription="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜"
       ogWidth='1200'
       ogHeight="630">
    </SEO>
    <main className="max-h-full text-slate-900 bg-stone-50">
      <Header/>
      <div className="Radio flex justify-center items-center">
        <div className="Wrapper w-[880px] m-auto flex-col justify-start items-center gap-6 inline-flex">
           <HeaderPodcastPage/>
          <div className="Episodes w-full flex-col justify-start items-start gap-6 inline-flex">
            <div className="Title py-4 justify-start items-center gap-2.5 inline-flex">
                <h2 class="text-black text-2xl font-bold font-['Noto Sans JP'] leading-[38.40px] tracking-wide">エピソード</h2>
            </div> 
            <ul className="ListOfEspisode">
                <PodCastStory/>
            </ul>
          </div>
        </div>
      </div>

    </main>
    
    </>
  );
};

export default BonoRadio;
