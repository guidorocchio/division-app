import React, {useState} from 'react';
import * as iconsFa from "react-icons/fa";
import * as iconsAi from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from './data/SidebarData'
import "./style-comp/Navbar.css";
import { IconContext } from 'react-icons';
import Logo from './Logo';

const Navbar = () => {
    const [sidebar, setSidebar]= useState(false);
    const showSidebar= ()=> setSidebar(!sidebar); 

        return (
            <div className="header">
            <IconContext.Provider value={{ color:"black"}}>

                <div className="navbar">
                    <Logo className="header-item"/>
                    <form>
                        <input className="browser" value="browser"></input>
                    </form>
                    <ul className="nav-button">
                        {SidebarData.map((item, index)=>{
                                let firstTwo = [];
                                let oneOfTwo = "";
                                if(index<2){
                                    oneOfTwo = <li key={index} className={item.cName}>
                                                    <Link to={item.path}>
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                    firstTwo.push(oneOfTwo);
                                }
                                return[...firstTwo]
                            
                            })
                        }
                    </ul>
                    
                    <Link to="#" className="menu-bars">
                        <iconsFa.FaBars onClick={showSidebar}/>
                    </Link>
                </div>  

                <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars react-icon">
                                <iconsAi.AiOutlineClose/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index)=>{
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>   
            </div>
            
        );

    }
    


export default Navbar;
