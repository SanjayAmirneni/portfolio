import React from "react";
import "./Projects.css"

function Projects(){

    return (
        <div className="projects__container">
            <h1 className="text-center text-black">Projects</h1>
            <div className="projects__cards ">
            <div className="projects__card card border-secondary mb-3 " >
            <div class="card text-center text-white prjt__card">
                <div class="card-header font">
                         NETFLIX CLONE
                </div>
            <div class="card-body">
                <h5 class="card-title">HTML5,CSS3,JAVASCRIPT,REACTJS</h5>
                <p class="card-title">Created Netflix webpage clone which displays real-time data and allows us to see trailers</p>

            </div>
            <div class="card-footer text-muted">
            https://netflix-clone-sanjayamirneni-1.netlify.app/
            </div>
            </div>
            </div>


            <div className="projects__card card border-secondary mb-3">
            <div class="card text-center text-white prjt__card">
                <div class="card-header font">
                        AMAZON CLONE
                </div>
            <div class="card-body">
                <h5 class="card-title">HTML5,CSS3,JAVASCRIPT,REACTJS,REDprjtFIRESTORE,STRIPE</h5>
                <p class="card-title">Created Amazon.com webpage clone in which we can signin, order items and do payments</p>
            </div>
            <div class="card-footer text-muted">
            https://amazon-clone-sanjayamirneni-1.netlify.app/
            </div>
            </div>
            </div>


            <div className="projects__card card border-secondary mb-3">
            <div class="card text-center text-white prjt__card">
                <div class="card-header font">
                         Diploma
                </div>
            <div class="card-body">
                <h5 class="card-title">Electronics and Communication</h5>
                <p class="card-title">Govt. Polytechnic Vijayawada</p>
                <p class="card-text">Vijayawada</p>
                <p class="card-text">06/2013 - 04/2016</p>
            </div>
            <div class="card-footer text-muted">
                Percentage - 89%
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Projects;