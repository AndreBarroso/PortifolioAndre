import React from 'react';
import fotoPerfil from '../img/fotoAndre.JPG';

class About extends React.Component {
  render() {
    return ( 
    <section id="sobre" className="allHightScreen contentAboutMe">
      <h1>Sobre Mim</h1>
      <div class="grow1 flexRowsCenterTags">
        <div>
          <div class="flexRowsCenterTags">
            <figure >
              <img src={fotoPerfil} alt="fotoPerfil" class="circleImgs" width="150" id="fotoPerfil"/>
            </figure>
            <div>
              <p>Sou Engenheiro de Controle e Automação pela PUC-Rio e atualmente curso 
                Análise e Desenvolvimento de Sistemas Full-Stack pela Trybe. 
                Prezo pela boa convivência interpessoal e profissional, colaboração, dedicação,
                aprendizado contínuo e foco em resultados.
              </p>
              <button type="button" class="btn btn-danger">Download-CV</button>
            </div>
          </div>
        </div>
        </div>
    </section>
    )
  }
}
export default About;
