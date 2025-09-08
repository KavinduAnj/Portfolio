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
        className=''
      >
        <h1 className="p-4 text-2xl text-center font-semibold sm:text-3xl">About Me</h1>
        <About />
      </section>

      <section
        id="projects"
        className=''
      >
        <h1 className="p-4 text-2xl text-center font-semibold sm:text-3xl">Projects</h1>
        <Projects />
      </section>

      <section
        id="contact"
        className=''
      ><h1 className="p-4 text-2xl text-center font-semibold sm:text-3xl">Contact me</h1>
        <Contact />
      </section>
      
      <Footer />
    </>
  );
}

export default App;

