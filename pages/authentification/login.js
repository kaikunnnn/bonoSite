import Header from "@/components/layout/Header";
import React, { useState } from "react";
import SEO from "@/components/SEO";
import GoogleSignInButton from "@/components/buttons/GoogleSignInButton";
// Memberstack
import { SignInModal } from "@memberstack/react";



const MemberstackTest = () => {

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };
  
  return (
    <main className="min-h-screen flex-col bg-bgColor-secondary ">
      <Header />
      <SEO
        title="ログイン | 荻窪で個人開発する1人デザイナーの日常"
        ogTitle="ログイン | 荻窪で個人開発する1人デザイナーの日常"
      ></SEO>
      <div className="Wrapper w-full justify-start items-start md:inline-flex">
        {/* Left */}
        <div className="Left w-full md:w-1/2 h-max justify-center items-center gap-2.5 inline-flex">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="Left w-96 h-96 justify-center items-center gap-2.5 inline-flex">
              <div className="Wrapper flex-col justify-start items-start gap-10 inline-flex">
                <div className="Title text-black text-3xl font-bold leading-10 tracking-wide">
                  <h2>Memberstackテスト
                    ログイン</h2>
                </div>
                <div className="WrapperLogin self-stretch  flex-col justify-start items-start gap-6 flex">
                  <form
                  data-ms-form="login" 
                  className="BlockFormlogin self-stretch flex-col justify-start items-start gap-5 flex">
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
                          data-ms-member="email"
                          className={`Input self-stretch p-4 bg-white rounded-lg border border-solid justify-start items-center gap-2.5 inline-flex leading-tight focus:outline-none focus:shadow-outline`}
                          required
                        />
                        <p className="text-xs text-red-500 leading-normal tracking-wide">
                          {/* エラー時のメッセージを表示　{emailError && <div className="error-message">{emailError}</div>} */}
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
                          data-ms-member="password"
                          className={`Input self-stretch p-4 bg-white rounded-lg border border-solid  justify-start items-center gap-2.5 inline-flex leading-tight focus:outline-none focus:shadow-outline`}
                          required
                        />
                        <p className="text-xs text-red-500 leading-normal tracking-wide">
                          {/*エラー時の表示 {passwordError && <div className="error-message">{passwordError}</div>} */}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-red-500 leading-normal tracking-wide">
                      {/*エラー {generalError && <div className="error-message">{generalError}</div>} */}
                    </p>
                    {/* Button */}
                    <button type="submit" className="Button cursor-pointer self-stretch p-4 bg-blue-500 rounded-lg border-1 border-neutral-200 justify-center items-center gap-2.5 inline-flex">
                      <div className=" text-white text-sm font-bold leading-snug tracking-wide">
                        ログイン
                      </div>
                    </button>
                  </form>
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
                  {/* Login UI from memberstack */}
                  <button onClick={handleButtonClick} className="Button cursor-pointer self-stretch p-4 bg-blue-500 rounded-lg border-1 border-neutral-200 justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-white text-sm font-bold leading-snug tracking-wide">
                      モーダルを開く
                    </div>
                  </button>
                  {showModal && <SignInModal />}
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

export default MemberstackTest;
