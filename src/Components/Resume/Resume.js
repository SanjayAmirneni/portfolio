import React,{useState} from "react";
import "./Resume.css"
import PDF from "../Pdf/Pdf"



function Resume(){

    const [flag,setFlag] = useState(false)

    function handleClick(){
        if(flag===false){
            setFlag(!flag)
        }else{
            setFlag(!flag)
        }
    }

    return(
        <div id="resume" className="resume__container">
            <h1 className="text-center text-white">Resume</h1>
            <div className="resume__btn">
            <button className="btn btn-dark text-center" onClick={()=>handleClick()}>View</button>
            </div>
            {flag&&<PDF />}
            
        </div>
    )
}


export default Resume;