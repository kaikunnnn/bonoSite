"use client";

import Image from "next/image";
import { Dongle, Noto_Sans_JP } from "next/font/google";

// Dongleフォントの設定
const dongle = Dongle({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dongle",
});

// Noto Sans JPフォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

// カテゴリーリストの定義
const categories = [
  { id: 1, title: "未経験からUIUXデザイナーになれるの？" },
  { id: 2, title: "身につけるスキル" },
  { id: 4, title: "ポートフォリオ作成" },
  { id: 5, title: "未経験で転職した人のインタビュー" },
  { id: 6, title: "採用と面接" },
];

// アニメーションのバリエーション定義
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// 子要素を順番にアニメーションさせるコンテナのバリエーション
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 子要素のアニメーション間隔
      delayChildren: 0.3, // 最初の子要素のディレイ
    },
  },
};

// アイコンのアニメーション
const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.2,
    },
  },
};

export default function HeroSection() {
  return (
    <div className="md:max-w-5xl mx-auto px-4 py-12 md:py-24 flex flex-col justify-start items-center relative w-full z-10">
      <div className="w-full md:w-7/12 mx-auto">
        <div className="CopyArea flex-col justify-start items-center inline-flex">
          <div className="flex-col justify-center items-center gap-6 flex">
            <div className="text-center text-orange-500 text-[88px] font-bold font-dongle leading-[120px] tracking-[4px]">
              CAREER
            </div>
            <div className="text-center text-orange-500 text-[15px] font-bold font-noto-sans leading-snug tracking-[4px]">
              未経験からの
            </div>
            <div className="text-center text-orange-500 text-[88px] font-bold font-dongle leading-[120px] tracking-[4px]">
              UI/UX
            </div>
            <div className="text-center text-orange-500 text-[15px] font-bold font-noto-sans leading-snug tracking-[4px]">
              UI/UXデザイナー
            </div>
            <div className="text-center text-orange-500 text-[88px] font-bold font-dongle leading-[120px] tracking-[4px]">
              GUIDE
            </div>
            <div className="text-center text-orange-500 text-[15px] font-bold font-noto-sans leading-snug tracking-[4px]">
              転職ガイド
            </div>
          </div>
        </div>
        <div className="Decoration w-11/12 h-auto gap-auto justify-between inline-flex items-end">
          <div className="py-3 pt-4 px-5 origin-top-left -rotate-6 bg-white rounded-full border border-black/20 justify-between items-center gap-2.5 flex h-fit w-auto">
            <div className="text-[#131212] text-sm font-bold leading-relaxed tracking-wide">
              &ldquo;人に寄り添うインターネットの
              <br />
              ものづくりをはじめよう&rdquo;
            </div>
            <div className="w-12 h-12 flex items-center justify-center absolute -top-8 left-4">
              <Image
                className="h-auto border border-black/20 rounded-full "
                src="/career/beginner/kaikun-icon.png"
                alt="カイクンのアイコン"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="relative z-10">
            <Image
              className="h-1/2 z-10 "
              src="/career/beginner/bokennosyo.png"
              alt="冒険の書のイメージ"
              width={100}
              height={130}
            />
            <Image
              className="absolute -z-10 -bottom-5 left-4"
              src="/sun.svg"
              alt="太陽のイメージ"
              width={120}
              height={120}
            />
          </div>

          <div className="w-20 h-20 bg-gradient-to-bl from-[#f2bbe0] to-[#fccbc0] rounded-full border-4 blur-[85px] absolute top-1/2 -translate-y-1/2 right-0 -z-10" />
        </div>
        {/* Table of Contents */}
        <div className="TableOfCoontens w-full px-6 py-6 bg-white rounded-[40px] border border-black flex-col justify-start items-start gap-6 inline-flex z-10">
          <div className="self-stretch justify-center items-center gap-3 inline-flex">
            <Image
              className="w-[22px] h-[22px]"
              src="/sun.svg"
              alt="太陽アイコン"
              width={20}
              height={20}
            />
            <div className="text-black text-base font-normal font-['DotGothic16'] leading-relaxed tracking-wide">
              気になるトピックはあるかな？
            </div>
          </div>
          <div className="self-stretch h-[69px] flex-col justify-start items-start flex">
            <div className="self-stretch px-2.5 py-5 border-b border-black/20 justify-between items-center inline-flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="text-black text-xs font-medium font-['Noto Sans JP'] leading-tight tracking-wide">
                  ( 1 )
                </div>
                <div className="text-black text-lg font-medium font-['Noto Sans JP'] leading-[28.80px] tracking-wide">
                  未経験からなれるの？
                </div>
              </div>
              <div data-svg-wrapper>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="1"
                    width="23"
                    height="23"
                    rx="11.5"
                    stroke="black"
                    stroke-dasharray="2 2"
                  />
                  <path
                    d="M12.6255 11.8207C12.636 11.9512 12.6603 12.0817 12.6551 12.2122C12.6394 12.7048 12.6151 13.199 12.5977 13.6915C12.5959 13.7159 12.6186 13.742 12.629 13.7681L12.6307 13.7664C12.6186 14.064 12.5959 14.3616 12.5942 14.6609C12.5907 15.3518 12.5733 16.041 12.4323 16.7267C12.4097 16.8346 12.4045 17.0173 12.0112 17.0034C11.6022 16.9895 11.3655 16.8624 11.3847 16.6745C11.4316 16.222 11.5378 15.7678 11.4769 15.3135C11.3881 14.6505 11.4595 13.9909 11.4525 13.3313C11.4473 12.7378 11.4821 12.1461 11.4734 11.5526C11.4647 10.9957 11.3881 10.4371 11.4055 9.88017C11.4195 9.39983 11.5326 8.92124 11.5796 8.44264C11.59 8.32952 11.6144 8.20944 11.4665 8.0998L11.4612 8.10154C11.644 7.9745 11.3116 7.81439 11.5796 7.69431C11.5883 7.6508 11.6144 7.60555 11.6022 7.56204C11.5395 7.36364 11.684 7.31491 12.1313 7.38975C12.2305 7.40715 12.3593 7.39321 12.4271 7.44194L12.4202 7.44543L12.4271 7.44369C12.7282 7.58465 12.5785 7.74652 12.582 7.89619C12.5959 8.63062 12.5838 9.36503 12.5803 10.0995C12.5785 10.5502 12.5507 11.001 12.5942 11.4517C12.6064 11.5753 12.6621 11.6988 12.6238 11.8241L12.6255 11.8207Z"
                    fill="#4633FF"
                  />
                  <path
                    d="M12.6027 17.3411C12.4844 17.4769 12.3591 17.5813 12.192 17.6213L12.091 17.6387C11.9292 17.6561 11.7691 17.6265 11.6368 17.5656C11.5028 17.5047 11.3827 17.4125 11.2679 17.2802C11.1513 17.1479 11.059 16.9669 10.9598 16.8034L10.7684 16.4762C10.7579 16.4588 10.7283 16.4518 10.7075 16.4396L10.7057 16.4431C10.5804 16.2256 10.4638 16.0028 10.3298 15.7905C10.02 15.2997 9.72069 14.802 9.52925 14.2416C9.49966 14.1545 9.42135 14.0205 9.76071 13.8204C10.114 13.6116 10.3716 13.5768 10.4394 13.7195C10.6048 14.0658 10.7231 14.4434 10.979 14.7323C11.1669 14.9429 11.3218 15.1744 11.4663 15.4128L11.6803 15.7696L11.7882 15.9471L11.8439 16.0359L11.8578 16.0585C11.8613 16.0654 11.8613 16.062 11.8631 16.0654L11.87 16.0724C11.8892 16.0933 11.9048 16.1142 11.9187 16.1368C11.9327 16.1577 11.9553 16.182 11.9849 16.1751C12.0214 16.1629 12.0319 16.1177 12.044 16.0846C12.0475 16.0741 12.0493 16.0637 12.0493 16.0533C12.0493 16.0481 12.0493 16.0446 12.051 16.0359L12.0876 15.9558L12.2303 15.6321C12.3242 15.4163 12.4217 15.2022 12.54 15.0004C12.7437 14.6505 13.0326 14.3495 13.264 14.0171C13.318 13.9387 13.3876 13.8604 13.3023 13.709L13.2971 13.7073C13.5077 13.7003 13.2797 13.4236 13.5634 13.4619C13.5877 13.434 13.6295 13.4132 13.6347 13.3749C13.6591 13.1974 13.8035 13.2304 14.1673 13.5002C14.2473 13.5593 14.3674 13.6116 14.4057 13.6794C14.6145 13.9283 14.4196 13.977 14.3622 14.0884C14.0837 14.6401 13.7809 15.1779 13.4868 15.7226L13.2101 16.2186C13.1648 16.3021 13.1196 16.3857 13.0796 16.4709L12.8968 16.8469C12.8168 17.0209 12.7471 17.2593 12.6044 17.3411L12.6027 17.3411Z"
                    fill="#4633FF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-[#4f4f4f] text-[10px] font-medium font-['Noto Sans JP'] leading-none tracking-wide">
              Written by : カイクン
            </div>
            <div className="text-[#4f4f4f] text-[10px] font-medium font-['Noto Sans JP'] underline leading-none tracking-wide">
              (誰?)
            </div>
          </div>
        </div>
      </div>

      <div className="inset-0 w-screen inline-flex justify-between h-full absolute top-1/2 -translate-y-1/2 left-0 -z-10">
        <div className="w-[8px] mt-auto my-auto mx-2 text-green-950 text-[8px] font-semibold leading-[12.80px] tracking-[7px]">
          #誰だってものづくりを始めたい
        </div>
        <div className="w-[8px] mt-auto my-auto mx-2 text-green-950 text-[8px] font-semibold leading-[12.80px] tracking-[7px]">
          #創造性の夜明けや
        </div>
      </div>
    </div>
  );
}
