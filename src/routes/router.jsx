import { createBrowserRouter } from "react-router";
import RootLayout from "../root-layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                index: true
            }
        ]
    }
])

export default router