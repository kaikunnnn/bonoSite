// products.js
const PLANID = {
    standard: {
        onemonth: "price_1LzDKnKUVUnt8Gtyly1TOV95",
        threemonth: "price_1H3t4PKUVUnt8Gtyr5ThreeMonthID", 
    },
    growth: {
        onemonth: "price_1LzDOvKUVUnt8GtyqgCtgDMQ",
        threemonth: "price_1H3t5PKUVUnt8Gtyr5ThreeMonthID", // 
    },
  };
  
  const PLANNAME = {
    // Firebaseに保存されている文字列
    premium_standard: "premium_standard",
    premium_growth: "premium_growth",
  };


  const PLICE = {
    standard: {
        onemonth: "5980",
        threemonth: "12,800", 
    },
    growth: {
        onemonth: "9,999",
        threemonth: "32,980", // 
    },
  };
  
  export { PLANID, PLANNAME, PLICE };