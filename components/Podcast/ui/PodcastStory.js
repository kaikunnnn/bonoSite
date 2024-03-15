import Link from 'next/link';
import React from 'react';
import AudioPlayer from './AudioPlayer';

const PodCastStory = () => {
  const textStrokeStyle = {
    WebkitTextStroke: "0.75px black", // 枠線の太さと色
    fontFamily:"Hind",
    color: "white", // 文字の中身を透明
  };
  return (
    <Link href="/podcast/detail" className='hover:opacity-70'>
      <div className="PodcastEpisodeItem w-full p-16 bg-white border border-neutral-900 border-opacity-90 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-start items-center gap-5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-white text-md font-bold font-['Noto Sans'] leading-snug tracking-wide" style={textStrokeStyle}>キャリア</div>
            <div className="self-stretch text-neutral-900 text-2xl font-bold font-['Noto Sans JP'] leading-[38.40px] tracking-wide">セブンカフェとファミマのカフェモカの違い</div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="text-black text-sm font-normal font-['Noto Sans'] leading-snug tracking-wide">34分56秒</div>
            </div>
          </div>
          <div className="w-24 h-24 justify-start items-start gap-1.5 flex">
            <img className="grow shrink basis-0 self-stretch shadow" src="https://via.placeholder.com/96x96" alt="Podcast Thumbnail" />
          </div>
        </div>
        <AudioPlayer />
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-neutral-700 text-opacity-80 text-base font-normal leading-relaxed tracking-wide">
            今回は「リーダーへのシステム思考のすすめ」をテーマに、代表の梅本@dubhunter と取締役の神田が話す回です。システム思考ってなんなの？基本的な定義から、組織やチームなど複雑に絡み合うシステムを、どのようにマネジメントしていくのかなど、事例を交えながら紹介しています。組織のマネージャーや、管理職を目指す方はぜひ聴いてください。
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PodCastStory;