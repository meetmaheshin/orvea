import Header from '../components/Header';
import Hero from '../components/Hero';
import Properties from '../components/Properties';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <Properties />
      <About />
      <Process />
      <Testimonials />
      <Benefits />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default HomePage;
