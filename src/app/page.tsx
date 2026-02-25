import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import StillsGallery from '@/components/sections/StillsGallery';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <StillsGallery />
      <Portfolio />
    </main>
  );
}
