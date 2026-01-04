import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
