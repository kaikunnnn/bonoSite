// pages/series.js
import React from "react";
import HeadingSeries from "./HeadingSeries";

const About = () => {
  return (
    <>
      <div className="About">

       <HeadingSeries/>

        <div>
          <p className="UiUx self-stretch text-black text-opacity-70 text-lg font-medium font-['Noto Sans'] leading-9 tracking-wide">
            識別：ユーザーが操作するためのオブジェクトを識別します。これらは文書、画像、ビデオ、製品、サービスなど、ユーザーが扱う可能性のあるあらゆる「もの」を含みます。
            分類：オブジェクトを関連性や属性に基づいて分類します。これにより、ユーザーが必要なオブジェクトを見つけやすくなります。
            階層化：オブジェクトを階層構造に配置します。これにより、大きなカテゴリーから小さなサブカテゴリーまで、一連のオブジェクトを理解しやすくなります。
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
