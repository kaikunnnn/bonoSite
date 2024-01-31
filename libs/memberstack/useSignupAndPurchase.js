// useSignupAndPurchase.js
import { useState } from "react";

const useSignupAndPurchase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupAndPurchase = async (selectedPlan) => {
    try {
      // MemberStackでユーザーをサインアップ
      await memberstack.signupMemberEmailPassword({
        email: email,
        password: password,
      });

      // 選択されたプランに応じてStripeのプライスIDをマップ
      const priceIdMap = {
        plan_A_1m: "price_id_for_plan_A_1m", // Aプラン1ヶ月の価格ID
        plan_A_3m: "price_id_for_plan_A_3m", // Aプラン3ヶ月の価格ID
        plan_B_1m: "price_id_for_plan_B_1m", // Bプラン1ヶ月の価格ID
        plan_B_3m: "price_id_for_plan_B_3m", // Bプラン3ヶ月の価格ID
      };

      const priceId = priceIdMap[selectedPlan];

      // サインアップ成功後、Stripeのチェックアウトプロセスを開始
      await memberstack.purchasePlansWithCheckout({
        priceId: priceId,
        cancelUrl: "/cancel", // キャンセル時のURL
        successUrl: "/success", // 成功時のURL
        autoRedirect: true, // 自動リダイレクト設定
      });
    } catch (err) {
      // エラーハンドリング（例：メールアドレスが既に使われている場合）
      console.error("Error: " + err.message);
    }
  };

  return {
    setEmail,
    setPassword,
    signupAndPurchase,
  };
};

export default useSignupAndPurchase;
