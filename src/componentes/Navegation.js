import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav class="header">
        <ul data-testid ="mainNav">
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Experiencias</li>
          <li>Trabalhos</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
