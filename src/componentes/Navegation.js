import React from 'react';
import { link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav class="navegation">
        <section>
          <ul data-testid ="mainNav listDecoration">
            <li class="listDecoration"><a href="#home">Home</a></li> 
            <li class="listDecoration"><a href="#sobre">Sobre</a></li>
            <li class="listDecoration">Serviços</li>
            <li class="listDecoration">Experiências</li>
            <li class="listDecoration">Trabalhos</li>
            <li class="listDecoration">Blog</li>
            <li class="listDecoration">Contato</li>
          </ul>
        </section>
      </nav>
    )
  }
}

export default Navigation;
