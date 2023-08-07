import Image from "next/image";
import Link from "next/link";
import React from "react";

const EyecatchPodcast = (props) => {
  return (
    <>
      <div className="EyecatchPodcast w-7/12 m-auto py-12 justify-center items-end gap-8 inline-flex">
         <Image src="/bono/podcastEyecatch.jpg" width={260} height={260} className="Blockimage w-64 h-64 relative rounded-2xl shadow-2xl" alt="BONOラジ"/>
        <div className="Blocktitle grow shrink basis-0 py-3 flex-col justify-start items-start gap-1 inline-flex">
          <div className="Title text-gray-900 text-4xl font-bold leading-10 tracking-wide">
            BONOラジ
          </div>
          <div className="Titmes justify-start items-start gap-2 inline-flex">
            <div className=" text-black text-base font-normal leading-relaxed tracking-wide">
              15
            </div>
            <div className=" text-black text-base font-normal leading-relaxed tracking-wide">
              エピソード
            </div>
          </div>
          <div className="Bono self-stretch h-14">
            <span className="text-gray-700 text-base font-normal leading-relaxed tracking-wide">
              BONOの専用ラジオコンテンツです。リクエストの希望は以下のリンクからお願いしま〜す→{" "}
            </span>
            <span className="text-gray-700 text-base font-normal underline leading-relaxed tracking-wide">
              リクエストする
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EyecatchPodcast;
