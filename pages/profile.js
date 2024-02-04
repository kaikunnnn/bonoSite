import React, { useEffect, useState } from "react";

// Memberstack
import { useMemberstack,MemberstackProtected,SignInModal} from "@memberstack/react";
import memberstackDOM from "@memberstack/dom";
const memberstack = memberstackDOM.init({
  publicKey:  process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY,
});


// stripe firebase account auth
import { createCheckoutSession } from '../stripe/createCheckoutSession';
import { PLANID, PLANNAME } from "@/stripe/planId";

// Component
import Header from "@/components/common/layout/Navigation/Header";
import List from "@/components/common/layout/lists/list";
import UserInfo from "../components/common/layout/Contents/UserInfo";
import SignOutButton from "../components/common/ui/buttons/SignOutButton";
import { Button } from "@/components/common/ui/button";



function Profile() {

  // ローディング状態を管理する状態変数を追加
  const [isLoading, setIsLoading] = useState(true);

  // Memberstack login
  const modalLogin = () => {
    memberstack.openModal("LOGIN");
  }

  // Memberstack - LoginModal
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
      setShowModal(true);
    };

    // Memberstack - Get Member Status
    const memberstack = useMemberstack();
    const [member, setMember] = React.useState(null);
    const [plans, setPlans] = useState([]); // ユーザーのプラン情報を保持するための状態

    useEffect(() => {
      setIsLoading(true); // ローディング開始
      memberstack.getCurrentMember()
        .then(({ data: member }) => {
          setMember(member);
          if (member && member.planConnections) {
            setPlans(member.planConnections);
          }
        })
        .catch(error => console.error('Error fetching member details:', error))
        .finally(() => setIsLoading(false)); // ローディング終了
    }, []);
  
    if (isLoading) {
      return <div>ローディング中...</div>; // ローディング中の表示
    }

    const planNames = {
      [process.env.NEXT_PUBLIC_PLAN_S_1M_PRICE_ID]: "スタンダードプラン（1ヶ月）",
      [process.env.NEXT_PUBLIC_PLAN_S_3M_PRICE_ID]: "スタンダードプラン（3ヶ月）",
      [process.env.NEXT_PUBLIC_PLAN_G_1M_PRICE_ID]: "グロースプラン（1ヶ月）",
      [process.env.NEXT_PUBLIC_PLAN_G_3M_PRICE_ID]: "グロースプラン（3ヶ月）",
      // 他のプランIDとプラン名のマッピング
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
               <Button variant="secondary" >ShadCN Button</Button>
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
            
            {/* ユーザー情報の表示 */}
            {plans.length > 0 && (
                <>
                  <h3>あなたのプラン:</h3>
                  <ul>
                    {plans.map((plan) => (
                      <li key={plan.id}>
                        プラン名: {planNames[plan.payment.priceId] || "未知のプラン"},, ステータス: {plan.status}, タイプ: {plan.type}
                      </li>
                    ))}
                  </ul>
                </>
              )}
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
