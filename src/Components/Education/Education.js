import React from "react";
import "./Education.css"


function Education(){
    return(
        <div className="education__container">
            <h1 className="text-center text-black">Education</h1>
            <div className="education__cards ">
            <div className="education__card card border-secondary mb-3 " >
            <div class="card text-center text-white edu__card">
                <div class="card-header font">
                         Master of Science
                </div>
            <div class="card-body">
                <h5 class="card-title">Computer Science</h5>
                <p class="card-title">University of Central Missouri</p>
                <p class="card-text">Warrensburg</p>
                <p class="card-text">08/2021 - Present</p>
            </div>
            <div class="card-footer text-muted">
                 CGPA - 3.5
            </div>
            </div>
            </div>


            <div className="education__card card border-secondary mb-3">
            <div class="card text-center text-white edu__card">
                <div class="card-header font">
                         Bachelor of Technology
                </div>
            <div class="card-body">
                <h5 class="card-title">Electronics and Communication</h5>
                <p class="card-title">R.V.R&J.C College of Engineering</p>
                <p class="card-text">Guntur</p>
                <p class="card-text">06/2016 - 05/2019</p>
            </div>
            <div class="card-footer text-muted">
                 CGPA - 8.7
            </div>
            </div>
            </div>


            <div className="education__card card border-secondary mb-3">
            <div class="card text-center text-white edu__card">
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


export default Education;