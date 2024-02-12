// プランIDの配列
const PLAN_IDS = [
    // StripeのプランIDを指定する必要がある
    "pln_-1-jp--jnn0fmm",
    process.env.NEXT_PUBLIC_PLAN_S_3M_PRICE_ID,
    process.env.NEXT_PUBLIC_PLAN_G_1M_PRICE_ID,
    process.env.NEXT_PUBLIC_PLAN_G_3M_PRICE_ID,
  // 他のプランIDもここに追加
];

// プランIDの配列を受け取り、1つの文字列にまとめて返す関数
const formatPlanIds = (planIds) => {
  return planIds.join(', ');
};

// PLAN_IDSを文字列に変換
const planIdsString = formatPlanIds(PLAN_IDS);

// PLAN_IDS配列、formatPlanIds関数、そしてplanIdsStringをエクスポート
export { PLAN_IDS, formatPlanIds, planIdsString };