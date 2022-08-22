import React from "react";

const Navbar = () =>{
    return(
        <>
         <div class="container-fluid colortillfirstdiv position-relative">
        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light">
            <a href="" class="navbar-brand">Course Planet</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#InstructorProfilenavabr">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="InstructorProfilenavabr">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="" class="nav-link insprofile">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link active insprofile">Profile</a>
                    </li>
                    <li class="nav-item dropdown  mr-5 ">
                        <a href="#" class="nav-link dropdown-toggle insprofile" data-toggle="dropdown">
                            <i class="fas fa-user "></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right mr-5 ">
                            <a href="#" class="dropdown-item">Profile</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">My Courses</a>
                            <a href="#" class="dropdown-item">Cart</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">Notification</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">Sign Up</a>
                            <a href="#" class="dropdown-item">Login</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">Help</a>
                            <a href="#" class="dropdown-item">LogOut</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
     
    </div>
        </>
    )
}

export default Navbar 