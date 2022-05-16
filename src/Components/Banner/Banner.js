import React from "react";
import img from "../../../src/sanjay.jfif"
import "./Banner.css"
import  TypeWriter  from "react-typewriter";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { IconButton } from "@mui/material";



function Banner(){

    return (
        <div className="banner__container">
            <div id="home" className="banner__body">
            <h3 className="size__10px"><TypeWriter typing={0.5}>{`Hi I'm`}</TypeWriter>
                <br></br>
                <strong className="size__40px"><TypeWriter typing={0.5}>{`Sanjay Amirneni`}</TypeWriter></strong>
                <br></br>
                <br></br>
                <TypeWriter typing={0.5}>{`I'm a FullStack Developer`}</TypeWriter>
                <br></br>
                <br></br>
                <TypeWriter typing={0.5}>{`Looking for Internship Opportunities`}</TypeWriter>
            </h3>
            <img className="img" src={img}></img>
            </div>
            <IconButton aria-label="down" color="info" className="center">
                <a href="#about">
                <ExpandMoreOutlinedIcon sx={{ fontSize: 60 }} className="white" />
                </a>
            </IconButton>

        </div>
    )
}


export default Banner;