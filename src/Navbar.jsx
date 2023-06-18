import { isValidElement, useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './Navbar.css';

function Navbar(){
    const [darkMode,setDarkMode]=useState(0);
    // isDarkMode=1;
    function handleClick(){
        setDarkMode((curr)=>{
            const bodyEle=document.getElementsByTagName("body")[0];
            if(!curr){
                bodyEle.classList.add("DarkMode");
            }
            else{
                bodyEle.classList.remove("DarkMode");
            }
            return !curr;
        });
    }



    return (
        <nav className="Navbar">
        <h2>Where is the world?</h2>
        {(!darkMode)?<div onClick={handleClick}  className="ModeIcon"><DarkModeIcon/><h4>Dark</h4></div>:<div onClick={handleClick} className="ModeIcon"><LightModeIcon/><h4>Light</h4></div>}
        </nav>
    );

}

export default Navbar;