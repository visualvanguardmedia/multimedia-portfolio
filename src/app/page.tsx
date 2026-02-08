import Hero from '@/components/sections/Hero';
import GrowthMetrics from '@/components/sections/GrowthMetrics';
import Portfolio from '@/components/sections/Portfolio';
import StillsGallery from '@/components/sections/StillsGallery';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <GrowthMetrics />
      <Portfolio />
      <StillsGallery />
      <About />
      <Contact />
    </main>
  );
}
