import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Footer from '@/components/footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
