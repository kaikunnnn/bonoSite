
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

  const { title, mainText, createdAt,category,emoji } =article.fields;
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
          <audio controls className="w-full">
            <source
              src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
              type="audio/ogg"
            />
            <source src="path_to_your_audio_file.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
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
