import React from "react";
import "./Projects.css"

function Projects(){

    return (
        <div className="projects__container">
            <h1 className="text-center text-black">Projects</h1>
            <div className="projects__cards ">
            <div className="projects__card card border-secondary mb-3 " >
            <div className="card text-white prjt__card">
                <div className="card-header text-center font">
                         NETFLIX CLONE
                </div>
            <div className="card-body overflow-auto">
                <h5 className="card-title">HTML5,CSS3,JAVASCRIPT,REACTJS</h5>
                <ul className="card-title">
                    <li className="card-title text-left">Designed Netflix clone using ReactJS and CSS.</li>
                    <li className="card-title text-left">Used TMDB API to load real time data of Netflix shows and movies by calling it with axios and displayed it on the webpage.</li>
                    <li className="card-title text-left">Implemented redux to store and exchange data in the application.</li>
                </ul>

            </div>
            <div className="text-center ">
            <a className=" a_link card-footer text-center text-muted " href="https://netflix-clone-sanjayamirneni-1.netlify.app/" target="blank">https://netflix-clone-sanjayamirneni-1.netlify.app/</a>
            </div>
            </div>
            </div>


            <div className="projects__card card border-secondary mb-3 " >
            <div className="card text-white prjt__card">
                <div className="card-header text-center font">
                Searchrecipe
                </div>
            <div className="card-body overflow-auto">
                <h5 className="card-title">HTML5,CSS3,JAVASCRIPT</h5>
                <ul className="card-title">
                    <li className="card-title text-left">Developed a single page web application using HTML, CSS, JavaScript.</li>
                    <li className="card-title text-left">Developed the application using MVC Architecture.</li>
                    <li className="card-title text-left">Used third party api’s to fetch information and displayed the information in the application.</li>
                </ul>

            </div>
            <div className="text-muted">
            <p className="card-footer text-center"></p>
            </div>
            </div>
            </div>


            <div className="projects__card card border-secondary mb-3 " >
            <div className="card text-white prjt__card">
                <div className="card-header text-center font">
                E-Commerce Website
                </div>
            <div className="card-body overflow-auto">
                <h5 className="card-title">HTML5, CSS3, JAVASCRIPT,REACTJS, NODEJS, EXPRESSJS, MONGODB ATLAS</h5>
                <ul className="card-title">
                    <li className="card-title text-left">An online shopping site built with React, react-router, redux, axios, NodeJS, Express, MongoDB Atlas.</li>
                    <li className="card-title text-left">User can SignIn, SignUp, Signout, search for products, view them, add them into cart, can modify the cart, purchase the products and can view the purchased products in returns page.</li>
                    <li className="card-title text-left">Implemented session management in the application.</li>
                    <li className="card-title text-left">Implemented debouncing and lazy loading concepts to optimize the performance of application.</li>
                    <li className="card-title text-left">Integrated STRIPE API with the application to perform real time payments.</li>
                </ul>

            </div>
            <div className="text-muted">
            <p className="card-footer text-center"></p>
            </div>
            </div>
            </div>

            <div className="projects__card card border-secondary mb-3 " >
            <div className="card text-white prjt__card">
                <div className="card-header text-center font">
                Personal Storage Vault:
                </div>
            <div className="card-body overflow-auto">
                <h5 className="card-title">HTML5, CSS3, JAVASCRIPT,REACTJS, AWS</h5>
                <ul className="card-title">
                    <li className="card-title text-left">Developed a serverless application using ReactJS as frontend and Aws Amplify as backend.</li>
                    <li className="card-title text-left">User can SignIn, SignUp, Signout, store the data in cloud and can access it anywhere and anytime..</li>
                    <li className="card-title text-left">User can also download, delete, or view the data in the application.</li>
                    <li className="card-title text-left">Used AWS services like Cognito for user signin/out, S3 for data storage, DynamoDB for metadata storage, AppSync for GraphQL API, KMS for encryption, Cloud Front for accessing the data, Amplify for hosting the web application.</li>
                </ul>

            </div>
            <div className="text-muted">
            <p className="card-footer text-center"></p>
            </div>
            </div>
            </div>


            </div>
        </div>
    )
}

export default Projects;