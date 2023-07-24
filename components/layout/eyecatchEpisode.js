import Link from "next/link";
import React from "react";

const eyecatchEpisode = (props) => {
  return (
    <>
      <div className="Eyecatchepisode w-96 h-64 flex-col justify-center items-center gap-4 inline-flex">
        <div className="Episodeeyecatch self-stretch h-64 flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame12 self-stretch justify-start items-start gap-4 inline-flex">
            <img
              className="Frame9 w-48 h-48 relative rounded-2xl shadow"
              src="https://via.placeholder.com/200x200"
            />
            <div className="Frame11 grow shrink basis-0 py-3 flex-col justify-start items-start gap-6 inline-flex">
              <div className="Frame28 self-stretch h-24 flex-col justify-start items-start gap-4 flex">
                <div className=" self-stretch text-gray-900 text-3xl font-bold leading-10 tracking-wide">
                  セブンカフェとファミマのカフェモカの違い
                </div>
                <div className="Frame10 justify-start items-start gap-2 inline-flex">
                  <div className="1212 text-black text-base font-normal leading-relaxed tracking-wide">
                    2023.12.12
                  </div>
                  <div className=" text-black text-base font-normal leading-relaxed tracking-wide">
                    ・
                  </div>
                  <div className="56 text-black text-base font-normal leading-relaxed tracking-wide">
                    34分56秒
                  </div>
                </div>
              </div>
              <img
                className="Image6 self-stretch h-14 rounded-full"
                src="https://via.placeholder.com/744x53"
              />
            </div>
          </div>
          <div className="Dubhunter self-stretch h-14 text-gray-700 text-base font-normal leading-relaxed tracking-wide">
            今回は「リーダーへのシステム思考のすすめ」をテーマに、代表の梅本@dubhunter
            と取締役の神田が話す回です。システム思考ってなんなの？基本的な定義から、組織やチームなど複雑に絡み合うシステムを、どのようにマネジメントしていくのかなど、事例を交えながら紹介しています。組織のマネージャーや、管理職を目指す方はぜひ聴いてください。
          </div>
        </div>
      </div>
    </>
  );
};

export default eyecatchEpisode;
