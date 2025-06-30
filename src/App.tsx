import Footer from "./components/Footer";
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  useScrollAnimations();

  return (
    <div className="font-red-hat-display relative min-h-screen z-5 dark:bg-dark-800 dark:text-slate-200">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <main className="mx-8 lg:mx-24">
          <div className="scroll-reveal fade-only">
            <Home />
          </div>

          <div className="scroll-reveal delay-1">
            <About />
          </div>

          <div className="scroll-reveal delay-2">
            <Project />
          </div>

          <div className="scroll-reveal delay-3">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
