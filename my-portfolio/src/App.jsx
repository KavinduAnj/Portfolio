import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      
      <section
        id="home"
      >
       <Home />
      </section>

      <section
        id="about"
      >
        <h1 className="text-2xl text-center font-semibold sm:text-3xl">About Me</h1>
        <About />
      </section>

      <section
        id="projects"
      >
        <h1 className="text-2xl text-center font-semibold sm:text-3xl">Projects</h1>
        <Projects />
      </section>

      <section
        id="contact"
        
      >
        <Contact />
      </section>
      
      <Footer />
    </>
  );
}

export default App;

