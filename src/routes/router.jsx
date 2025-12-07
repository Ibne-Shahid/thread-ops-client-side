import { createBrowserRouter } from "react-router";
import RootLayout from "../root-layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AlProducts/AllProducts";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import AuthLayout from "../root-layouts/AuthLayouts/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoutes from "../Provider/PrivateRoutes";


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
            },
            {
                path: 'product-details/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router