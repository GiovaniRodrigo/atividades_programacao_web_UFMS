import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Login from "../Components/Login";

export default function Root() {

    const firebaseConfig = {
        apiKey: "AIzaSyAZ-O7AY0Fal1UGxShinTF6Roz2_XhkpP0",
        authDomain: "trab-prog-web-2dfd5",
        projectId:"trab-prog-web-2dfd5",
        storageBucket: "trab-prog-web-2dfd5.appspot.com",
        messagingSenderid: "327311494705",
        appId: "1:327311494705:web:5ab65fff31342f8335cf10",
        measurementId: "G-1J5HJ911BY"
    }

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app)

    return (
        <>
            <Login/>
        </>
    )
  }