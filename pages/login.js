import Auth from "@/components/element/Auth";
import Header from "@/components/layout/Header";
import React, { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("E-mail:", email);
    console.log("Password:", password);
    // Perform login logic here
  };

  return (
    <main className="min-h-screen flex-col bg-bgColor-secondary ">
      <Header />

      <div className="Wrapper w-full justify-start items-start inline-flex">
        {/* Left */}
        <div className="Left w-1/2 h-max justify-center items-center gap-2.5 inline-flex">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="Left w-96 h-96 justify-center items-center gap-2.5 inline-flex">
              <div className="Wrapper flex-col justify-start items-start gap-10 inline-flex">
                <div className="Title text-black text-3xl font-bold leading-10 tracking-wide">
                  BONOラジをはじめよう
                </div>
                <div className="WrapperLogin self-stretch h-96 flex-col justify-start items-start gap-6 flex">
                  <div className="BlockFormlogin self-stretch h-64 flex-col justify-start items-start gap-5 flex">
                    <div className="BlockInput self-stretch h-48 flex-col justify-start items-start gap-5 flex">
                      {/* form Component */}
                      <div className="FormItem self-stretch h-20 flex-col justify-start items-start gap-2 flex">
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
                          className="Input self-stretch p-4 bg-white rounded-lg border-1 border-solid	 border-neutral-200 justify-start items-center gap-2.5 inline-flex leading-tight focus:outline-none focus:shadow-outline"
                          required
                        />
                      </div>
                      {/* form Component */}
                      <div className="FormItem self-stretch h-20 flex-col justify-start  items-start gap-2 flex">
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
                          className="Input self-stretch p-4 bg-white rounded-lg border-1 border-solid	 border-neutral-200 justify-start items-center gap-2.5 inline-flex leading-tight focus:outline-none focus:shadow-outline"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    {/* Button */}
                    <div className="Button self-stretch p-4 bg-blue-500 rounded-lg border-1 border-neutral-200 justify-center items-center gap-2.5 inline-flex">
                      <div className=" text-white text-sm font-bold leading-snug tracking-wide">
                        ログイン
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
                  <div className="Googlebutton self-stretch p-4 bg-white rounded-lg border border-neutral-200 justify-start items-center gap-2.5 inline-flex">
                    <Auth />
                    <img
                      className="Image7 w-5 h-5"
                      src="https://via.placeholder.com/20x20"
                    />
                    <div className="Google grow shrink basis-0 text-center text-zinc-950 text-sm font-bold leading-snug tracking-wide">
                      Googleでログイン
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Firebase Login/SignIn

              <h1 className="text-3xl font-bold mb-8">Login Page</h1>
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Login
                  </button>
                </div>
              </form> */}
          </div>
        </div>

        <div className="Right  w-1/2 h-screen relative bg-gradient-to-tl from-indigo-300 via-slate-200 to-amber-100"></div>
      </div>
    </main>
  );
};

export default LoginPage;
