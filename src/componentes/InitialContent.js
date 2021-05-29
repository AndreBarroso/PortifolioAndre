import React from 'react';
import fotoPerfil from '../img/fotoAndre.JPG';

class initialContent extends React.Component {
  render() {
    return (
      <div >
        <img src={fotoPerfil} alt="fotoPerfil" class="fotoPerfil"/>
      </div>
    )
  }
}
export default initialContent;
