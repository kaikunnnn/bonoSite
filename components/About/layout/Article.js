import dayjs from "dayjs";
import React from "react";

// firebase auth account
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";


// Product ID
const product_standard_onemonth = "price_1LzDKnKUVUnt8Gtyly1TOV95"
const product_growth_onemonth = "price_1LzDOvKUVUnt8GtyqgCtgDMQ"


const ArticleAbout = ({ article }) => {
  // articleが存在することをチェック
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <div> 
        <div className="m-auto w-10/12">
          <div className="m-8"></div>
          <div className="m-5"></div>
          <div className="TitleBlock md:w-10/12 m-auto ">
            <h1 className="!leading-normal text-4xl md:text-5xl text-center font-bold ">
              {article.title}
            </h1>
            <div className="m-4"></div>
            <h4 className="text-lg text-center leading-relaxed text-gray-500">
              {article.description}
            </h4>
          </div>
          
          <div className="m-4"></div>
          <div className="flex m-auto justify-center gap-2">
            <p  className="text-center text-gray-500 font-semibold text-base">{article.slug} | </p>
            <time
              dateTime={article._sys.createdAt}
              className="text-center text-gray-500 font-semibold text-base"
            >
              {dayjs(article._sys.createdAt).format("YYYY年MM月DD日")}
            </time>
          </div>

          <div className="m-12"></div>
          
        

          <div className="m-12"></div>

          <hr className="w-2/12 m-auto border-gray-400" />
          <div className="m-12"></div>

          {/* Article Body */}
          <div className="Article Body
            prose 
            prose-h1:text-3xl
            prose-lg 
            prose-p:leading-loose
            md:prose-xl 
            m-auto " dangerouslySetInnerHTML={{ __html: article.body }} 
          />

         
          <div className="pt-12 pb-12">
            <hr className="w-full border-gray-300" />
            <p className="text-center pt-12 pb-12 font-medium ">
              😇<br></br>読んでいただきありがとうございました!!
            </p>
            <hr className="w-full border-gray-300" />
          </div>
        </div>

      </div>
    </>
  );
};

export default ArticleAbout;
