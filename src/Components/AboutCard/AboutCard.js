import React,{useState,useEffect} from "react";

import "./AboutCard.css"

function AboutCard(props){


    // const [Element,setElement] = useState("");
    // const [False,setFalse] = useState(false)

    // function handleClick(ele){
    //    if(False===false){
    //        setFalse(!False)
    //        setElement(ele)
    //    }
    //    else{
    //        setFalse(!False)
    //        setElement(null)
    //    }
    // }
    return(
        <div className="aboutcard__section">
        <div className="aboutcard__container card border-secondary mb-3 ">
            <div className="  card_header  text-center">
                <img className="aboutcard__img" src={props.img}></img>
            </div>
            <div className="card-body aboutcard__body">
            <h1 >{props.value}</h1>
            </div>
            {/* <div className="card-footer text-center">
            {/* <button className="btn btn-dark aboutcard__button" onClick={()=>handleClick(props.ele)}>View</button> */}
            {/* </div>  */}
   
        </div>
        {/* <div>
             {Element}
        </div> */}
        </div>
    )
}



export default AboutCard;