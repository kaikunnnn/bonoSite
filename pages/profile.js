import React from "react";
import GoogleSignInButton from "../components/buttons/GoogleSignInButton";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../firebase";


// stripe firebase account auth
import { createCheckoutSession } from '../stripe/createCheckoutSession';
import usePremiumStatus from "../stripe/usePremiumStatus";
import { PLANID, PLANNAME } from "@/stripe/planId";

// Component
import Header from "@/components/layout/Header";
import List from "@/components/element/object/list";
import UserInfo from "../components/element/UserInfo";
import SignOutButton from "../components/buttons/SignOutButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";

function Profile() {

  // 現在ログインしているユーザーの情報を取得
    const [user] = useAuthState(auth)
    const userSubscriptionPlan = usePremiumStatus(user);

    return(
      <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <Header />
        <div className="Profile m-auto w-12/12 md:w-4/12 grid text-center lg:mb-0  lg:text-left">
          {user ? (
              <>
                <UserInfo />
                  <div className="mb-8"></div>
                  <div className="divider border-b w-full"></div>
                  <div className="mb-8"></div>

                {/* サブスクリプションでの表示分岐 - 登録/サブスク状況 */}
                {userSubscriptionPlan === null ? (
                  <>
                    <div className="UpGrade-Growth">
                    <h2>あなたは<b>メンバーではありません</b></h2>
                       <List
                        label="スタンダードプランへ変更"
                        content="スタンダードプランへの登録はこちらから"
                        buttonLink={""}
                        buttonLabel="アップグレード"
                        buttonOnClick={async () => await createCheckoutSession(PLANID.standard.onemonth)}
                      ></List>
                    </div>
                    <div className="mb-8"></div>
                    <div className="UpGrade-Growth">
                       <List
                        label="グロースプランへ変更"
                        content="グロースプランへの登録はこちらから"
                        buttonLink={""}
                        buttonLabel="アップグレード"
                        buttonOnClick={async () => await createCheckoutSession(PLANID.growth.onemonth)}
                      ></List>
                    </div>
                    <div className="mb-8"></div>
                    
                  </>
                ) : (
                  userSubscriptionPlan === PLANNAME.premium_standard ? (
                    <>
                      <h2>あなたは<b>スタンダードプラン</b>です</h2>
                      <div className="mb-8"></div>
                      <div className="divider border-b w-full"></div>
                      <div className="mb-8"></div>
                      <List
                        label="プラン変更 『グロースプラン』"
                        content="グロースプランへの登録はこちらから"
                        buttonLink={""}
                        buttonLabel="アップグレード"
                        buttonOnClick={async () => await createCheckoutSession(PLANID.growth.onemonth)}
                      ></List>
                      <div className="mb-8"></div>
                      <div className="divider border-b w-full"></div>
                      <div className="mb-8"></div>
                      <List
                        label="メンバーの解約"
                        content="サブスクリプションの解約はこちらから"
                        buttonLink={"https://billing.stripe.com/p/login/test_5kAaGv5La2cv2wo144"}
                        buttonLabel="解約へ"
                        buttonOnClick={""} 
                      ></List>
                      <div className="mb-8"></div>
                      <div className="divider border-b w-full"></div>
                      <div className="mb-8"></div>
                    </>
                  ) : (
                    <div>
                      <h2>あなたは<b>グロースプラン</b>です</h2>
                      <div className="mt-4"></div>
                      <List
                        label="プランの変更 スタンダードプラン"
                        content="ボタン→Change Password"
                        buttonLink={""}
                        buttonLabel="変更"
                        buttonOnClick={async () => await createCheckoutSession(PLANID.standard.onemonth)}
                      ></List>
                      <div className="mb-8"></div>
                      <div className="divider border-b w-full"></div>
                      <div className="mb-8"></div>
                      <List
                        label="メンバーの解約"
                        content="サブスクリプションの解約はこちらから"
                        buttonLink={"https://billing.stripe.com/p/login/test_5kAaGv5La2cv2wo144"}
                        buttonLabel="解約へ"
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