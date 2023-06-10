import React from "react";
import './LandingPage.css';
import ProfilePic from "./Assets/thiago-image.png";
import { AiFillStar } from "react-icons/ai";

export default function Testimonial () {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testemunho.</p>
        <h1 className="primary-heading">Agradecimentos.</h1>
        <p className="primary-text">
        Estou imensamente orgulhoso(a) de ter concluído com sucesso o desenvolvimento do meu projeto fullstack. 
        Ter dominado as tecnologias Java, Spring (Hateoas, JPA, Security), ReactJS, Axios e Material Design é uma conquista que me enche de gratidão e satisfação. 
        Combinar a poderosa funcionalidade do backend em Java com a elegância e a usabilidade do frontend em ReactJS, utilizando as melhores práticas de segurança e comunicação entre as camadas, resultou em uma experiência incrível para os usuários. Sou grato(a) por ter tido a oportunidade de explorar e aplicar essas tecnologias de ponta, e estou animado(a) para compartilhar meu projeto com o mundo. Espero que ele inspire outros desenvolvedores a embarcar em jornadas semelhantes, criando soluções inovadoras que impulsionem o progresso tecnológico. 
        Agradeço a todos que me apoiaram ao longo dessa jornada e mal posso esperar para ver as possibilidades que o futuro reserva!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Desenvolvedor fullstack | Java | Spring | MongoDB | ReactJS | React Native | Angular | NodeJS 
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Thiago Hercules</h2>
      </div>
    </div>
  );
};
