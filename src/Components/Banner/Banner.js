import React from "react";
import img from "../../../src/sanjay.jfif"
import "./Banner.css"
import  TypeWriter  from "react-typewriter";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



function Banner(){

    return (
        <div className="banner__container">
            <div id="home" className="banner__body">
            <h3 className="size__40px margin_top"><TypeWriter typing={0.5}>{`Hi I'm`}</TypeWriter>
                <br></br>
                <strong className="size__40px"><TypeWriter typing={0.5}>{`Sanjay Amirneni`}</TypeWriter></strong>
                <br></br>
                <br></br>
                <TypeWriter className="size__40px" typing={0.5}>{`I'm a FullStack Developer`}</TypeWriter>
                <br></br>
                <br></br>
                <TypeWriter className="size__40px" typing={0.5}>{`Looking for Internship Opportunities`}</TypeWriter>
            </h3>
            <div className="icons">
            <img className="img" src={img}></img>
            <div>
            <a href="https://www.linkedin.com/in/sanjay-amirneni-3ba611140/" target="blank">
          <IconButton color="primary" >
          <LinkedInIcon className="size"></LinkedInIcon>
          </IconButton >
          </a>
          <a href="https://github.com/SanjayAmirneni" target="blank">
          <IconButton>
          <GitHubIcon className="white size" />
          </IconButton>
          </a>
          </div>
            </div>
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