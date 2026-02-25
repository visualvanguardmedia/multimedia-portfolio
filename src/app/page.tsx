import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import StillsGallery from '@/components/sections/StillsGallery';
import Portfolio from '@/components/sections/Portfolio';
import Philosophy from '@/components/sections/Philosophy';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-void min-h-screen text-ghost font-sans selection:bg-accent selection:text-void">
      {/* SVG Noise Overlay */}
      <svg className="noise-overlay" aria-hidden="true">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <Header />
      <Hero />
      <Skills />
      <StillsGallery />
      <Portfolio />
      <Philosophy />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
