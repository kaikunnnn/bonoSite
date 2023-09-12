import React from "react";
import { auth } from "../../firebase";
import List from "./object/list";

function UserInfo() {
  return (
    <div>
      <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName} />
      <p>{auth.currentUser.displayName}</p>
      <p>{auth.currentUser.email}</p>
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
            label="メールアドレスの変更"
            content="takumi.kai.skywalker@gmail.com"
            buttonLabel="変更"
            buttonLink="/"
        ></List>
        <div class="mt-4"></div>
        <List
            label="パスワードの変更"
            content="ボタン→Change Password"
            buttonLabel="変更"
            buttonLink="/"
        ></List>
      </div>
    </div>
  );
}

export default UserInfo;
