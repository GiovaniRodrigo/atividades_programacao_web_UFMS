import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import axios from 'axios'
import { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"


export default function Home() {

    const [data, setData] = useState([])
    const provider = new GoogleAuthProvider();

    

    async function fetchData() {
        let data = await fetch("https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=live_OCFgzGKRdZtj21jlWLITpF117H5oYqnpjhd36jfdQZNVCxNORQlSRfSmj03zFGvN")

        let imagens = await axios.get(data.url).then(function (response) {
            return response
        }
        )
        // https://trab-prog-web-2dfd5.firebaseapp.com/__/auth/handler
        setData(imagens[0])
    }

    return (
        <>
            <Header />
            {data.map((e) => {
                <Main />
            })}
            <Footer />
        </>
    )
}