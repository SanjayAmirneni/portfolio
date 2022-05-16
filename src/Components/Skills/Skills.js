import React from "react";
import "./Skills.css"

function Skills(){

    const skillAry = ['HTML5', 'CSS3','BOOTSTRAP','MATERIALUI','JAVASCRIPT','TYPESCRIPT','REACT','NODEJS','EXPRESSJS','SQL','NOSQL','PYTHON','FLASK','JAVA','AWS']
    return (
        <div className="skill__container">
            
            <h1 className="text-center skills_text">Skills</h1>
            <div className="skill_btns">
            {skillAry.map(element => {
                console.log(element)
                return (<button className="btn btn__color text-white">{element}</button>)
            })}
            </div>
        </div>
    )
}

export default Skills;