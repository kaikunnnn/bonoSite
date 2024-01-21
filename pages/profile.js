import React, { useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../firebase";

// Memberstack
import { useMemberstack,MemberstackProtected,useCustomerPortal,SignInModal} from "@memberstack/react";
import memberstackDOM from "@memberstack/dom";
const memberstack = memberstackDOM.init({
  publicKey:  process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY,
});

// stripe firebase account auth
import { createCheckoutSession } from '../stripe/createCheckoutSession';
import usePremiumStatus from "../stripe/usePremiumStatus";
import { PLANID, PLANNAME } from "@/stripe/planId";

// Component
import Header from "@/components/layout/Header";
import List from "@/components/element/object/list";
import UserInfo from "../components/element/UserInfo";
import SignOutButton from "../components/buttons/SignOutButton";



function Profile() {
  // Memberstack login
  const modalLogin = () => {
    memberstack.openModal("LOGIN");
  }

  // 現在ログインしているユーザーの情報を取得
    const [user] = useAuthState(auth)
    const userSubscriptionPlan = usePremiumStatus(user);

    // Memberstack - LoginModal
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
      setShowModal(true);
    };

    // Memberstack - Get Member Status
    const memberstack = useMemberstack();
    const [member, setMember] = React.useState(null);

    React.useEffect(() => {
      memberstack.getCurrentMember()
    .then(({ data: member }) => setMember(member))
    .catc
    }, [])

    const openPortal = async () => {
      try {
        const res = await fetch('/api/memberstack', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'launchStripeCustomerPortal',
            priceIds: ["prc_-3-v3-9j1d0wxw","prc_-1-v3-8o1b0wco","prc_-3-v3-471h0wzu","prc_-1-v3-o11f0wgv"], // ここに必要なプランのIDを指定します
          }),
        });
    
        const data = await res.json();
    
        // ここでdataを使用して顧客ポータルを開きます
        window.location.href = data.url;
      } catch (error) {
        console.error('Error opening portal:', error);
      }
    };

    
    return(<>
      <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <Header />

        <div className="Profile m-auto w-12/12 md:w-4/12 grid text-center lg:mb-0  lg:text-left">
        {!member ? (
          <>
          <div className="not-logged-in m-12">
            <p>ログインが必要です。</p>
            <div className="m-10">
               <button onClick={modalLogin}>ログイン</button>
            </div>
            {/* Login UI from memberstack */}
            <button onClick={handleButtonClick} className="Button cursor-pointer self-stretch p-4 bg-blue-500 rounded-lg border-1 border-neutral-200 justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-white text-sm font-bold leading-snug tracking-wide">
                      ログイン
                    </div>
            </button>
            {showModal && <SignInModal />}
          </div>
        </>
        ) : (
          <>
            <h2>マイページ</h2>
            <UserInfo />
            <MemberstackProtected onUnauthorized={<SignInModal />}>
              <button onClick={openPortal}>Open Portal</button>
            </MemberstackProtected>
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
                  <button onClick={openPortal}>Open Portal</button>
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
