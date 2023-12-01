
import Link from "next/link"
import { Button } from "./button";
import { useState } from "react";

// Firebase User Auth
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

// Stripe
import { createCheckoutSession } from '@/stripe/createCheckoutSession';
import usePremiumStatus from "@/stripe/usePremiumStatus";
import { PLICE,PLANID } from '@/stripe/planId';
import { updateSubscription } from "@/stripe/updateSubscription";

// firebase  Stripeカスタマーリンク
import { functions } from '../../firebase';

export async function goToBillingPortal() {
  const functionRef = functions.httpsCallable('createPortalLink');
  const { data } = await functionRef({ returnUrl: window.location.origin });
  window.location.assign(data.url);
}


export function PlanExplain() {
  const [user] = useAuthState(auth);
  const userSubscriptionPlan = usePremiumStatus(user);

  // Tab Change - Plan of span
  const [currentTab, setCurrentTab] = useState('tab1');
  console.log(userSubscriptionPlan);

  return (
    (
      <div className="container">

{/* このアップデートの関数を、ポータルリンク開いて動作できないのか？ */}
        <Button 
          className="w-full font-bold"
          onClick={goToBillingPortal}
        >
          Update Subscription
        </Button>


        
        {/* TabUI */}
        <div className="Tab border-b border-gray-300 flex gap-2">
        <button 
            className={`pb px-4 py-2 border-b-2 ${currentTab === 'tab1' ? ' border-black font-bold' : 'border-transparent'}`} 
            onClick={() => setCurrentTab('tab1')}
          >3ヶ月
        </button>
          <button
            className={`pb px-4 py-2 border-b-2  ${currentTab === 'tab2' ? ' border-black font-bold' : 'border-transparent'}`} 
            onClick={() => setCurrentTab('tab2')}>
              1ヶ月
          </button>
        </div>

        {currentTab === 
        // 3ヶ月
          'tab1' ? 
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">{PLICE.standard.name} プラン</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">{PLICE.standard.threemonth}</span>/ 月
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  720p Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  2GB Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Basic Video Templates
                </li>
              </ul>
            </div>
            <div className="mt-6">
            {userSubscriptionPlan === null ? (
                // ユーザーがまだサブスクリプションを持っていない場合
                <Button 
                  className="w-full font-bold"
                  onClick={async () => await createCheckoutSession(PLANID.standard.onemonth)}
                >
                  登録する
                </Button>
              ) : (
                // ユーザーがすでにサブスクリプションを持っている場合
                <Button 
                  className="w-full font-bold"
                  onClick={async () => {
                    const userId = user.uid; // Get the user's ID from the auth state
                    const newPlanId = PLANID.standard.onemonth; // Get the new plan ID
                    await updateSubscription(userId, newPlanId);
                  }}
                >
                  更新する
                </Button>
              )}
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">
                {PLICE.growth.name}プラン
              </h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">{PLICE.growth.threemonth}</span>/月
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    className=" text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  1080p Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  10GB Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Premium Video Templates
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Collaboration Tools
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold">登録する</Button>
            </div>
          </div>
          
        </div>
        // 1ヶ月
          : 
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">{PLICE.standard.name}</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">{PLICE.standard.onemonth}</span>/ 月
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  720p Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  2GB Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Basic Video Templates
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="bg-white font-bold w-full">登録する</Button>
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">{PLICE.growth.name}プラン</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">¥{PLICE.growth.onemonth}</span>/ 月
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    className=" text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  1080p Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  10GB Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Premium Video Templates
                </li>
                <li className="flex items-center">
                  <svg
                    className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Collaboration Tools
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold w-full">登録する</Button>
            </div>
          </div>
          
        </div>
        }

        {/* Stripe Embed Pricing Table */}
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table pricing-table-id="prctbl_1OHyJoKUVUnt8GtyxEC6FfGr"
        publishable-key="pk_test_51HDQT3KUVUnt8GtyTgw5k0MXEJYXLylCz0bVftNnRCc1TL6oRZFXE2Wq5gr2WGiem1cUE8eCkZALl12EEA5olb1000NZZGIIlz">
        </stripe-pricing-table>
        
      </div>)
  );
}
