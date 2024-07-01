import { useEffect, useState } from "react"
import Button from "../../atoms/Button/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase"
import Image from "../../atoms/Image/Image"
import axios from 'axios'

export default function Main(props) {

    const [imagem1, setImagem1] = useState('')
    const [imagem2, setImagem2] = useState('')
    const [numero, setNumero] = useState(0)


    async function getImagem(imagem) {
        if (imagem == 1) {
            console.log("Imagem 1")
            let data = await axios.get("https://random.dog/woof.json")
            setImagem1(data.data.url)
        } else {
            console.log("Imagem 2")
            let data = await axios.get("https://random.dog/woof.json")
            setImagem2(data.data.url)
        }

    }

    async function getImagesFirstTime() {
        let index = 0;
        while (!imagem2 && index < 3) {
            let data = await axios.get("https://random.dog/woof.json")
            console.log(data.data.url)
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
            console.log(index)
        }
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Logout successful");
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
                <div className="d-flex p-3 row justify-content-center" >
                    <Button label={"Comecar"} onClick={getImagesFirstTime} />
                    <div className="col-4 text-center p-3" style={{
                        maxWidth: "250",
                        minWidth: "250"
                    }}>
                        <span onClick={(e) => getImagem(1)} style={{
                            cursor: "pointer"
                        }}>
                            <Image source={imagem1} width={"250"} />
                        </span>
                    </div>
                    <div className="col-4 text-center p-3" style={{
                        maxWidth: "250",
                        minWidth: "250"
                    }}>
                        <span onClick={() => getImagem(2)} style={{
                            cursor: "pointer"
                        }}>
                            <Image source={imagem2} width={"250"} />
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
