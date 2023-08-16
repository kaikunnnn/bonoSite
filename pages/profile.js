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
        <div className="Profile">
          {user ? (
              <>
                <UserInfo />
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
                    <h2>Welcome, Premium Standard user!</h2>
                  ) : (
                    <h2>Welcome, Premium Growth user!</h2>
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