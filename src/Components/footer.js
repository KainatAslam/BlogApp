import React from "react";
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




const Footer = () => {
    return (
        <>
            {/* part 01 */}
            <div className="text-danger fw-bold fs-2 text-decoration-underline text-center p-10">
                Dig Our Style? Let's Work Together!</div>
            {/* part 2 */}
            <section className="bg-secondary p-32">
                <h2 className="text-sm text-white text-center fw-normal  font-serif">SOCIALIZE WITH SOCIAL </h2>
                {/* icons */}
                <div className="icon ml-[28rem] pt-12">
                    <FontAwesomeIcon icon={faInstagram} className=" mx-3 h-9 w-6 text-white" />
                    {/* facebook */}
                    <FontAwesomeIcon icon={faFacebook} className=" mx-3 h-9 w-6 text-white" />
                    {/* twitter */}
                    <FontAwesomeIcon icon={faTwitter} className=" mx-3 h-9 w-6 text-white" />
                    {/* linkdin */}
                    <FontAwesomeIcon icon={faLinkedin} className=" mx-3 h-9 w-6 text-white" />
                </div>

                {/* projects */}
                <div className="prt">
                    <h2 className="text-sm text-white text-center fw-normal  mt-7 font-serif">PRT PROJECTS </h2>
                </div>
                {/* camera */}
                <div className="icon ml-[31rem] pt-12">
                    <FontAwesomeIcon icon={faCamera} className=" mx-3 h-9 w-6 text-white" />
                    <FontAwesomeIcon icon={faClipboard} className=" mx-3 h-9 w-6 text-white" />
                </div>
            </section>
        </>
    );
};
export default Footer;