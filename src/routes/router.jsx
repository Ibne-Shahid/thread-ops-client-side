import { createBrowserRouter } from "react-router";
import RootLayout from "../root-layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AlProducts/AllProducts";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                index: true
            },
            {
                path: 'all-products',
                element: <AllProducts></AllProducts>
            },
            {
                path: 'about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router