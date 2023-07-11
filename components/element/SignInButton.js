import React from "react";
import style from "./SignInButton.module.css";
import { signInWithPopup } from "firebase/auth";
import {auth, db, provider} from "../../firebase";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";

function SignInButton() {
    const SignInWithGoogle = () => {
        // Make Login Function by Using Firebase
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            // Make sure the user is signed in
            if(user) {
                // Save the new user's info in the Firestore database
                setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    provider: user.providerData[0].providerId,
                }).catch((error) => {
                    console.error("Error writing document of firebase:", error)
                });
            }
        }).catch((error) =>{
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            // ...
        });
    };
    return(
        <button onClick={SignInWithGoogle} className={style.button}>
            <p>新規登録する</p>
        </button>
        
    )
}



export default SignInButton