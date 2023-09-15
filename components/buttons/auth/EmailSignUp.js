import React, { useEffect, useState } from "react";
import "firebase/auth";
import { auth, db, provider } from "../../../firebase";
import { useRouter } from "next/router";

function EmailSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  // パスワードのバリデーション
  function isValidPassword(password) {
    // 8文字以上かどうかを確認
    if (password.length < 8) {
      return false;
    }
  
    // 大文字と小文字が含まれているかを確認
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
  
    if (!hasUpperCase || !hasLowerCase) {
      return false;
    }
  
    return true;
  }

  // パスワードのエラーハンドル
  function getPasswordValidationErrors(password) {
    const errors = [];
  
    if (password.length < 8) {
      errors.push("パスワードは8文字以上でなければなりません。");
    }
  
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
  
    if (!hasUpperCase || !hasLowerCase) {
      errors.push("パスワードは大文字と小文字の組み合わせが必要です。");
    }
  
    return errors;
  }
  

  const handleSignUp = (e) => {
    e.preventDefault();

    // 全てのエラーメッセージをクリア
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    // メールアドレスの空チェック
    if (email.trim() === "") {
      setEmailError("メールアドレスが必要です。");
      return; // ここで処理を終了
    } 

    // パスワードの空チェック
    if (password.trim() === "") {
      setPasswordError("パスワードが必要です。");
      return; // ここで処理を終了
    } 

    // パスワードのバリデーション
    const passwordValidationErrors = getPasswordValidationErrors(password);
        if (passwordValidationErrors.length > 0) {
            setPasswordError(passwordValidationErrors.join(" "));
            return;
    }

    // 新規登録処理
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        // 他の処理（リダイレクト）
        router.push(`/`);
      })
      .catch((error) => {
        console.log("Error Code:", error.code); // エラーコードを出力
        console.log("Error Message:", error.message); // エラーメッセージを出力
        setGeneralError("新規登録に失敗しました。再度お試しください。");
      });
  };
  return (
    <>
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
              className={`Input self-stretch p-4 bg-white rounded-lg border border-solid ${
                error ? "border-red-500" : "border-neutral-200"
              } justify-start items-center gap-2.5 inline-flex leading-tight focus:outline-none focus:shadow-outline`}
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
              className={`Input self-stretch p-4 bg-white rounded-lg border border-solid ${
                error ? "border-red-500" : "border-neutral-200"
              } justify-start items-center gap-2.5 inline-flex leading-tight focus:outline-none focus:shadow-outline`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-xs text-red-500 leading-normal tracking-wide">
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
          </div>
        </div>
        <div className="text-xs text-red-500 leading-normal tracking-wide">
          {generalError && <p className="error-message">{generalError}</p>}
        </div>
        {/* Button */}
        <div
          onClick={handleSignUp}
          className="Button cursor-pointer self-stretch p-4 bg-blue-500 rounded-lg border-1 border-neutral-200 justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-white text-sm font-bold leading-snug tracking-wide">
            新規登録
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailSignUp;
