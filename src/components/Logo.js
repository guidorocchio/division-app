import React from 'react';
import { Link } from "react-router-dom";
import "./style-comp/logo.css"

const Logo = () => {
 

    return (
        <Link to="/pepepe" className="">
           <h1 className="logo header-item">Division Bell</h1>
        </Link>    
    )
}

export default Logo
