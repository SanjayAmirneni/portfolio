import React, {useState,useEffect} from "react";
import { IconButton } from "@mui/material";
import './Header.css'


const Header = () => {

    const [black, setBlack] = useState(false)
    useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
          setBlack(true);
        }else{
          setBlack(false)
        }
      });
      return () =>{
        window.removeEventListener("scroll");
      };
    },[])
    return (
        <div className={`header_fixed ${black?'header_black':''}`}>
        <ul type="" className="header__list">
            <IconButton >
                <a href="#home" className="white">
            <li className="white">Home</li>
            </a>
            </IconButton>
            <IconButton >
                <a href="#about" className="white">
            <li className="white">About</li>
            </a>
            </IconButton>
            <IconButton >
                <a href="#resume" className="white">
            <li className="white">Resume</li>
            </a>
            </IconButton>
            <IconButton >
                <a href="#contact" className="white">
            <li className="white">ContactMe</li>
            </a>
            </IconButton>
        </ul>
        </div>
    )
}

export default Header;