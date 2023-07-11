import React from "react";
import style from "./Auth.module.css"
import SignInButton from "./SignInButton";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import UserInfo from "./UserInfo";
import SignOutButton from "./SignOutButton";

// stripe firebase account auth
import { createCheckoutSession } from '../../stripe/createCheckoutSession';
import usePremiumStatus from "../../stripe/usePremiumStatus";


function Auth() {
  // 現在ログインしているユーザーの情報を取得
    const [user] = useAuthState(auth)
    const userIsPremium = usePremiumStatus(user);

    return(
        <div>
          {user?(
            <>
                <UserInfo />
                {!userIsPremium ? (
                  <button onClick={async () => await createCheckoutSession()}>
                     Upgrade to premium!
                   </button>
                ) : (
                  /* ユーザーがプレミアム会員ならプレミアム会員メッセージを表示 */
                  <h2>Have a cookie 🍪 Premium customer!</h2>
                )}
                <SignOutButton />
            </>
          ) : (
            <>
                <h1 className={style.h1}>Login / Sign Up</h1>
                <SignInButton />
            </>
          )}
            
        </div>
        
    )
}

export default Auth