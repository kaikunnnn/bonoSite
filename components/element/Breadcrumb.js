import Link from "next/link";
import React from "react";

const Breadcrumb = (props) => {
  return (
    <>
      <div className="Breadcrumb w-52 h-11 py-3 justify-start items-start gap-2.5 inline-flex">
        <div className=" text-zinc-500 text-sm font-normal leading-snug tracking-wide">
          トップ
        </div>
        <div className=" text-zinc-500 text-sm font-normal leading-snug tracking-wide">
          /
        </div>
        <div className=" text-zinc-500 text-sm font-normal leading-snug tracking-wide">
          エピソードタイトル
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
