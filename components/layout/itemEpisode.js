import Link from "next/link";
import React from "react";

const itemEpisode = (props) => {
  return (
    <>
    <div className="Itemepisode w-96 h-80 px-2.5 py-6 border-b border-neutral-200 flex-col justify-start items-start gap-3 inline-flex">
        <div className="Wrapper self-stretch justify-start items-center gap-5 inline-flex">
          <div className="Rightblock w-40 h-40 justify-start items-start gap-2.5 flex">
            <img
              className="Rectangle1 grow shrink basis-0 self-stretch rounded-2xl shadow"
              src="https://via.placeholder.com/160x160"
            />
          </div>
          <div className="Lefttextblock grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className=" self-stretch text-gray-900 text-xl font-bold leading-7 tracking-wide">
              セブンカフェとファミマのカフェモカの違い
            </div>
            <div className="Frame10 self-stretch justify-start items-start gap-2 inline-flex">
              <div className="1212 text-black text-sm font-normal leading-snug tracking-wide">
                2023.12.12
              </div>
              <div className=" text-black text-sm font-normal leading-snug tracking-wide">
                ・
              </div>
              <div className="56 text-black text-sm font-normal leading-snug tracking-wide">
                34分56秒
              </div>
            </div>
          </div>
        </div>
        <div className="Frame30 self-stretch h-24 flex-col justify-start items-start gap-2 flex">
          <div className="Dubhunter self-stretch text-gray-700 text-sm font-normal leading-snug tracking-wide">
            今回は「リーダーへのシステム思考のすすめ」をテーマに、代表の梅本@dubhunter
            と取締役の神田が話す回です。システム思考ってなんなの？基本的な定義から、組織やチームなど複雑に絡み合うシステムを、どのようにマネジメントしていくのかなど、事例を交えながら紹介しています。組織のマネージャーや、管理職を目指す方はぜひ聴いてください。
          </div>
          <div className=" text-blue-500 text-sm font-normal leading-snug tracking-wide">
            詳細へ
          </div>
        </div>
      </div>
    </>
  );
};


export default itemEpisode;
