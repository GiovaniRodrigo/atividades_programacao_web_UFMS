import { useEffect, useState } from "react"
import Button from "../../atoms/Button/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase"
import Image from "../../atoms/Image/Image"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function Main(props) {

    const navigate = useNavigate()
    const [imagem1, setImagem1] = useState('')
    const [imagem2, setImagem2] = useState('')
    const [imagensSelecionadas, setImagensSelecionadas] = useState([])


    async function getImagem(imagem) {
        let data = await axios.get("https://random.dog/woof.json");
        if (imagem === 1) {
            setImagem1(data.data.url)
        } else {
            setImagem2(data.data.url)
        }
    }

    async function getImagesFirstTime() {
        let index = 0;
        while (!imagem2 && index < 3) {
            let data = await axios.get("https://random.dog/woof.json")
            if (data.data.url.endsWith(".jpeg") || data.data.url.endsWith(".jpg")) {
                if (!imagem1) {
                    setImagem1(data.data.url)
                }
                if (imagem1) {
                    setImagem2(data.data.url)
                    index = 3
                }
            }
            index++;
        }
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/")
            window.alert("Logout realizado com sucesso!")
        } catch (error) {
            console.log("Error logging out:", error);
        }
    }

    return (
        <>
            <section className="">
                <div className="d-flex gap-3 ">
                    <Button label={"Logout"} onClick={handleLogout} />
                </div>
                {/* this or that side */}
                <div className="d-flex row m-2 justify-content-center" >
                    <Button label={"Comecar"} onClick={getImagesFirstTime} />
                    <div className="col-4 text-center p-3" style={{
                        maxWidth: "250px",
                        minWidth: "250px"
                    }}>
                        <span onClick={(e) => {
                            setImagensSelecionadas([...imagensSelecionadas, imagem1])
                            getImagem(1)
                        }} style={{
                            cursor: "pointer"
                        }}>
                            <Image source={imagem1} width={"250"} />
                        </span>
                    </div>
                    <div className="col-4 text-center p-3" style={{
                        maxWidth: "250px",
                        minWidth: "250px"
                    }}>
                        <span onClick={(e) => {
                            setImagensSelecionadas([...imagensSelecionadas, imagem2])
                            getImagem(2)
                        }}
                            style={{
                                cursor: "pointer"
                            }}>
                            <Image source={imagem2} width={"250"} />
                        </span>
                    </div>
                </div>
            </section>
            <section className="d-flex flex-wrap gap-3">
                {imagensSelecionadas.map((e) => {
                    return <div style={{
                        boxShadow: "black"
                    }}><Image source={e} width={"200"} /></div>
                })}
            </section>
        </>
    )
}
