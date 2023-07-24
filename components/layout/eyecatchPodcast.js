import Link from "next/link";
import React from "react";

const eyecatchPodcast = (props) => {
  return (
    <>
      <div className="Eyecatchpodcast w-96 h-64 justify-start items-end gap-8 inline-flex">
        <img
          className="Blockimage w-64 h-64 relative rounded-2xl shadow"
          src="https://via.placeholder.com/260x260"
        />
        <div className="Blocktitle grow shrink basis-0 py-3 flex-col justify-start items-start gap-1 inline-flex">
          <div className="Title text-gray-900 text-3xl font-bold leading-10 tracking-wide">
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
            <span style="text-gray-700 text-base font-normal leading-relaxed tracking-wide">
              BONOの専用ラジオコンテンツです。リクエストの希望は以下のリンクからお願いしま〜す→{" "}
            </span>
            <span style="text-gray-700 text-base font-normal underline leading-relaxed tracking-wide">
              リクエストする
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default eyecatchPodcast;
