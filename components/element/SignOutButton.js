import React from "react";
import style from "./SignInButton.module.css";
import { signInWithPopup } from "firebase/auth";
import {auth, provider} from "../../firebase";

function SignOutButton() {
    
    return(
        <button onClick={() => auth.signOut()} className={style.button}>
            <p>ログアウトする</p>
        </button>
        
    )
}

export default SignOutButton