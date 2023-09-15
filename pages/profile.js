import React from "react";
import GoogleSignInButton from "../components/buttons/GoogleSignInButton";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import UserInfo from "../components/element/UserInfo";
import SignOutButton from "../components/buttons/SignOutButton";

// stripe firebase account auth
import { createCheckoutSession } from '../stripe/createCheckoutSession';
import usePremiumStatus from "../stripe/usePremiumStatus";
import Header from "@/components/layout/Header";
import List from "@/components/element/object/list";


// Product ID
const product_standard_onemonth = "price_1LzDKnKUVUnt8Gtyly1TOV95"
const product_growth_onemonth = "price_1LzDOvKUVUnt8GtyqgCtgDMQ"

function Profile() {
  // 現在ログインしているユーザーの情報を取得
    const [user] = useAuthState(auth)
    const userSubscriptionPlan = usePremiumStatus(user);

    return(
      <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <Header />
        <div className="Profile m-auto w-8/12 md:w-4/12 grid text-center lg:mb-0  lg:text-left">
          {user ? (
              <>
                <UserInfo />
                <div className="mt-8"></div>
                {userSubscriptionPlan === null ? (
                  <>
                    <button onClick={async () => await createCheckoutSession(product_standard_onemonth)}>
                      Upgrade to Premium Standard!
                    </button>
                    <button onClick={async () => await createCheckoutSession(product_growth_onemonth)}>
                      Upgrade to Premium Growth!
                    </button>
                  </>
                ) : (
                  userSubscriptionPlan === 'premium_standard' ? (
                    <>
                      <h2>Welcome, Premium Standard user!</h2>
                    </>
                  ) : (
                    <div>
                      <h2>Welcome, Premium Growth user!</h2>
                      <div className="mt-4"></div>
                      <List
                        label="プランの変更"
                        content="ボタン→Change Password"
                        buttonLabel="変更"
                        buttonLink="/"
                      ></List>
                      <div className="mt-8"></div>
                    </div>
                  )
                )}
                <SignOutButton />
              </>
            ) : (
              <>
                <GoogleSignInButton />
              </>
            )}
        </div>
      </main>
        
    )
}

export default Profile