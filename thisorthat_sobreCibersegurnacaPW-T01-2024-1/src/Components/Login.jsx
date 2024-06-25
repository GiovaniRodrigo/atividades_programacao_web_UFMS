import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider } from 'firebase/auth';
import Button from '../atoms/Button/Button';
import Card from '../atoms/Card/Card';
import Text from '../atoms/Text/Text';
import './login.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ-O7AY0FaL1UGxShinTF6RoZ2_XhkpP0",
  authDomain: "trab-prog-web-2dfd5.firebaseapp.com",
  projectId: "trab-prog-web-2dfd5",
  storageBucket: "trab-prog-web-2dfd5.appspot.com",
  messagingSenderId: "327311494705",
  appId: "1:327311494705:web:5ab65fff31342f8335cf10",
  measurementId: "G-1J5HJ911BY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login() {

  function signInWithFacebook () {
    console.log("çlaskdjflaksjb")
    const provider = new FacebookAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <section>
        <Card
          backgroundColor='#ffffff'
          content={
            <div className='d-grid gap-3'>
              <Text name={"title"} content={"Bem-vindo ao ThisOrThat de ProgWeb"} />
              <Button label={"Entrar com Facebook"} primary={true} onClick={signInWithFacebook()} />
              {/* <Button label={"Cadastrar-se"} primary={false} /> */}
            </div>
          } />
      </section>
    </div>
  );
}
