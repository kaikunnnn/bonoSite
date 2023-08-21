
import dayjs from "dayjs";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Blockbonolink from "./BonoLinks/BonoLink";
import { options } from "./richTextOpitons";

const EyecatchEpisode = ({ article }) => {
  // articleが存在することをチェック
  if (!article) {
    return <div>Article not found</div>;
  }

  const { title, mainText, createdAt,category,emoji,audio } =article.fields;
  return (
    <>
      <div> 
        <div className="m-auto w-10/12">
          <div className="m-8"></div>
          <img className="md:w-24 md:h-24 w-16 h-16 text-center m-auto" src={`https:${emoji.fields.file.url}` }></img>
          <div className="m-5"></div>
          <h1 className="!leading-normal text-4xl md:text-5xl text-center font-bold md:w-10/12 m-auto ">
            {title}
          </h1>
          <div className="m-4"></div>
          <div className="flex m-auto justify-center gap-2">
            {/* <p  className="text-center text-gray-500 font-semibold text-base">{category} | </p> */}
            <time
              dateTime={createdAt}
              className="text-gray-600 text-center block"
            >
              {dayjs(createdAt).format("YYYY年MM月DD日")}
            </time>
          </div>

          <div className="m-12"></div>

          {/* Audio Block */}
          {audio ? (
            <div className="Podcastplayer w-full p-4 bg-white rounded-xl shadow-sm border border-gray-900 border-opacity-10 flex-col justify-start items-start gap-4 inline-flex">
            <div className="Detailblock w-full justify-start items-center gap-4 inline-flex">
              <img className="Image1 w-20 h-20 rounded-lg" src="https://via.placeholder.com/88x88" />
              <div className="DivContent w-full grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="Bono2023 text-black text-opacity-70 text-base font-semibold leading-normal">ヘルシーなモチベが生まれる場をデザインしたいBONOの2023年。失敗とやること。</div>
                <div className="Detailinfo justify-start items-start gap-1.5 inline-flex">
                  <div className=" text-pink-500 text-xs font-semibold leading-none">BONOラジオ</div>
                  <div className=" text-zinc-500 text-xs font-bold leading-none">2021.12.20</div>
                </div>
              </div>
            </div>
              <audio controls className="BlockAudio w-full flex-col justify-start items-start gap-2.5 flex">
                  <source
                    src={audio}
                    type="audio/ogg"
                  />
                  <source src="path_to_your_audio_file.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
              </audio>
          </div>
            ) : (
              <></>
          )}

         

          <div className="m-12"></div>

          <hr className="w-2/12 m-auto border-gray-400" />
          <div className="m-12"></div>


          <div>{documentToReactComponents(mainText, options)}</div>
          <div className="pt-12 pb-12">
            <hr className="w-full border-gray-300" />
            <p className="text-center pt-12 pb-12 font-medium ">
              😇<br></br>読んでいただきありがとうございました!!
            </p>
            <hr className="w-full border-gray-300" />
          </div>
        </div>

        <Blockbonolink></Blockbonolink>
      </div>
    </>
  );
};

export default EyecatchEpisode;
