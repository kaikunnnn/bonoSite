import GoogleSignInButton from "@/components/buttons/GoogleSignInButton";
import Auth from "@/components/element/Auth";
import Header from "@/components/layout/Header";


import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'; // Next.jsのuseRouterをインポートします
import { useEffect } from "react"; // useEffectも必要です

import React, { useState } from "react";



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
      router.push('/'); // トップページにリダイレクトします
    }
  }, [user]); // ユーザーの認証状態が変更されたときにこの処理が実行されるようにします

  // ログインの関数
const handleLoginLogic = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // 他の処理（リダイレクトなど）
      router.push('/');
    })
    .catch((error) => {
      setGeneralError("ログインに失敗しました。再度お試しください。");
    });
};

  const handleSignUp = (e) => {
    e.preventDefault();

    // メールアドレスとパスワードの空チェック
      if (email.trim() === "") {
        setEmailError("メールアドレスが必要です。");
        return; // ここで処理を終了
      } else {
        setEmailError(""); // エラーをクリア
      }

      if (password.trim() === "") {
        setPasswordError("パスワードが必要です。");
        return; // ここで処理を終了
      } else {
        setPasswordError(""); // エラーをクリア
      }
  
    // 新規登録処理
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        // 他の処理（リダイレクト）
        router.push(`/`)
      })
      .catch((error) => {
        setGeneralError("新規登録に失敗しました。再度お試しください。")
      })
  };

  return (
    <main className="min-h-screen flex-col bg-bgColor-secondary ">
      <Header />

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
                  <div className="BlockFormlogin self-stretch flex-col justify-start items-start gap-5 flex">
                    <div className="BlockInput self-stretch flex-col justify-start items-start gap-5 flex">
                      {/* form Component */}
                      <div className="FormItem self-stretch flex-col justify-start items-start gap-2 flex">
                        <label
                          htmlFor="email"
                          className="Label text-black text-sm font-bold leading-normal tracking-wide"
                        >
                          メールアドレス
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`Input self-stretch p-4 bg-white rounded-lg border border-solid ${error ? 'border-red-500' : 'border-neutral-200'} justify-start items-center gap-2.5 inline-flex leading-tight focus:outline-none focus:shadow-outline`}
                          required
                        />
                        <p className="text-xs text-red-500 leading-normal tracking-wide">
                          {emailError && <div className="error-message">{emailError}</div>}
                        </p>
                        
                      </div>
                      {/* form Component */}
                      <div className="FormItem self-stretch flex-col justify-start  items-start gap-2 flex">
                        <label
                          htmlFor="email"
                          className="Label text-black text-sm font-bold leading-normal tracking-wide"
                        >
                          パスワード
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className={`Input self-stretch p-4 bg-white rounded-lg border border-solid ${error ? 'border-red-500' : 'border-neutral-200'} justify-start items-center gap-2.5 inline-flex leading-tight focus:outline-none focus:shadow-outline`}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <p className="text-xs text-red-500 leading-normal tracking-wide">
                          {passwordError && <div className="error-message">{passwordError}</div>}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-red-500 leading-normal tracking-wide">
                      {generalError && <div className="error-message">{generalError}</div>}
                    </p>
                    {/* Button */}
                    <div onClick={handleSignUp} className="Button cursor-pointer self-stretch p-4 bg-blue-500 rounded-lg border-1 border-neutral-200 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-white text-sm font-bold leading-snug tracking-wide">
                        新規登録
                      </div>
                    </div>
                  </div>
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
