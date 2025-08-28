import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Applications from '@/components/Applications';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Applications />
      <Consultation />
      <Footer />
    </main>
  );
}
