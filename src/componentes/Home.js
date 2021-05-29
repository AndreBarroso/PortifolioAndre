import React from 'react';
import fotoPerfil from '../img/fotoAndre.JPG';

class Home extends React.Component {
  render() {
    return (
      <div >
        <img src={fotoPerfil} alt="fotoPerfil" class="fotoPerfil"/>
      </div>
    )
  }
}
export default Home;
