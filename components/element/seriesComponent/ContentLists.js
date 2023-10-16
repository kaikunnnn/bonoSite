// pages/series.js
import React from 'react';
import HeadingSeries from './HeadingSeries';

const ContentLists = () => {
  return (
   <>
   <div className="Contentlists w-96 h-96 flex-col justify-start items-start gap-12 inline-flex">
        <HeadingSeries/>
        <div className="Contentsection flex-col justify-start items-start gap-12 flex">
            <div className="ContentSectiontitle flex-col justify-start items-start gap-4 flex">
            <div className=" self-stretch text-black text-xl font-bold font-['Noto Sans JP'] leading-7 tracking-wide">1.要件定義書はなぜ必要か？</div>
            <div className="UiUx self-stretch text-black text-opacity-70 text-lg font-medium font-['Noto Sans'] leading-9 tracking-wide">未経験からUI/UXデザイナーになるためには、デザインの基本原則やツールの習得、ユーザーリサーチやインタラクションデザインの学習、そして実践を通じてスキルを磨き、ポートフォリオ作成やネットワーキングを行うことが重要です</div>
            </div>
            <div className="ContentItem self-stretch h-32 flex-col justify-start items-start gap-7 flex">
            <div className="Frame625166 self-stretch justify-between items-center inline-flex">
                <div className="Frame625165 justify-start items-center gap-16 flex">
                <div className="TableitemHead justify-start items-center gap-8 flex">
                    <div className="Frame625526 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="Rectangle131 w-56 h-32 bg-neutral-200 bg-opacity-90 rounded-md" />
                    <div className="Frame625528 bg-blue-500 rounded-full justify-start items-center gap-1.5 inline-flex">
                        <div className="Frame625527 flex-col justify-start items-center gap-7 inline-flex">
                        <div className="PlayArrowFill0Wght400Grad0Opsz481 w-6 h-6 relative" />
                        </div>
                    </div>
                    </div>
                    <div className="Frame625523 flex-col justify-center items-start gap-3 inline-flex">
                    <div className="Ui w-96 text-black text-base font-bold font-['Noto Sans'] leading-relaxed tracking-wide">そもそも「UIの要件定義書」とはなんなのか？</div>
                    <div className="Frame625524 justify-start items-center gap-8 inline-flex">
                        <div className="Free text-black text-opacity-70 text-sm font-bold font-['Noto Sans'] leading-snug tracking-wide">FREE</div>
                        <div className="32 text-black text-opacity-70 text-sm font-normal font-['Noto Sans'] leading-snug tracking-wide">12:32</div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="ButtonSecondTinyIcon p-3.5 bg-zinc-100 rounded-full justify-start items-center flex">
                <div className="IconArrowLongarrow w-7 h-7 p-0.5 rounded-3xl justify-center items-center gap-0.5 flex">
                    <div className="Frame18 w-6 h-6 origin-top-left -rotate-90 justify-center items-center flex">
                    <div className="NorthEast w-4 h-4 relative origin-top-left rotate-[135deg] flex-col justify-start items-start flex" />
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="Line20 self-stretch h-px border border-white border-opacity-20"></div>
        </div>
        </div>
   </> 
  );
};

export default ContentLists;