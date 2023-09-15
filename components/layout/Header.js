import Link from "next/link";
import Image from "next/image";
import React from "react";
// firebase auth account
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../../firebase";


const Header = (props) => {
   // 現在ログインしているユーザーの情報を取得
   const [user] = useAuthState(auth)
   
  return (
    <>
      <div className="Header w-full fixed py-6 px-6 justify-between items-center inline-flex">
        <div className="LogoBono w-20 md:w-28 h-auto relative">
          <Link href="/">
            <Image src="/bono/logo.svg" width={88} height={32} alt="BONO" className=""/>
          </Link>
        </div>

        {/* Distribute by user - ユーザーごとに出しわけ */}
        {/* {user ? (
          <>
           <div className="Actionblock  justify-between items-center gap-2.5 flex">
              <Link href="/profile">
                <div className=" text-right text-black text-base font-normal">
                  マイページ
                </div>
              </Link>
            </div>
          </>

        ) : (
          <>
          <div className="Actionblock justify-between items-center gap-2.5 flex">
            <Link href="/authentification/login">
              <span>ログイン</span>
            </Link>
          </div>
        </>
        )} */}
        
      </div>
    </>
  );
};


export default Header;
