"use client";

import React, { useRef, useEffect, useState } from "react";

const interviews = [
  {
    id: 1,
    name: "Boi",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    title: "広報からUI/UXデザイナーへ未経験転職",
    tags: ["未経験からUI/UX職への転職"],
    company: "制作会社",
    url: "https://bo-no.design/interview/boi-story",
  },
  {
    id: 2,
    name: "Tara",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    title: "働きながら独学！上手に時間を持つ勉強法を聞いた",
    tags: ["未経験からUI/UX職への転職"],
    company: "UI/UXデザイン会社",
    url: "https://bo-no.design/interview/tara-story",
  },
  {
    id: 3,
    name: "りんねる",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop",
    title: "広報・PR企業からUI/UXデザイナーに転職した話",
    tags: ["未経験からUI/UX職への転職"],
    company: "制作会社",
    url: "https://bo-no.design/interview/tara-story",
  },
  {
    id: 4,
    name: "Kana",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    title: "子育てしながらUI/UXデザイナーへ未経験転職",
    tags: ["未経験からUI/UX職への転職"],
    company: "UI/UXデザイン会社",
    url: "https://bo-no.design/interview/tara-story",
  },
];

const duplicatedInterviews = [...interviews, ...interviews];

function InterviewCard({ interview }) {
  return (
    <a
      href={interview.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-[400px] md:max-w-[560px] bg-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:bg-slate-50 transition-all duration-300 my-2"
    >
      <div className="p-2 pb-[34px] flex flex-col gap-3">
        <div className="relative w-full aspect-[394/200] rounded-[8.8px] overflow-hidden">
          <img
            src={interview.avatar}
            alt={interview.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 shadow-[1px_1px_8px_rgba(0,0,0,0.06)]" />
        </div>

        <div className="px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h5 className="text-sm">{interview.name}</h5>
            <h3 className="text-lg font-medium text-green-950 leading-normal ">
              {interview.title}
            </h3>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-[10.52px] pb-1 border-b border-black/5">
              <span className="text-sm text-slate-600">成果</span>
              <span className="text-sm text-neutral-500">
                未経験からUI/UX職への転職
              </span>
            </div>
            <div className="flex gap-[10.52px] pb-1 border-b border-black/5">
              <span className="text-sm text-slate-600">就職</span>
              <span className="text-sm text-neutral-500">
                シリーズB SaaSベンチャー
              </span>
            </div>
            <div className="flex gap-[10.52px] pb-1 border-b border-black/5">
              <span className="text-sm text-slate-600">経歴</span>
              <span className="text-sm text-neutral-500">ベンチャー</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function InterviewSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b bg-[#f5f2f1]">
      <div className="container p-0">
        {/* Heading */}
        <div className="max-w-lg  mx-auto flex flex-col justify-start items-center gap-2 relative">
          <img
            className="absolute -top-10 right-2 md:-top-16 md:-right-10 w-24 h-24 md:w-32 md:h-32"
            src="/career/beginner/badge-following.png"
          />
          <img
            className="w-[205px] h-[189px]"
            src="/career/beginner/voice-main-image.png"
          />
          <div className=" flex flex-col justify-center items-center gap-5">
            <div className="w-full text-center text-[#1e1e1e] text-2xl sm:text-[26px] font-medium leading-relaxed">
              未経験から
              <br />
              UIUXデザイナーになった人の
              <br />
              声を除いてみよう👀
            </div>
            <div className="w-8/12 md:w-full max-w-sm md:max-w-none text-center text-[#1e1e1e] text-sm md:text-base md:leading-8 font-medium font-['Noto Sans JP'] leading-7">
              "デザインはオリジナリティを発揮するもの。と思い込んではいけません。
              <br />
              まずは世の中の良いものに目を向けて"定番"の表現を吸収していくのです"
            </div>
            <div className="px-6 py-4 bg-white rounded-full border-2 border-green-950 justify-center items-center gap-2.5 inline-flex overflow-hidden hover:bg-gray-50 transition-colors">
              <div className="text-green-950 text-sm font-bold leading-snug">
                インタビューを見る
              </div>
            </div>
          </div>
        </div>
        {/* Interview List - Horizontal scroll for all viewport sizes */}
        <div className="mt-12">
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {[...interviews, ...interviews, ...interviews].map(
                (interview, index) => (
                  <div
                    key={`${interview.id}-${index}`}
                    className="flex-none w-[280px] md:w-[410px]"
                  >
                    <InterviewCard interview={interview} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// アニメーションとスクロールバー非表示のスタイルを追加
const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-280px * ${interviews.length}));
    }
  }
  
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
  
  .animate-scroll:hover {
    animation-play-state: paused;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// スタイルをヘッドに追加
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
