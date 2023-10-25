// pages/series.js
import SEO from '@/components/SEO';
import About from '@/components/element/seriesComponent/About';
import SeriesTop from '@/components/element/seriesComponent/SeriesTop';
import React from 'react';

// Newt
import { getSeries, getSeriesBySlug,getArticles} from '@/libs/newt';

// Component
import HeadingSeries from '@/components/element/seriesComponent/HeadingSeries';
import SectionTitle from '@/components/element/seriesComponent/SectionTitle';
import ContentItem from '@/components/element/seriesComponent/ContentItem';

// [series]のパスを生成する
export async function getStaticPaths() {
  const serieses = await getSeries();
  const paths = serieses.map((series) => ({
    params: { slug: series.slug },
  }));
  return { paths, fallback: false };
}

// データから情報を取ってくる
export async function getStaticProps({ params }) {
  // Fetch Series
  const series = await getSeriesBySlug(params.slug);
  // Fetch articles from Newt
  const articles = await getArticles();

  return { 
    props: { 
      series ,
      newtArticles: articles, 
    } 
  };
}


export default function SeriesDetail({ series,newtArticles }) {
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
            <div className="Contentlists w-full flex-col justify-start items-start gap-12 inline-flex">
                <HeadingSeries props={"内容"}/>
                <div className="Contentsection flex-col justify-start items-start gap-12 flex">
                    {/* <SectionTitle  props={series}/> */}

                    {
                      newtArticles.map(article => (
                          <ContentItem key={article._id} props={article} />
                      ))
                    }
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

