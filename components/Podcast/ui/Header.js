import Image from 'next/image';
import React from 'react';

const HeaderPodcastPage = () => {
  return (
    <li class="Header flex-col justify-start items-center gap-4 inline-flex">
                <div class="flex-col justify-start items-center gap-4 flex">
                    <div class="self-stretch justify-center items-center gap-[529px] inline-flex relative">
                        <div class="flex-col justify-center items-center gap-2 inline-flex">
                            <h1 class="text-center text-slate-900 text-[88px] font-normal font-['Dela Gothic One'] leading-[88px] tracking-[8px]">RADIO</h1>
                            <h3 class="text-center text-neutral-900 text-base font-black font-['Noto Sans JP'] leading-none tracking-[6.40px]">ボノラジ</h3>
                        </div>
                        <div class="absolute top-1/2 right-[-24px] transform -translate-x-1/2 -translate-y-1/2 w-[88px] h-[89.63px]">
                          <Image className='w-full h-auto relative left-[0.13px] top-[0.38px]' src="/podcast/bakuhatsu-kikukohasodatu.svg" alt="Podcast Image" layout="fill" />
                        </div>
                    </div>
                    <div class="w-full text-center text-black text-opacity-50 text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">カイクンが動画作るのは大変なんだけど<br/>なんとなくいい感じのデザイン話をするメンバー限定ポッドキャストです。<br/>作業中にエモーションを注入してクリエイションしてください</div>
                </div>
              </li>
  );
};

export default HeaderPodcastPage;