import React from "react";
import Profile from './images/avatar.jpg'
const AboutUS = () => {
    return(
        <>

<div class="container-fluid colorTillFirstDiv position-relative">
        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#InstructorProfilenavabr">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="InstructorProfilenavabr">
                <ul class="navbar-nav mx-auto py-5">
                    <li class="nav-item ">
                        <a href="/" class="nav-link px-3 insprofile">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="/" class="nav-link px-3 insprofile">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a href="/" class="nav-link px-3 insprofile">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a href="/" class="nav-link px-3 active insprofile">About Us</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
        {/* <!-- Navbar instructor Profile Ends--> */}
        <div class="titleBackground  ">
            <h2 class="display-3">Web Design</h2>
            <h4 class="lead">Blogs</h4>
        </div>
        <div class="container-fluid borders">
            <div class="row sizeSecondDiv">
               
                <div class="col-sm-4">
                    <img src={Profile} class="titlePictureSetting " alt="" />
                </div>
                <div class="col-sm-8">
                    <p class="lead aboutmetext  py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nisi eius quia saepe 
                        recusandae corrupti repellendus accusamus voluptatum ullam suscipit nam, temporibus exercitationem 
                        officiis natus harum, deleniti iste ipsum perspiciatis.
                    Laudantium laboriosam cum, maiores ex 
                    </p>
                </div>
               
            </div>
    </div>
    </div>
    
    <div className="container-fluid">

            <div className="col-4">
                <h3>History</h3>
                <p>Long way to go</p>
                <p>Long way to go</p>
            </div>
            <div className="col-8"></div>
    </div>
        </>
    )
}

export default AboutUS 