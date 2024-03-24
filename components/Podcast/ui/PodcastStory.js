import Link from "next/link";
import React from "react";
import AudioPlayer from "./AudioPlayer";

const PodCastStory = ({ link, title, timestamp, description, audioSrc }) => {
  const textStrokeStyle = {
    WebkitTextStroke: "0.75px black", // 枠線の太さと色
    fontFamily: "Hind",
    color: "white", // 文字の中身を透明
  };
  return (
    <Link href={`/podcast/${link}`} className="hover:opacity-70">
      <div className="PodcastEpisodeItem w-full mg:p-16 p-8 bg-white border border-neutral-900 border-opacity-90 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-self-end items-center gap-3 inline-flex flex-col ">
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
            <div className="md:w-24 md:h-24 w-16 h-16 m-auto justify-start items-start gap-1.5 flex">
              <img
                className="grow shrink basis-0 self-stretch shadow"
                src="https://via.placeholder.com/96x96"
                alt="Podcast Thumbnail"
              />
            </div>
            <h1 className="self-stretch text-center text-neutral-900 md:text-2xl text-lg font-bold leading-[160%] tracking-wide">
              {title}
            </h1>
            <p
              className="text-white w-full text-center md:text-md text-xs -mt-2 font-bold leading-snug tracking-wide"
              style={textStrokeStyle}
            >
              キャリア
            </p>
            {/* <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <span className="text-black text-sm font-normal font-['Noto Sans'] leading-snug tracking-wide">
                34分56秒
                {timestamp}
              </span>
            </div> */}
          </div>
        </div>
        <AudioPlayer src={audioSrc} />
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-neutral-700 text-opacity-80 text-base font-normal leading-relaxed tracking-wide">
            {description}
            今回は「リーダーへのシステム思考のすすめ」をテーマに、代表の梅本@dubhunter
            と取締役の神田が話す回です。システム思考ってなんなの？基本的な定義から、組織やチームなど複雑に絡み合うシステムを、どのようにマネジメントしていくのかなど、事例を交えながら紹介しています。組織のマネージャーや、管理職を目指す方はぜひ聴いてください。
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PodCastStory;
