import Link from "next/link";
import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="Header w-full h-16 px-6 py-5 justify-between items-center gap-96 inline-flex">
        <div className="LogoBono w-28 h-8 relative">
          <div>BONO</div>
        </div>
        <div className="Actionblock h-5 justify-between items-center gap-2.5 flex">
          <div className=" text-right text-black text-base font-normal">
            マイページ
          </div>
          <Link href="/signup">
            <span>新規登録</span>
          </Link>
          <Link href="/login">
            <span>ログイン</span>
          </Link>
        </div>
      </div>
    </>
  );
};


export default Header;
