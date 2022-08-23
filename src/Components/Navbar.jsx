import React from "react";
import cardImage from './images/background.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faClipboard
} from "@fortawesome/free-solid-svg-icons";

import {
    faInstagram,
    faFacebook,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () =>{
    return(
        <>
        <header class="navbar navbar-expand-lg ">
                <div class="container-fluid mt-3 ">
                    <a class="navbar-brand mx-auto  text-body display-1 fs-1" href="/">Blogs</a>
                </div>    
        </header>

        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid ">
               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
               
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav  mx-auto my-2 fs-5 ">
                    <a class="nav-link text-body active " aria-current="page" href="/">Home</a>
                    <a class="nav-link  text-body" href="/">Blogs</a>
                    <a class="nav-link  text-body" href="/">Contact Us</a>
                    <a class="nav-link  text-body"  href="/">About Us</a>
                  </div>
                </div>
              </div>

        </nav>
        <hr  class="border border-body mx-5 "/>
        {/* Navbar Ends */}

        <div class="px-0 mb-5">
        <div class="row ">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-centered">
                <div class="textAndImage">
                   <h2>Best Blogs</h2>
                </div>
            </div>
        </div>
    </div>
     
<div className="container-fluid">
<div className="row mt-5">
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="card border-0">
                <img  src={cardImage}  className=" mx-auto mt-2 " style={{height:'10rem' , width:'20rem'}}/>
                <div className="mx-5 px-5">
                <h5 className="text-center my-2 ">Trends for Front End </h5>
                    <p className="text-center" >Some quick example text to build on the card title 
                    and make up the bulk of the card's content.</p>
                    <a href="/"><h4 className="text-center text-decoration-none  ">Read More</h4></a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="card border-0">
                <img  src={cardImage}  className=" mx-auto mt-2 " style={{height:'10rem' , width:'20rem'}}/>
                <div className="mx-5 px-5">
                <h5 className="text-center my-2 ">Trends for Front End </h5>
                    <p className="text-center" >Some quick example text to build on the card title 
                    and make up the bulk of the card's content.</p>
                    <a href="/"><h4 className="text-center text-decoration-none  ">Read More</h4></a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="card border-0">
                <img  src={cardImage}  className=" mx-auto mt-2 " style={{height:'10rem' , width:'20rem'}}/>
                <div className="mx-5 px-5">
                <h5 className="text-center my-2 ">Trends for Front End </h5>
                    <p className="text-center" >Some quick example text to build on the card title 
                    and make up the bulk of the card's content.</p>
                    <a href="/"><h4 className="text-center text-decoration-none  ">Read More</h4></a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="card border-0">
                <img  src={cardImage}  className=" mx-auto mt-2 " style={{height:'10rem' , width:'20rem'}}/>
                <div className="mx-5 px-5">
                <h5 className="text-center my-2 ">Trends for Front End </h5>
                    <p className="text-center" >Some quick example text to build on the card title 
                    and make up the bulk of the card's content.</p>
                    <a href="/"><h4 className="text-center text-decoration-none  ">Read More</h4></a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="card border-0">
                <img  src={cardImage}  className=" mx-auto mt-2 " style={{height:'10rem' , width:'20rem'}}/>
                <div className="mx-5 px-5">
                <h5 className="text-center my-2 ">Trends for Front End </h5>
                    <p className="text-center" >Some quick example text to build on the card title 
                    and make up the bulk of the card's content.</p>
                    <a href="/"><h4 className="text-center text-decoration-none  ">Read More</h4></a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="card border-0">
                <img  src={cardImage}  className=" mx-auto mt-2 " style={{height:'10rem' , width:'20rem'}}/>
                <div className="mx-5 px-5">
                <h5 className="text-center my-2 ">Trends for Front End </h5>
                    <p className="text-center" >Some quick example text to build on the card title 
                    and make up the bulk of the card's content.</p>
                    <a href="/"><h4 className="text-center text-decoration-none  ">Read More</h4></a>
                </div>
                </div>
            </div>
            
  
        </div> 
</div>
      {/* Footer */}

{/* part 01 */}

            {/* part 2 */}
            <section className="bg-secondary p-5 mt-5">
                <h2 className="text-sm text-white text-center fw-normal  font-serif">Let's get SOCIAL  </h2>
                {/* icons */}
                <div className=" text-center ml-[28rem] pt-12">
                    <FontAwesomeIcon icon={faInstagram} className=" mx-3 h-9 w-6 text-white" />
                    {/* facebook */}
                    <FontAwesomeIcon icon={faFacebook} className=" mx-3 h-9 w-6 text-white" />
                    {/* twitter */}
                    <FontAwesomeIcon icon={faTwitter} className=" mx-3 h-9 w-6 text-white" />
                    {/* linkdin */}
                    <FontAwesomeIcon icon={faLinkedin} className=" mx-3 h-9 w-6 text-white" />
                </div>

               
            </section>
      {/* Footer */}

        </>
    )
}

export default Navbar 