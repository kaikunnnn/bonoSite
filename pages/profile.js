import React from "react";
import GoogleSignInButton from "../components/buttons/GoogleSignInButton";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../firebase";

// Memberstack
import { useMemberstack,MemberstackProtected,useAuth} from "@memberstack/react";

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
import { updateSubscriptionPlan } from "@/stripe/updateSubscription";
import { Button } from "@/components/ui/button";



function Profile() {
  // SignOut Function
  const { signOut } = useAuth();
  const handleLogout = () => {
    signOut();
    // ログアウト後の処理をここに記述できます（例：ホームページへのリダイレクトなど）
  };

  // 現在ログインしているユーザーの情報を取得
    const [user] = useAuthState(auth)
    const userSubscriptionPlan = usePremiumStatus(user);

    // Memberstack - Get Member Status
    const memberstack = useMemberstack();
    const [member, setMember] = React.useState(null);

    React.useEffect(() => {
      memberstack.getCurrentMember()
    .then(({ data: member }) => setMember(member))
    .catc
    }, [])

    if (!member) return null;

    
    return(
      <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <Header />

        <div className="Profile m-auto w-12/12 md:w-4/12 grid text-center lg:mb-0  lg:text-left">
          {/* Memberstack */}
          <MemberstackProtected>
            <p>メンバースタックにログインしてますか〜</p>
                <UserInfo />
                  <div className="mb-8"></div>
                  <div className="divider border-b w-full"></div>
                  <div className="mb-8"></div>
                  <Button onClick={handleLogout}>ログアウト</Button>

            </MemberstackProtected>












                {/* サブスクリプションでの表示分岐 - 登録/サブスク状況 */}
                <div className="NOPLAN">
                    <div className="UpGrade-Growth">
                    <h2>あなたは<b>メンバーではありません</b></h2>
                       <List
                        label="スタンダードプランへ変更"
                        content="スタンダードプランへの登録はこちらから"
                        buttonLink={""}
                        buttonLabel="追加"
                        buttonOnClick={async () => await createCheckoutSession(PLANID.standard.onemonth)}
                      ></List>
                    </div>
                    <div className="mb-8"></div>
                    <div className="UpGrade-Growth">
                       <List
                        label="グロースプランへ変更"
                        content="グロースプランへの登録はこちらから"
                        buttonLink={""}
                        buttonLabel="追加"
                        buttonOnClick={async () => await createCheckoutSession(PLANID.growth.onemonth)}
                      ></List>
                    </div>
                    <div className="mb-8"></div>
                    
                </div>
                
                <div className="Standard PLAN">
                      <h2>あなたは<b>スタンダードプラン</b>です</h2>
                      <div className="mb-8"></div>
                      <div className="divider border-b w-full"></div>
                      <div className="mb-8"></div>
                      <List
                        label="プラン変更 『グロースプラン』"
                        content="グロースプランへの更新はこちらから"
                        buttonLink={""}
                        buttonLabel="アップグレード"
                        buttonOnClick={async () => await updateSubscriptionPlan(PLANID.growth.onemonth)}
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
                  </div>

                  <div className="Growth Plan">
                    <div>
                      <h2>あなたは<b>グロースプラン</b>です</h2>
                      <div className="mt-4"></div>
                      <List
                        label="プランの変更 スタンダードプラン"
                        content="ボタン→Change Password"
                        buttonLink={""}
                        buttonLabel="変更"
                        buttonOnClick={async () => await updateSubscriptionPlan(PLANID.standard.onemonth)}
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
                  </div>
              
                <SignOutButton />
             
        </div>
      </main>
        
    )
}

export default Profile