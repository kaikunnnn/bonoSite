import React from "react";
import List from "./object/list";

// Memberstack
import { useMemberstack,
  useCustomerPortal, 
  MemberstackProtected, 
  SignInModal  } from "@memberstack/react";

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

  if (!member) return null;
  
  return (
    <div>
      <h2>プロフィール</h2>
      <p>{member.auth.email}</p>
      <div data-ms-content="members">
        <div class="title-blcok">
          <div class="textblock-left">
            <div class="heading-h5">アカウント設定</div>
            <div class="margin-8 hide"></div>
          </div>
          <a href="#" class="buttonsecondaryghost medium hide w-inline-block">
            <div class="body-medium white">変更する</div>
          </a>
        </div>
        <div class="mt-4"></div>
        <List
            label="メールアドレス"
            content={member.auth.email}
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
    </div>
  );
}

export default UserInfo;
