import React from "react";
import "./Experience.css"


function Experience(){
    return(
        <div className="experience__container">
            <h1 className="text-center text-black">Experience</h1>
            <div className="experience__cards">
            <div className="experience__card card border-white mb-3" >
            <div class="card text-center text-white exp__card">
                <div class="card-header font">
                         ASSOCIATE SYSTEM ENGINEER
                </div>
            <div class="card-body">
                <h5 class="card-title">TATA CONSULTANCY SERVICES</h5>
                <p class="card-title">MUMBAI</p>
                <h5 class="card-text font-weight-bold"> TASKS</h5>
                <div className="text-start">
                    <ul>
                <li class="card-text">Worked with react library to create reusable components throughout the application.</li>
                <li class="card-text">Developed web pages using HTML/HTML5, CSS, Bootstrap, JavaScript, React JS, Material UI, Node.js.</li>
                <li class="card-text">Worked on Authorization of User by using JWT Token</li>
                <li class="card-text">Implemented micro frontends in the web application.</li>
                <li class="card-text">Worked on data exchange and routing techniques between micro frontends.</li>
                <li class="card-text">Good knowledge on webpack configuration and its related plugins for micro frontend architecture.</li>
                <li class="card-text">Maintained states in the stores and dispatched the actions using redux.</li>
                <li class="card-text">Good knowledge on react-router and react hooks.</li>
                <li class="card-text">Experience in testing web services of SAOP and RESTful services using Postman.</li>
                <li class="card-text">Worked extensively in Agile methodology (2 weeks SCRUM).</li>
                </ul>
                </div>
            </div>
            <div class="card-footer text-muted">
            07/2019 - 06/2021
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}


export default Experience;