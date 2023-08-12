import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../firebase";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";

function GoogleSignInButton() {
  const SignInWithGoogle = () => {
    // Make Login Function by Using Firebase
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // Make sure the user is signed in
        if (user) {
          // Save the new user's info in the Firestore database
          setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            provider: user.providerData[0].providerId,
          }).catch((error) => {
            console.error("Error writing document of firebase:", error);
          });
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        // ...
      });
  };
  return (
    <button onClick={SignInWithGoogle} className="Googlebutton w-96 h-14 p-4 bg-white rounded-lg border border-neutral-200 justify-start items-center gap-2.5 inline-flex">
        <img
          className="Image7 w-5 h-5"
          src="sns/icon_google.svg"
        />
        <div className="Google grow shrink basis-0 text-center text-zinc-950 text-sm font-bold leading-snug tracking-wide">
          Googleでログイン
        </div>
    </button>
  );
}

export default GoogleSignInButton;
