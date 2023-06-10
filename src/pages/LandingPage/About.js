import React from "react";
import './LandingPage.css';
import AboutBackground from "./Assets/about-background.png";
import AboutBackgroundImage from "./Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function About () {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          A importância de um bom livro!
        </h1>
        <p className="primary-text">
          Conheça a T.Bookstore!
          Nosso objetivo é fornecer uma plataforma abrangente e acessível para os amantes de livros explorarem, descobrirem e compartilharem suas paixões literárias. 
          Sabemos que cada livro tem o poder de transportar os leitores para novos mundos, desencadear emoções e expandir horizontes, e queremos facilitar essa jornada para todos.
        </p>
        <p className="primary-text">
        Nossa biblioteca virtual conta com uma vasta coleção de obras-primas da literatura, desde clássicos atemporais até os lançamentos mais recentes. 
        Navegue em nossa extensa seleção de gêneros, incluindo romance, ficção científica, fantasia, mistério, biografias e muito mais. 
        Quer você esteja procurando por um romance emocionante, um livro inspirador ou uma leitura informativa, temos algo especial para cada leitor.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};


