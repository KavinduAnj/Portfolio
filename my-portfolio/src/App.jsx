import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Global Background (Dot Pattern + Subtle Ambient Gradients & Glowing Orbs) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-slate-900/50 to-purple-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        {/* Ambient backlights for authentic frosted glass refraction */}
        <div className="absolute top-[20%] left-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-500/15 blur-[120px]"></div>
        <div className="absolute top-[45%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/15 blur-[140px]"></div>
        <div className="absolute top-[70%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-500/12 blur-[130px]"></div>
        <div className="absolute bottom-[-5%] right-[10%] w-[550px] h-[550px] rounded-full bg-purple-500/12 blur-[140px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <section id="home">
            <Home />
          </section>

          <section id="about" className="py-16">
            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 tracking-tight">About Me</h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
            <About />
          </section>

          <section id="projects" className="py-16">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 tracking-tight">Projects</h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
            <Projects />
          </section>

          <section id="contact" className="py-16">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 tracking-tight">Contact me</h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
            <Contact />
          </section>
        </main> 
        <Footer />
      </div>
    </div>
  );
}

export default App;

