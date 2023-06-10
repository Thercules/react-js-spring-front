import React from "react";
import './LandingPage.css';

export default function Contact () {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Ficou com alguma dúvida?</h1>
      <h1 className="primary-heading">Deixe-nos ajuda-lo!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};
