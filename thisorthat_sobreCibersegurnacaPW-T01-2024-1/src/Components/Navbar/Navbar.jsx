import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <Link>Home</Link>
            <Link>Ranking</Link>
            <Link>Sobre</Link> 
        </>
    )
}