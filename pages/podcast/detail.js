import React from 'react';
// pages/series.js
import SEO from '@/components/common/layout/Navigation/SEO';
import About from '@/components/Series/layout/About';

// Newt
import { getSeries, getSeriesBySlug, getContents} from '@/libs/newt';

// Component
import Header from '@/components/common/layout/Navigation/Header';
import SunTop from '@/components/common/layout/SunTop';


export default function PodcastDetail() {
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
        <Header />
        <SunTop />
        <div className="Podcast w-[928px] m-auto flex justify-center flex-col gap-8">
          <div className='HeaderNavi'>
             <div class="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                <div class="p-4 bg-white rounded-md border border-neutral-900 border-opacity-10 justify-start items-start gap-2.5 inline-flex">
                    <div class="text-center text-black text-opacity-50 text-sm font-bold font-['Noto Sans'] leading-[14px] tracking-wide">一覧へ戻る</div>
                </div>
            </div>
          </div>
          <div className='Content'>
            <div class="Wrapper w-full p-16 bg-white border border-black flex-col justify-start items-start gap-12 inline-flex">
                        <div class="self-stretch  flex-col justify-start items-start gap-16 flex">
                            <div class=" flex-col justify-start items-start gap-8 flex">
                                <div class="flex-col justify-center items-start gap-6 flex">
                                    <div class="self-stretch justify-start items-center gap-4 inline-flex">
                                        <div class="justify-start items-center gap-4 flex">
                                            <img class="w-10 h-10 rounded-[5px] shadow" src="https://via.placeholder.com/40x40" />
                                            <div class="text-black text-opacity-50 text-base font-bold font-['Noto Sans'] leading-none tracking-wider">BONOラジオ</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch justify-start items-center gap-[529px] inline-flex">
                                        <div class="grow shrink basis-0 text-slate-900 text-5xl font-bold font-['Hind'] leading-[67.20px]">セブンカフェとファミマのカフェモカの違い</div>
                                    </div>
                                    <div class="self-stretch justify-between items-center inline-flex">
                                        <div class="text-white text-sm font-semibold font-['Noto Sans'] leading-snug tracking-wide">キャリア</div>
                                        <div class="text-black text-opacity-50 text-base font-bold font-['Noto Sans'] leading-none tracking-wider">34分56秒</div>
                                    </div>
                                </div>
                                <div class="self-stretch px-6 pt-6 pb-8 bg-white rounded-xl shadow flex-col justify-start items-center gap-2.5 flex">
                                    <div class="py-2 justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-center text-black text-opacity-50 text-base font-bold font-['Noto Sans'] leading-none tracking-wider">🎧再生するンゴ！🎧</div>
                                    </div>
                                    <img class="self-stretch rounded-full" src="https://via.placeholder.com/752x55" />
                                </div>
                            </div>
                        </div>
                        <div class="flex-col justify-start items-start gap-[20px] flex">
                            <div class="flex-col justify-start items-start gap-[22px] flex">
                                <div class="justify-start items-center gap-2.5 inline-flex">
                                    <div class="text-black text-[28px] font-bold font-['Hind'] leading-[39.20px]">Think.</div>
                                    <div class="text-black text-2xl font-semibold font-['Hiragino Mincho Pro'] leading-[33.60px]">痕跡</div>
                                </div>
                            </div>
                            <div class="flex-col justify-start items-start gap-[22px] flex">
                                <div class="justify-start items-center gap-2.5 inline-flex">
                                    <div class="w-[800px]">
                                        <span className="text-black text-xl font-normal font-['Hind'] leading-10">Uberリデザインの記事を読んで、UI変更について色々考察したメモです！刷新について↓</span>
                                    <span className="text-black text-xl font-normal font-['Hind'] underline leading-10">https://mashable-com.translate.goog/article/uber-app-redesign-homescreen-live-activities-dynamic-island?x_sl=en&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=wapp</span>
                                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">今回の刷新について<br/></span>
                                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">目的を予測するに「いろんな利用シーンにすぐにアクセスできる」がありそう。パーソナライズもしつつ（Suggestions)、使いたいものにアクセスして価値に到達しやすくするのを意識した気がするな〜<br/>ホーム<br/>配車 / Eatsが見える位置で着替えられる<br/>上部メインは配車ですぐに呼び出せられる<br/>Suggesitionsで他サービスにもすぐにアクセス<br/>Servicesタブ<br/>能動的に「あれやりたいんだけど」な人が開く場所<br/>ここで使うものがSuggestionsに並ぶことになるのだろう<br/>配車関係のグループと、Eats関係のグループで大きく分かれてる<br/>3Dアイコン<br/></span>
                                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">狙い<br/></span>
                                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">いろんなサービスをすでに使っているデータがあって、アクセスしやすくすることでサービスエンゲージが高まるユーザーが実在している場合は刺さりそう<br/>マイナスとしては主要な使い方ができなくなる恐れがあること<br/>配車したいだけなのに、色々表示されてうざい。など。<br/>この辺はサービス機能の認知とか、他要因も絡まりそう</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </main>
    </>
  );
};

