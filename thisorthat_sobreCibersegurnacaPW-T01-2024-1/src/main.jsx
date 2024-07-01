import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./error-page";
import Login from './Components/Login/Login'
import Main from './Components/Main/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element: <Main />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
