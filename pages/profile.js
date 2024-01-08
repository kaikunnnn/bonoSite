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

    // これを出すとログインしてないと全て表示されないこと
    // if (!member) return null;

    
    return(<>
      <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <Header />

        <div className="Profile m-auto w-12/12 md:w-4/12 grid text-center lg:mb-0  lg:text-left">
        {!member ? (
          <>
          <div className="not-logged-in">
            <p>ログインが必要です。</p>
            <GoogleSignInButton />
            <PrimaryButton link="/authentification/login" content='ログイン'/>
          </div>
        </>
        ) : (
          <>
            <h2>マイページ</h2>
            <UserInfo />
                  <div className="mb-8"></div>
                  <div className="divider border-b w-full"></div>
                  <div className="mb-8"></div>

             <MemberstackProtected
                allow={{
                  plans: ["pln_--iu4u0fzy","prc_-1-v3-8o1b0wco","prc_-3-v3-471h0wzu","prc_-1-v3-o11f0wgv","prc_-3-v3-9j1d0wxw"], // ここにアクセスを許可するプランのIDを指定します
                  // permissions: ["view:workout"] // ここにアクセスを許可するパーミッションを指定します
                }}
                onUnauthorized={
                  <div>
                    <h3> あなたは<b>メンバーではありません</b></h3>
                    <div className="UpGrade-Growth">
                        <div className="mb-8"></div>
                        <List
                            label="スタンダードプランへ変更"
                            content="スタンダードプランへの登録はこちらから"
                            buttonLink={""}
                            buttonLabel="追加"
                            buttonOnClick={async () => await createCheckoutSession(PLANID.standard.onemonth)}
                          ></List>
                          <div className="mb-8"></div>
                          <List
                            label="グロースプランへ変更"
                            content="グロースプランへの登録はこちらから"
                            buttonLink={""}
                            buttonLabel="追加"
                            buttonOnClick={async () => await createCheckoutSession(PLANID.growth.onemonth)}
                          ></List>
                    </div>
                  </div>
                } 
              >
                <div>
                  <h3>Only the BONO Memeber</h3>
                  <div>
                    <p>Plan Name</p>
                    <p></p>
                  </div>
                </div> 
              </MemberstackProtected>
         
       
         <SignOutButton />
         </>

        )}          
        </div> {/* This closing div tag seems to be what was missing */}
      </main>
        
      </>)
}

export default Profile
