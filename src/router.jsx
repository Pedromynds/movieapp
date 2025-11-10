import { createBrowserRouter } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import Layout from "./pages/Layout";
import Favoritos from "./pages/favoritopage/FavoritePage";
import EmAlta from "./pages/EmAlta/EmAlta";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/favoritos",
                element: <Favoritos />
            },
            {
                path: "/emAlta",
                element: <EmAlta />
            }
        ]
    } 

])