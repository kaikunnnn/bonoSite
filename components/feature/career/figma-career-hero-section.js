import React from "react";

function FigmaCareerHeroSection() {
  return (
    <>
      <div className="w-[959px] h-[516px] flex-col justify-center items-start gap-10 inline-flex">
        <div className="h-[205px] flex-col justify-start items-start gap-[15px] flex">
          <div className="text-[#171823] text-[52px] font-bold font-['Noto Sans JP'] leading-[83.20px] tracking-wide">
            🗺️
          </div>
          <div className="self-stretch text-[#1a1b23] text-[32px] font-bold font-['Noto Sans JP'] leading-[47.68px] tracking-wide">
            UIUXデザイナー転職攻略ガイド
          </div>
          <div className="text-[#171823] text-sm font-bold font-['Noto Sans JP'] leading-snug tracking-wide">
            未経験からUIUXデザイナーに
            <br />
            なりたいひとの不安をとりのぞく
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          <img
            className="w-6 h-6 rounded-full"
            src="https://via.placeholder.com/24x24"
          />
          <div className="flex-col justify-center items-start inline-flex">
            <div className="text-black text-[8px] font-normal font-['Noto Sans JP'] leading-[10.56px]">
              Written by
            </div>
            <div className="text-black text-[10px] font-normal font-['Noto Sans JP'] leading-[13.20px]">
              カイクンって人が書いてるよ
            </div>
          </div>
        </div>
        <div className="h-[207px] flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="h-[22px] p-2 justify-start items-center gap-2.5 flex">
              <div className="grow shrink basis-0 h-1.5 bg-[#d9d9d9] rounded-[40px]" />
            </div>
            <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
              カテゴリ
            </div>
          </div>
          <div className="h-[177px] flex-col justify-start items-start flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[59px] px-2.5 py-5 border-b border-black/20 justify-start items-center gap-2.5 flex">
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  1
                </div>
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  未経験からUIUXデザイナーになれるの？
                </div>
              </div>
              <div className="grow shrink basis-0 h-[59px] px-2.5 py-5 border-b border-black/20 justify-start items-center gap-2.5 flex">
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  2
                </div>
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  身につけるスキル
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[59px] px-2.5 py-5 border-b border-black/20 justify-start items-center gap-2.5 flex">
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  4
                </div>
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  ポートフォリオ作成
                </div>
              </div>
              <div className="grow shrink basis-0 h-[59px] px-2.5 py-5 border-b border-black/20 justify-start items-center gap-2.5 flex">
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  4
                </div>
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  採用と面接
                </div>
              </div>
            </div>
            <div className="w-[468px] justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[59px] px-2.5 py-5 border-b border-black/20 justify-start items-center gap-2.5 flex">
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  5
                </div>
                <div className="text-black text-xs font-bold font-['Noto Sans JP'] leading-tight tracking-wide">
                  未経験で転職した人のインタビュー
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FigmaCareerHeroSection;
