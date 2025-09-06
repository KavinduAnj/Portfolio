import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
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
        className="h-screen flex items-center justify-center bg-gray-200"
      >
        <h1 className="text-5xl font-bold">About Section</h1>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-gray-300"
      >
        <h1 className="text-5xl font-bold">Projects Section</h1>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-400"
      >
        <h1 className="text-5xl font-bold">Contact Section</h1>
      </section>
      
      <Footer />
    </>
  );
}

export default App;

