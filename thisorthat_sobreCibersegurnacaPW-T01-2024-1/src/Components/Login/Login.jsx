import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Card from '../../atoms/Card/Card';
import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';
import { auth, googleProvider } from '../../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [user, setUser] = useState({})


  const createUser = async () => {
    if (!email) {
      window.alert("Insira um e-mail")
    }else if (!senha) {
      window.alert("Insira uma senha")
    }
    try {
      let data = await createUserWithEmailAndPassword(auth, email, senha)
      window.alert("Usuario cadastrado")
      // console.log(data)
      const user = userCredential.user
      console.log(user)
      // navigate("/main")
    } catch (error) {
      console.log(error)
      window.alert("Houve um erro ao cadastrar usuario")
      setSenha('')
      setEmail('')
    }

  }

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/main")
    } catch (error) {
      console.log(error)
      window.alert("Erro ao realizar login, verifique o e-mail e senha")
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error)
      window.alert("Houve um erro logar com o Google")
    } finally {
      console.log("logado")
      navigate("/main")
    }
  }

  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <section>
        <Card
          backgroundColor='#ffffff'
          content={
            <div className='d-grid gap-3'>
              <Text tag={"h4"} content={"Bem-vindo ao ThisOrThat de ProgWeb"} />
              <Input label={'E-mail'} onChange={(e) => setEmail(e.target.value)} />
              <Input label={'Senha'} type={'password'} onChange={(e) => setSenha(e.target.value)} />
              <Button label={"Entrar"} primary={true} onClick={login} />
              <Button label={"Google"} onClick={signInWithGoogle} />
              <Button label={"Cadastrar-se"} onClick={createUser} />
            </div>
          } />
      </section>
    </div>
  );
}
