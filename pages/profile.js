"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Component
import Header from "@/components/common/layout/Navigation/Header";
import List from "@/components/common/layout/lists/list";
import UserInfo from "../components/common/layout/Contents/UserInfo";
import SignOutButton from "../components/common/ui/buttons/SignOutButton";
import { Button } from "@/components/common/ui/button";

//　Memberstack
import {
  useMemberstack,
  MemberstackProtected,
  SignInModal,
} from "@memberstack/react";
import memberstackDOM from "@memberstack/dom";
import { planIdsString } from "@/libs/memberstack/planIds";
import useMemberActions from "@/libs/memberstack/hooks/useMemberActions";
import useMemberInfo from "@/libs/memberstack/hooks/useMemberInfo";
import LoginButtonMemberstackModal from "@/components/common/ui/buttons/auth/LoginButtonMemeberstack";

// MemberstackProviderをクライアントサイドでのみ読み込む
const MemberstackProvider = dynamic(
  () => import("@memberstack/react").then((mod) => mod.MemberstackProvider),
  { ssr: false }
);

function Profile() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <MemberstackProvider
      config={{
        publicKey: process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY,
      }}
    >
      <ProfileContent />
    </MemberstackProvider>
  );
}

function ProfileContent() {
  const [memberData, setMemberData] = useState({
    isLoading: true,
    member: null,
    plans: [],
  });

  const memberstack = useMemberstack();

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const { data: member } = await memberstack.getCurrentMember();
        setMemberData({
          isLoading: false,
          member,
          plans: member?.planConnections || [],
        });
      } catch (error) {
        console.error("Error fetching member data:", error);
        setMemberData((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchMemberData();
  }, [memberstack]);

  const { isLoading, member, plans } = memberData;

  if (isLoading) {
    return <div>ローディング中...</div>;
  }

  const planNames = {
    [process.env.NEXT_PUBLIC_PLAN_S_1M_PRICE_ID]: "スタンダードプラン（1ヶ月）",
    [process.env.NEXT_PUBLIC_PLAN_S_3M_PRICE_ID]: "スタンダードプラン（3ヶ月）",
    [process.env.NEXT_PUBLIC_PLAN_G_1M_PRICE_ID]: "グロースプラン（1ヶ月）",
    [process.env.NEXT_PUBLIC_PLAN_G_3M_PRICE_ID]: "グロースプラン（3ヶ月）",
    [process.env.NEXT_PUBLIC_PLAN_C_PRICE_ID]: "コミュニティプラン",
    // 他のプランIDとプラン名のマッピング
  };

  return (
    <>
      <main className="max-h-full bg-Top bg-cover text-slate-900 bg-no-repeat">
        <Header />
        <div className="Profile m-auto w-12/12 md:w-4/12 grid text-center lg:mb-0  lg:text-left">
          {!member
            ? (console.log("現在ログインしているユーザーはいません。"),
              (
                <>
                  <div className="not-logged-in m-12">
                    <p>ログインが必要です。</p>
                    <LoginButtonMemberstackModal />
                  </div>
                </>
              ))
            : (console.log("現在ログインしているユーザーが存在します。"),
              (
                <>
                  <h2>マイページ</h2>
                  <UserInfo />

                  {/* ユーザー情報の表示 */}
                  {plans.length > 0
                    ? (console.log(
                        "このユーザーは以下のプランに属しています:",
                        plans.map((plan) => plan.payment.priceId)
                      ),
                      (
                        <>
                          <h3>あなたのプラン:</h3>
                          <ul>
                            {plans.map((plan) => (
                              <li key={plan.id}>
                                プラン名:{" "}
                                {planNames[plan.payment.priceId] ||
                                  "未知のプラン"}
                                ,, ステータス: {plan.status}, タイプ:{" "}
                                {plan.type}
                              </li>
                            ))}
                          </ul>
                        </>
                      ))
                    : (console.log(
                        "このユーザーはどのプランにも属していません。"
                      ),
                      (<div>プランに加入していません。</div>))}
                  <div className="mb-8"></div>
                  <div className="divider border-b w-full"></div>
                  <div className="mb-8"></div>

                  <MemberstackProtected
                    allow={{
                      plans: planIdsString.split(", "),
                    }}
                    onUnauthorized={
                      <div>
                        <h3>
                          {" "}
                          あなたは<b>メンバーではありません</b>
                        </h3>
                        <div className="UpGrade-Growth">
                          <div className="mb-8"></div>
                          <List
                            label="スタンダードプランへ変更"
                            content="スタンダードプランへの登録はこちらから"
                            buttonLink={""}
                            buttonLabel="追加"
                            buttonOnClick={async () =>
                              await createCheckoutSession(
                                PLANID.standard.onemonth
                              )
                            }
                          ></List>
                          <div className="mb-8"></div>
                          <List
                            label="グロースプランへ変更"
                            content="グロースプランへの登録はこちらから"
                            buttonLink={""}
                            buttonLabel="追加"
                            buttonOnClick={async () =>
                              await createCheckoutSession(
                                PLANID.growth.onemonth
                              )
                            }
                          ></List>
                        </div>
                      </div>
                    }
                  >
                    <div>
                      <h3>Only the BONO Memeber</h3>
                      <div>
                        <p>Plan Name</p>
                        <Button variant="default" onClick={handleStripePortal}>
                          プランを管理
                        </Button>
                        <Button
                          variant="default"
                          onClick={launchDirectPlanUpdate}
                        >
                          スタンダードプラン３M更新
                        </Button>
                        <Button variant="default" onClick={launchBilling}>
                          請求履歴のみ
                        </Button>
                      </div>
                    </div>
                  </MemberstackProtected>

                  <SignOutButton />
                </>
              ))}
        </div>{" "}
        {/* This closing div tag seems to be what was missing */}
      </main>
    </>
  );
}

export default Profile;
