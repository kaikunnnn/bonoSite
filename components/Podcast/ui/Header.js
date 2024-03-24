import Image from "next/image";
import React from "react";

const HeaderPodcastPage = () => {
  return (
    <li class="Header w-10/12 flex-col justify-start items-center gap-4 inline-flex py-24 pb-16">
      <div class="flex-col justify-start items-center gap-4 flex">
        <div class="self-stretch justify-center items-center gap-[529px] inline-flex relative">
          <div class="flex-col justify-center items-center gap-2 inline-flex">
            <h1 class="text-center text-slate-900 md:text-[80px] text-[64px] font-normal font-dela leading-[88px] tracking-[8px]">
              RADIO
            </h1>
            <h3 class="text-center text-neutral-900 text-base font-black font-['Noto Sans JP'] leading-none tracking-[6.40px]">
              ボノラジ
            </h3>
          </div>
          <div class="absolute top-1/2 right-[-24px] transform -translate-x-1/2 -translate-y-1/2 w-[88px] h-[89.63px]">
            <Image
              className="w-full relative h-[80%] left-[56px] top-[-60px]"
              src="/podcast/bakuhatsu-kikukohasodatu.svg"
              alt="Podcast Image"
              layout="fill"
            />
          </div>
        </div>
        <div class="w-full md:text-center text-left text-black text-opacity-50 md:text-base text-sm font-bold leading-relaxed tracking-wide">
          カイクンが動画作るのは大変なんだけど
          <br />
          なんとなくいい感じのデザイン話をするメンバー限定ポッドキャストです。
          <br />
          作業中にエモーションを注入してクリエイションしてください
        </div>
      </div>
    </li>
  );
};

export default HeaderPodcastPage;
