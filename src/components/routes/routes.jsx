import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Profile from "../profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/profile",
                element: <Profile/>
            }
        ]
    }
])

