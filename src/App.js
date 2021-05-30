import Navigation from './componentes/Navegation';
import Home from './componentes/Home';
import About from './componentes/About';
import Services from './componentes/Services';
import Experience from './componentes/Experience';
import Works from './componentes/Works';
//import Blog from './componentes/Blog';
import Contact from './componentes/Contact';
import './bootstrap/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="allContent">
      <Navigation />
      <main className="testa">
        <Home />
        <About /> 
        <Services /> 
        <Experience />
        <Works /> 
        <Contact /> 
      </main>
    </div>
  );
}

export default App;
