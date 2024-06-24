import { useEffect, useState } from "react";

export default function Footer() {
    const [rolagem, setRolagem] = useState('');

    function verificaRolagem() {
        if (!(document.documentElement.scrollHeight > document.documentElement.clientHeight)) {
            setRolagem('fixed-bottom')
        }
    }

    useEffect(() => {
        verificaRolagem()
    }, [rolagem]);


    return (
        <footer id="footer" className={`bg-dark p-3 text-white col-sm-12 text-center ${rolagem}`} >
            <p>Todos os direitos reservados <sup><i className="bi bi-c-circle"></i></sup></p>
        </footer>
    )
}
