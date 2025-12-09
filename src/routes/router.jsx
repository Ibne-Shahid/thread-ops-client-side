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
import OrderForm from "../Pages/OrderForm/OrderForm";
import Payment from "../Pages/Payment/Payment";
import Dashboard from "../root-layouts/DashboardLayouts/Dashboard";
import PaymentSucces from "../Pages/PaymentSuccess/PaymentSucces";
import PaymentCancel from "../Pages/PaymentCancel/PaymentCancel";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProfile from "../Pages/MyProfile/MyProfile";
import ManageUsers from "../Pages/AdminPages/ManageUsers/ManageUsers";
import AdminAllProducts from "../Pages/AdminPages/AdminAllProducts/AdminAllProducts";
import AdminRoutes from "../Provider/AdminRoutes";
import AdminAllOrders from "../Pages/AdminPages/AdminAllOrders/AdminAllOrders";


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
            },
            {
                path: 'product-details/:id/order-form',
                element: <OrderForm></OrderForm>
            },
            {
                path: 'product-details/:id/order-form/payment',
                element: <Payment></Payment>
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
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                element: <DashboardHome></DashboardHome>,
                index: true
            },
            {
                path: 'payment-success',
                element: <PaymentSucces></PaymentSucces>
            },
            {
                path: 'payment-cancelled',
                element: <PaymentCancel></PaymentCancel>
            },
            {
                path: 'my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: 'my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'manage-users',
                element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
            },
            {
                path: 'all-products',
                element: <AdminRoutes><AdminAllProducts></AdminAllProducts></AdminRoutes>
            },
            {
                path: 'all-orders',
                element: <AdminRoutes><AdminAllOrders></AdminAllOrders></AdminRoutes>
            }
        ]
    }
])

export default router