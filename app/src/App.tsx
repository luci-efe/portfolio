import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { Contact } from '@/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
