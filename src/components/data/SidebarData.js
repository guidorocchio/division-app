import React from 'react';
import * as iconsFa from "react-icons/fa";
import * as iconsAi from "react-icons/ai";


export const SidebarData= [
    {
        title: 'Carrito',
        path: "/chart",
        icon:<iconsFa.FaCartPlus/>,
        cName: 'nav-text',
        iconCName: "icons"
    },
    {
        title: 'Ingresar',
        path: "/account",
        icon:<iconsAi.AiOutlineLogin/>,
        cName: 'nav-text',
        iconCName: "icons"

    },
    {
        title: 'Home',
        path: "/",
        icon:<iconsAi.AiFillHome/>,
        cName: 'nav-text',
        iconCName: "icons"

    },
    {
        title: 'Productos',
        path: "/products",
        icon:<iconsFa.FaTshirt/>,
        cName: 'nav-text',
        iconCName: "icons"

    },


]