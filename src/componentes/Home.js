import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import fotoPerfil from '../img/fotoAndre.JPG';

class Home extends React.Component {
  render() {
    return (
      <section id="home" class="allHightScreen home ">
        <figure htmlFor="fotoPerfil" className="flexColumunAlign">
          <img src={fotoPerfil} alt="fotoPerfil" class="circleImgs" width="100" id="fotoPerfil"/>
          <legend>André Barroso</legend>
        </figure>
        <p>Sou desenvolvedor web e engenheiro de automação</p>
        <section class="iconsHome">
          <div><FontAwesomeIcon icon={faLinkedin} size="2x"/></div>
          <div><FontAwesomeIcon icon={faGithub} size="2x" /></div>
          <div><FontAwesomeIcon icon={faWhatsapp} size="2x"/></div>
        </section> <br />
        <div>
          <button type="button" class="btn btn-danger">Contacte-me</button>
        </div>
      </section>
    )
  }
}
export default Home;
