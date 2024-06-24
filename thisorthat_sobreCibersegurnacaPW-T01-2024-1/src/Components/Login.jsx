import React, { useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function Home(props) {
    const firebaseConfig = {
        apiKey: "AIzaSyAZ-O7AY0Fal1UGxShinTF6Roz2_XhkpP0",
        authDomain: "trab-prog-web-2dfd5",
        projectId: "trab-prog-web-2dfd5",
        storageBucket: "trab-prog-web-2dfd5.appspot.com",
        messagingSenderid: "327311494705",
        appId: "1:327311494705:web:5ab65fff31342f8335cf10",
        measurementId: "G-1J5HJ911BY"
    }

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app)

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


    
    
    const auth = getAuth();
    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });


    return (
        <section>
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor=""></label>
            <input type="text" />
        </section>
    )
}