import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="Header w-full fixed py-8 h-16 px-6 justify-between items-center gap-96 inline-flex">
        <div className="LogoBono w-28 h-8 relative">
          <Link href="/">
            <Image src="/bono/logo.svg" width={88} height={32} alt="BONO"/>

          </Link>
        </div>
        <div className="Actionblock h-5 justify-between items-center gap-2.5 flex">
          <div className=" text-right text-black text-base font-normal">
            マイページ
          </div>
          <Link href="/login">
            <span>ログイン</span>
          </Link>
        </div>
      </div>
    </>
  );
};


export default Header;
