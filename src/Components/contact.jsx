import React from "react";
import contact from "./images/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faClipboard } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="flex mb-4 mt-4">
            <span className="main-h fst-italic fs-5 text-muted ">OH, Hello</span>
            <span className="date fst-italic fs-5 text-muted float-end">08/08/22</span>
          </div>
          {/*image  */}
          <div className="img">
            <img className="contact" src={contact} />
          </div>
        </div>
        {/* col2 */}
        <div className="col-md-4 mt-8">
          {/* welcome */}
          <div className="welcome list-group-flush">
            <h1 className="fst-italic fs-3 text-black mt-8">Welcome</h1>
            <p className="text-muted mt-4 mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus tempora tenetur explicabo architecto aperiam vitae
              voluptatibus placeat doloribus quisquam eveniet!
            </p>
            {/* icon */}

            <div className="icon pt-12 mt-4 mb-4">
              <FontAwesomeIcon
                icon={faInstagram}
                className=" mx-3 h-9 w-6 text-black"
              />
              {/* facebook */}
              <FontAwesomeIcon icon={faFacebook} className=" mx-3 h-9 w-6" />
              {/* twitter */}
              <FontAwesomeIcon icon={faTwitter} className=" mx-3 h-9 w-6" />
              {/* linkdin */}
              <FontAwesomeIcon icon={faLinkedin} className=" mx-3 h-9 w-6 " />
            </div>

            {/* categories */}
            <div className="cat">
              <h1 className="fst-italic fs-3 text-black">Categories</h1>
              <ul className="list">
                <li>Art</li>
                <li>Inspiration</li>
                <li>Life</li>
              </ul>
              {/* website */}
              <a className="search" href="/">
                Search A Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* welcome col */}
    </>
  );
};
export default Contact;
