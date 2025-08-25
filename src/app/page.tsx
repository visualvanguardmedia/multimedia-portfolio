import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}
