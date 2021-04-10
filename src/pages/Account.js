import React, {useState} from 'react';
import "./pages-styles/Account.css";
import LoginForm from "../components/LoginForm";

const Account = () => {
    
    const [logOrSub, setLogOrSub]= useState("Log");


    return (
        <div className="account">
            <LoginForm/>          
        </div>
    )
}

export default Account;



