import React from "react";
import './LandingPage.css';
import BannerBackground from "./Assets/home-banner-background.png";
import BannerImage from "./Assets/bookTbookStorage.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

export default function Home (){
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Seus livros favoritos em um só lugar
          </h1>
          <p className="primary-text">
            Leia, desbrave e testemunhe os livros de nosso catálogo!
          </p>
          <button className="secondary-button">
            Confira agora <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};
