import React from "react";
import './LandingPage.css';
import Logo from "./Assets/LogoVB.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Footer () {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhar</span>
          <span>Serviços</span>
          <span>Testemunho</span>
          <span>Contato</span>
        </div>
        <div className="footer-section-columns">
          <span>(99) 9.9999-9999</span>
          <span>tbookstore@gmail.com</span>
          <span>tbookstore.com</span>
          <span>contact@tbookstore.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};
