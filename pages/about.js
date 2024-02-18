import React from "react";

// Component
import Hero from "@/components/About/layout/Hero";
import Story from "@/components/About/layout/Story";
import Stance from "@/components/About/layout/Stance";
import Header from "@/components/common/layout/Navigation/Header";
import { getContents } from "@/libs/newt"; // getContents関数をインポート
import SEO from "@/components/common/layout/Navigation/SEO";

export async function getStaticProps() {
  const contents = await getContents();
  return {
    props: {
      aboutContents: contents,
    },
  };
}


function About({aboutContents}) {
  
  return (
    <>
    <SEO
       title="About:運営のスタンス | BONO"
       description="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜"
       imgUrl="https://kaikun.bo-no.design/ogp-about.webp"
       ogTitle="アバウト - 運営するスタンス | BONO"
       ogImage="/ogp-about.webp"
       ogDescription="BONOは”こうあったらいいのでは?”を考えて→形にするスキルを身につけ、クリエイションの夜明けを実現する人たちのためのサービスです。夜明けの意味する“曙”のように新しい自分の創造性と出会える場所へようこそ〜"
       ogWidth='1200'
       ogHeight="630">
    </SEO>
    <main className="max-h-full text-slate-900">
      <Header />
      <div className="w-full">
        <Hero></Hero>
        <Story></Story>
        <div id="stance">
          <Stance aboutContents={aboutContents}></Stance>
        </div>
      </div>
    </main>
    
    </>
  );
};

export default About;
