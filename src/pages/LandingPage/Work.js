import React from "react";
import './LandingPage.css';
import BookIcon from "./Assets/book-image-icon.png";
import InkIcon from "./Assets/ink-image-icon.png";
import Book2 from "./Assets/book-image-icon2.png";

export default function Work () {
  const workInfoData = [
    {
      image: BookIcon,
      title: "Escolha seu livro!",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: InkIcon,
      title: "Descubra o autor",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Book2,
      title: "Viaje pela imensidão",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Serviços</p>
        <h1 className="primary-heading">Qual o nosso objetivo com o leitor? Simples!</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
