import React from "react";

// firebase auth account
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

// stripe firebase account auth
import usePremiumStatus from "../../stripe/usePremiumStatus";

// Product ID
const product_standard_onemonth = "price_1LzDKnKUVUnt8Gtyly1TOV95"
const product_growth_onemonth = "price_1LzDOvKUVUnt8GtyqgCtgDMQ"


const MemberContent = ({ article }) => {
  
  // 現在ログインしているユーザーの情報を取得
  const [user] = useAuthState(auth)
  const userSubscriptionPlan = usePremiumStatus(user);

  const isFreeMember = userSubscriptionPlan === null;
  const isCommunityMember = userSubscriptionPlan === 'premium_community';
  const isStandardOrGrowthMember = ['premium_standard', 'premium_growth'].includes(userSubscriptionPlan);

  const canSeeContentB = (article.contentIsCommunity && (isCommunityMember || isStandardOrGrowthMember)) || (!article.contentIsCommunity && isStandardOrGrowthMember);

  

  return (
    <>
    { article.contentIsFree ? null : (
        canSeeContentB ? (
            <div className="m-auto w-10/12">
                <div className="Article Body
                    prose 
                    prose-h1:text-3xl
                    prose-lg 
                    prose-p:leading-loose
                    md:prose-xl 
                    m-auto " dangerouslySetInnerHTML={{ __html: article.bodyIsPremium }} 
                />
            </div>
        ) : (
          <>
            <div className="m-auto w-10/12 pt-12 pb-12">
                <p>メンバーになるとこれ以上読めるよ！</p>
            </div>
          </>
        )
      )}
          

    </>
  );
};

export default MemberContent;
