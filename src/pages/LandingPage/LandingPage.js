import React from "react";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import './LandingPage.css';

export default function LandingPage(){
    return(
        <div>
            <Home />
            <About />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
}