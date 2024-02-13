import dayjs from "dayjs";
import React from "react";

const ArticleAbout = ({ article }) => {
  // articleが存在することをチェック
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <div> 

        <div className="m-auto">
          <div className="m-8"></div>
          <div className="m-5"></div>
          <div className="TitleBlock ">
            <h1 className="!leading-normal text-3xl md:text-5xl font-bold ">
              {article.title}
            </h1>
            <div className="m-4"></div>
            <h4 className="text-lg leading-relaxed text-gray-500">
              {article.description}
            </h4>
          </div>
          
          <div className=""></div>
            <time
              dateTime={article._sys.createdAt}
              className="text-center text-gray-500 font-semibold text-base"
            >
              {dayjs(article._sys.createdAt).format("YYYY年MM月DD日")}
            </time>

          <div className="m-12"></div>
          
        

          <div className="m-12"></div>

          <hr className="w-full m-auto border-gray-200" />
          <div className="m-12"></div>

          {/* Article Body */}
          <div className="Article Body
            prose 
            prose-h1:text-3xl
            prose-h2:text-2xl
            prose-lg 
            prose-p:leading-loose
            md:prose-xl 
            m-auto " dangerouslySetInnerHTML={{ __html: article.body }} 
          />

        </div>

      </div>
    </>
  );
};

export default ArticleAbout;
