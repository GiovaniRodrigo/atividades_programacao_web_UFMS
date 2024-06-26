import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider } from 'firebase/auth';
import Button from '../../atoms/Button/Button';
import Card from '../../atoms/Card/Card';
import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';

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

  function entrarFacebook () {
    console.log("provider")
    // const provider = new FacebookAuthProvider();
    // console.log(provider)
  }

  function cadastrarSe () {
    console.log("aldj")
  }

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <section>
        <Card
          backgroundColor='#ffffff'
          content={
            <div className='d-grid gap-3'>
              <Text tag={"h4"} content={"Bem-vindo ao ThisOrThat de ProgWeb"} />
              <Input label={'Usuário'} />
              <Input label={'Senha'} />
              <Button label={"Entrar"} primary={true}  />
              <Button label={"Entrar com Facebook"} icon={''} onClick={() => entrarFacebook()} />
              <div className='text-center'>
                <a
                  onClick={cadastrarSe}
                  className='alig-self-center'
                  style={{
                    cursor: 'pointer',
                    width: 'min-content',
                    textWrap: 'nowrap'
                  }}>
                  Cadastrar-se
                </a>
              </div>
            </div>
          } />
      </section>
    </div>
  );
}
