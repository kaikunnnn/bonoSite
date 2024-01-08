import React from "react";
import List from "./object/list";

// Memberstack
import { useMemberstack,
  useCustomerPortal, 
  MemberstackProtected, 
  useAuth,
  SignInModal  } from "@memberstack/react";
import { Button } from "../ui/button";

function UserInfo() {
  // Memberstack - Get Member Status
  const memberstack = useMemberstack();
  const [member, setMember] = React.useState(null);
  const openPortal = useCustomerPortal({
    priceIds: ["prc_-1-v3-8o1b0wco","prc_-3-v3-471h0wzu","prc_-1-v3-o11f0wgv","prc_-3-v3-9j1d0wxw"],
  });
  
  React.useEffect(() => {
    memberstack.getCurrentMember()
  .then(({ data: member }) => setMember(member))
  .catc
  }, [])

  // SignOut Function
  const { signOut } = useAuth();
  const handleLogout = () => {
    signOut();
    // ログアウト後の処理をここに記述できます（例：ホームページへのリダイレクトなど）
  };
 
  
  
  return (
    <div>
      <h4>プロフィール</h4>
      <div data-ms-content="members">
        <div class="mt-4"></div>
        <List
            label="メールアドレス"
            content={member && member.auth.email}
            buttonLabel="変更"
            buttonLink="/"
        ></List>
        <div class="mt-4"></div>
        <List
            label="パスワード"
            content="ボタン→Change Password"
            buttonLabel="変更"
            buttonLink="/"
        ></List>
      </div>

      <MemberstackProtected onUnauthorized={<SignInModal />}>
        <button onClick={openPortal}>Open Portal</button>
      </MemberstackProtected>

      <Button onClick={handleLogout}>ログアウト</Button>

      
    </div>
  );
}

export default UserInfo;
