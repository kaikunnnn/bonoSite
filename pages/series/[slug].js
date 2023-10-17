// pages/series.js
import SEO from '@/components/SEO';
import About from '@/components/element/seriesComponent/About';
import ContentLists from '@/components/element/seriesComponent/ContentLists';
import SeriesTop from '@/components/element/seriesComponent/SeriesTop';
import React from 'react';

// Newt
import { getSeries, getSeriesBySlug } from '@/libs/newt';
import { useEffect, useState } from "react";

// [article]のパスを生成する
export async function getStaticPaths() {
  const serieses = await getSeries();
  const paths = serieses.map((series) => ({
    params: { slug: series.slug },
  }));
  return { paths, fallback: false };
}

// データから情報を取ってくる
export async function getStaticProps({ params }) {
  const series = await getSeriesBySlug(params.slug);
  return { props: { series } };
}

export default function SeriesDetail({ series }) {
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
          <SeriesTop props={series}/>

          <div className='ContentSection'>
            <About props={series}/>
            <ContentLists props={series}/>
          </div>
        </div>
      </main>
    </>
  );
};

