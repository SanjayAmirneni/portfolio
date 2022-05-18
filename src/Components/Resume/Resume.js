import React,{useState} from "react";
import "./Resume.css"
import PDF from "../Pdf/Pdf"
import { Paper } from "@material-ui/core";



function Resume(){

    const [flag,setFlag] = useState(false)

    const dlink = "https://drive.google.com/uc?export=download&id=1AIA16n0-JRxfHza6QDcV1oexQQZxo2Ar"
    const a = document.createElement('a')


    function handleClick(){
        if(flag===false){
            setFlag(!flag)
        }else{
            setFlag(!flag)
        }
    }

    function download(){
        console.log("clicked")
        a.href = dlink;
        a.click();
        console.log('clicked')
    }

    return(
        <div id="resume" className="resume__container">
            <h1 className="text-center text-white">Resume</h1>
            <div className="resume__btn">
            <div className="buttons">
            <button className="btn btn-light text-center" onClick={()=>handleClick()}>{!flag?"View":"Hide"}</button>
            <button className="btn btn-light text-center" onClick={download}>Download</button>
            </div>
            </div>
            <Paper className="paper">
            {flag&&<PDF />}
            </Paper>

            <div className="empty__div"></div>

        </div>
    )
}


export default Resume;