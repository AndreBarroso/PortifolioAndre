import fotoPerfil from './img/fotoAndre.JPG';
import './App.css';

function App() {
  return (
    <div class="all">
      <section class="init">
        <nav class="header">
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Seriços</li>
            <li>Experiencias</li>
            <li>Trabalhos</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>
        </nav>
      </section>
      <main class="content">
        <img src={fotoPerfil} alt="fotoPerfil" class="fotoPerfil"/>
      </main>
    </div>
  );
}

export default App;
