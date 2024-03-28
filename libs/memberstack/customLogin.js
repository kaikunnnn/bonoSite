import memberstackDOM from "@memberstack/dom";

const memberstack = memberstackDOM.init({
  publicKey: process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY,
});

async function customLogin(email, password) {
  try {
    // Memberstackでログイン処理を行う
    const { data, type } = await memberstack.loginMemberEmailPassword({
      email: email,
      password: password,
    });
    console.log("Login event type:", type);
    console.log("Returned data:", data);

    // ログイン成功後のリダイレクト処理
    window.location.href = "/";
  } catch (error) {
    console.error("Login failed:", error);
  }
}

export { customLogin };
