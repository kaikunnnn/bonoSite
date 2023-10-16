// pages/series.js
import SEO from '@/components/SEO';
import About from '@/components/element/seriesComponent/About';
import ContentLists from '@/components/element/seriesComponent/ContentLists';
import SeriesTop from '@/components/element/seriesComponent/SeriesTop';
import React from 'react';

const SeriesDetail = () => {
  return (
    <>
      <SEO
        title="BONOブログ 東京で個人開発する1人デザイナーの日常" 
        description="UIとUXのデザインスキルが身に付く動画コンテンツサービス「BONO」を運営するカイクンの個人ブログです。" 
        imgUrl="https:kaikun.bo-no.blog/ogp-bonoblog.jpg"
        ogTitle="BONOブログ 東京で個人開発する1人デザイナーの日常"
        ogDescription="UIとUXのデザインスキルが身に付く動画コンテンツサービス「BONO」を運営するカイクンの個人ブログです。"
        ogWidth='1200'
        ogHeight="600"
      >
      </SEO>
      <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <div className="Article m-auto w-11/12 md:w-7/12 grid text-center lg:mb-0  lg:text-left">
          <SeriesTop/>

          <div className='ContentSection'>
            <About/>
            <ContentLists/>
          </div>
        </div>
      </main>
    </>
  );
};

export default SeriesDetail;