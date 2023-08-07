import Link from "next/link";
import Image from 'next/image'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from "react";
import TitleSection from "../element/TitleSection";



const EyecatchEpisode = ({article}) => {
  // articleが存在することをチェック
  if (!article) {
    return <div>Article not found</div>;
  }

  const {featuredImage,title,timetoFinish,mainText  } = article.fields
  return (
    <>
    
      <div className="EyecatchEpisode w-full  pt-20 mb-12 bg-bgColor-primary ">
        <div className="Episodeeyecatch w-7/12 m-auto py-12 self-stretch  flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame12 self-stretch justify-start items-start gap-8 inline-flex">
            <Image
                 className="Frame9 w-64 h-64 relative rounded-2xl shadow-2xl" 
                src={'https://' + featuredImage.fields.file.url}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
                />
            <div className="Frame11 grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="Frame28 self-stretch flex-col justify-start items-start gap-2 flex">
                <p>Podcast Episode</p>
                <h2 className=" self-stretch text-gray-900 text-3xl font-bold leading-10 tracking-wide">
                  {title} 

                </h2>
                {/* Detail Episode */}
                <div className="Frame10 self-stretch justify-start items-start gap-2 inline-flex">
                  <div className=" text-black text-md font-normal leading-snug tracking-wide">
                    2023.12.12
                  </div>
                  <div className=" text-black text-md font-normal leading-snug tracking-wide">
                    ・
                  </div>
                  <div className=" text-black text-md font-normal leading-snug tracking-wide">
                    {timetoFinish}分
                  </div>
                 
                </div>
                <div className="Dubhunter self-stretch text-gray-700 text-base font-normal leading-relaxed tracking-wide">
                    今回は「リーダーへのシステム思考のすすめ」をテーマに、代表の梅本@dubhunter
                    と取締役の神田が話す回です。システム思考ってなんなの？基本的な定義から、組織やチームなど複雑に絡み合うシステムを、どのようにマネジメントしていくのかなど、事例を交えながら紹介しています。組織のマネージャーや、管理職を目指す方はぜひ聴いてください。
                  </div>
              </div>
              <audio controls className="w-full">
                <source src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg" type="audio/ogg" />
                <source src="path_to_your_audio_file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
        
      </div>
      <div className="Dubhunter w-7/12  m-auto py-12 self-stretch text-gray-700 text-base font-normal leading-relaxed tracking-wide">
          <TitleSection />
          <div className="my-6">
            {documentToReactComponents(mainText)}
          </div>
      </div>
    </>
  );
};

export default EyecatchEpisode;
