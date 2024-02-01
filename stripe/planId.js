// products.js
const PLANID = {
    standard: {
        onemonth: "prc_-1-jp--kio0f81",
        threemonth: "prc_-3-jp--874w0fwe", 
    },
    growth: {
        onemonth: "prc_-1-jp--76u0f8q",
        threemonth: "prc_-3--eyz0fts", // 
    },
  };
  
  const PLANNAME = {
    // Firebaseに保存されている文字列
    premium_standard: "premium_standard",
    premium_growth: "premium_growth",
  };


  const PLICE = {
    standard: {
        name:"スタンダード",
        onemonth: "5,980",
        threemonth: "12,800", 
    },
    growth: {
        name:"グロース",
        onemonth: "9,999",
        threemonth: "32,980", // 
    },
  };
  
  export { PLANID, PLANNAME, PLICE };