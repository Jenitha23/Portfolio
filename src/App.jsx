// src/App.jsx
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Certifications from './sections/Certifications/Certifications';
import Contact from './sections/Contact/Contact';
import './index.css';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;