import Navigation from './componentes/Navegation';
import Home from './componentes/Home';
import About from './componentes/About';
import Services from './componentes/Services';
import Experience from './componentes/Experience';
import Works from './componentes/Works';
import Blog from './componentes/Blog';
import Contact from './componentes/Contact';
//import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Home />
        <About /> 
        <Services /> 
        <Experience />
        <Works /> 
        <Blog /> 
        <Contact /> 
      </main>
    </div>
  );
}

export default App;
