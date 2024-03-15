import React from "react";
// pages/series.js
import SEO from "@/components/common/layout/Navigation/SEO";
import About from "@/components/Series/layout/About";

// Icon - named lucide
import { ArrowLeft, LogIn } from "lucide-react";

// Component
import Header from "@/components/common/layout/Navigation/Header";
import SunTop from "@/components/common/layout/SunTop";
import AudioPlayer from "@/components/Podcast/ui/AudioPlayer";
import { Button } from "@/components/common/ui/button";
import PrimaryButton from "@/components/common/ui/buttons/PrimaryButton";

export default function PodcastDetail() {
  const textStrokeStyle = {
    WebkitTextStroke: "0.75px black", // 枠線の太さと色
    fontFamily: "Hind",
    color: "white", // 文字の中身を透明
  };
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
        <Header />
        <SunTop />
        <div className="Podcast w-[880px] m-auto py-14 flex justify-center flex-col gap-8">
          <div class="HeaderNavi w-full flex-col justify-start items-start gap-2.5 inline-flex">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4 " icon="arrow-left" /> 一覧へ戻る
            </Button>
          </div>
          <div class="Content w-full p-20 bg-white border border-black flex-col justify-center  gap-12 inline-flex">
            <div class="UpperBlock self-stretch  flex-col justify-center items-start gap-12 flex">
              <div class="Head w-full flex-col justify-start items-center gap-3 flex">
                <div class="self-stretch justify-center items-center inline-flex">
                  <p
                    class="Category text-white text-sm font-semibold font-['Noto Sans'] leading-snug tracking-wide text-center"
                    style={textStrokeStyle}
                  >
                    キャリア
                  </p>
                </div>
                <h1 class="Title grow shrink basis-0 text-slate-900 text-5xl font-bold font-['Hind'] leading-[67.20px] text-center w-10/12">
                  セブンカフェとファミマのカフェモカの違い
                </h1>
                <div class="RadioDetail justify-start items-center gap-4 flex">
                  <img
                    class="w-10 h-10 rounded-[5px] shadow"
                    src="https://via.placeholder.com/40x40"
                  />
                  <h5 class="text-black text-opacity-50 text-base font-bold font-['Noto Sans'] leading-none tracking-wider">
                    BONOラジオ
                  </h5>
                </div>
              </div>
              <div class="Player border border-solid border-gray-200 self-stretch px-6 pt-6 pb-8 rounded-xl shadow flex-col justify-start items-center gap-2.5 flex ">
                <p class="text-center  text-black text-opacity-50 text-base font-bold font-['Noto Sans'] leading-none tracking-wider">
                  🎧再生するンゴ！🎧
                </p>
                <AudioPlayer />
              </div>
            </div>
            <div class="BottomBlock flex-col justify-start items-start gap-[20px] flex">
              <div class="flex-col justify-start items-start gap-[22px] flex">
                <div class="justify-start items-center gap-2.5 inline-flex">
                  <div class="text-black text-[28px] font-bold font-['Hind'] leading-[39.20px]">
                    Think.
                  </div>
                  <div class="text-black text-2xl font-semibold font-['Hiragino Mincho Pro'] leading-[33.60px]">
                    痕跡
                  </div>
                </div>
              </div>
              <div class="flex-col justify-start items-start gap-[22px] flex">
                <div class="justify-start items-center gap-2.5 inline-flex">
                  <div class="w-full">
                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">
                      Uberリデザインの記事を読んで、UI変更について色々考察したメモです！刷新について↓
                    </span>
                    <span className="text-black text-xl font-normal font-['Hind'] underline leading-10">
                      https://mashable-com.translate.goog/article/uber-app-redesign-homescreen-live-activities-dynamic-island?x_sl=en&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=wapp
                    </span>
                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">
                      今回の刷新について
                      <br />
                    </span>
                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">
                      目的を予測するに「いろんな利用シーンにすぐにアクセスできる」がありそう。パーソナライズもしつつ（Suggestions)、使いたいものにアクセスして価値に到達しやすくするのを意識した気がするな〜
                      <br />
                      ホーム
                      <br />
                      配車 / Eatsが見える位置で着替えられる
                      <br />
                      上部メインは配車ですぐに呼び出せられる
                      <br />
                      Suggesitionsで他サービスにもすぐにアクセス
                      <br />
                      Servicesタブ
                      <br />
                      能動的に「あれやりたいんだけど」な人が開く場所
                      <br />
                      ここで使うものがSuggestionsに並ぶことになるのだろう
                      <br />
                      配車関係のグループと、Eats関係のグループで大きく分かれてる
                      <br />
                      3Dアイコン
                      <br />
                    </span>
                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">
                      狙い
                      <br />
                    </span>
                    <span className="text-black text-xl font-normal font-['Hind'] leading-10">
                      いろんなサービスをすでに使っているデータがあって、アクセスしやすくすることでサービスエンゲージが高まるユーザーが実在している場合は刺さりそう
                      <br />
                      マイナスとしては主要な使い方ができなくなる恐れがあること
                      <br />
                      配車したいだけなのに、色々表示されてうざい。など。
                      <br />
                      この辺はサービス機能の認知とか、他要因も絡まりそう
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
