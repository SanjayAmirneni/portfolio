import React,{useState,useEffect} from "react";
import "./About.css"
import AboutCard from "../AboutCard/AboutCard";
import EducationImg from "../../../src/education.svg"
import Work from "../../../src/work.svg"
import SkillsImg from "../../../src/skills.svg"
import ProjectsImg from "../../../src/projects.svg"
import Education from "../Education/Education"
import Experience from "../Experience/Experience"
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
// import SchoolIcon from '@mui/icons-material/School';


function About(){

    const [Element,setElement] = useState("");
    const [False,setFalse] = useState(false)
    const [width,setWidth] = useState(window.innerWidth)
    const [comp,setComp] = useState("");
    const [stir,setStir] = useState("");
    const [el,setEl] = useState("");
    const [clck,setClck]=useState(false);

    useEffect(()=>{
    
        if(False===false&&comp!==stir){
            setFalse(true)
            setElement(el)
            setComp(stir)
        }
        else if(comp===stir){
            setFalse(false)
            setElement(null)
        }
        setWidth(window.innerWidth)

        console.log('*********************');
        console.log(False)

    },[clck])


    function handleClick(ele,str){


        setStir(str)
        setEl(ele)

        // console.log(str)
        // console.log(comp)
        // console.log(False)

        if(False===false){
            setComp("")
        }
        else if(comp!==str){
            setFalse(false)
        }

        setClck(!clck)

        // console.log(False)
    }

    return (
        <div id="about" className="about__section">
        <div className="about__container">
            <h1 className="about__header">About Me</h1>

            <h3 className="aboutme__text">Highly motivated and self-driven learner who loves working in a fast-paced environment. Always eager to learn new technologies to solve problems more effectively.</h3>
            <div className="about__body">
                <div onClick={()=>handleClick(<Education />,"edu")}>
            <AboutCard   value="Education" img={EducationImg}    />
            {(comp==="edu")&&width<500&&False&&Element}
            
            </div>
            <div onClick={()=>handleClick(<Experience />,"exp")}>
            <AboutCard value="Experience" img={Work}  />
            {(comp==="exp")&&width<500&&False&&Element}
            </div>
            <div onClick={()=>handleClick(<Skills  />,"skl")}>
             <AboutCard value="Skills" img={SkillsImg}/>
             {(comp==="skl")&&width<500&&False&&Element}
            </div >
            <div  onClick={()=>handleClick(<Projects  />,"prjt")}>          
                  <AboutCard value="Projects" img={ProjectsImg} />  
                  {(comp==="prjt")&&width<500&&False&&Element}
            </div>

            </div>
        </div>

        <div>
             {width>500?False&&Element:""}
        </div>
        </div>
    )
}

export default About;