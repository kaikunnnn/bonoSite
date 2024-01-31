import GoogleSignInButton from "@/components/common/ui/buttons/auth/GoogleSignInButton";
import Header from "@/components/common/layout/Navigation/Header";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router"; // Next.jsのuseRouterをインポートします
import { useEffect } from "react"; // useEffectも必要です

import React, { useState } from "react";
import SEO from "@/components/common/layout/Navigation/SEO";
import EmailSignUp from "@/components/common/ui/form/EmailSignUp";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 他のステート定義
  const [error, setError] = useState(""); // エラーメッセージのステート
  const [emailError, setEmailError] = useState(""); // メールアドレスエラーメッセージのステート
  const [passwordError, setPasswordError] = useState(""); // パスワードエラーメッセージのステート
  const [generalError, setGeneralError] = useState(""); // 一般的なエラーメッセージのステート

  // 現在の認証状態を取得します。
  const [user] = useAuthState(auth);
  const router = useRouter(); // ルーターのインスタンスを取得します

  // ログインしている場合にリダイレクトする処理をuseEffect内に記述します
  useEffect(() => {
    if (user) {
      router.push("/"); // トップページにリダイレクトします
    }
  }, [user]); // ユーザーの認証状態が変更されたときにこの処理が実行されるようにします

  // ログインの関数
  const handleLoginLogic = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // 他の処理（リダイレクトなど）
        router.push("/");
      })
      .catch((error) => {
        setGeneralError("ログインに失敗しました。再度お試しください。");
      });
  };

  

  return (
    <main className="min-h-screen flex-col bg-bgColor-secondary ">
      <Header />
      <SEO
        title="新規登録 | 荻窪で個人開発する1人デザイナーの日常"
        ogTitle="新規登録 | 荻窪で個人開発する1人デザイナーの日常"
      ></SEO>
      <div className="Wrapper w-full justify-start items-start md:inline-flex">
        {/* Left */}
        <div className="Left w-full md:w-1/2 h-max justify-center items-center gap-2.5 inline-flex">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="Left w-96 h-96 justify-center items-center gap-2.5 inline-flex">
              <div className="Wrapper flex-col justify-start items-start gap-10 inline-flex">
                <div className="Title text-black text-3xl font-bold leading-10 tracking-wide">
                  新規登録
                </div>
                <div className="WrapperLogin self-stretch  flex-col justify-start items-start gap-6 flex">
                  <EmailSignUp/>
                  {/* divider */}
                  <div className="BlockDivider self-stretch justify-center items-center gap-2 inline-flex">
                    <div className="Line1 grow shrink basis-0 h-px border border-neutral-300"></div>
                    <div className="Or text-center text-black text-xs font-bold leading-tight tracking-wide">
                      or
                    </div>
                    <div className="Line2 grow shrink basis-0 h-px border border-neutral-300"></div>
                  </div>
                  {/* googlebutton */}
                  <div className="Googlebutton self-stretch justify-start items-center gap-2.5 inline-flex">
                    {/* <Auth /> */}
                    <GoogleSignInButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Right hidden md:block md:w-1/2 h-screen relative bg-gradient-to-tl from-indigo-300 via-slate-200 to-amber-100"></div>
      </div>
    </main>
  );
};

export default SignUp;
