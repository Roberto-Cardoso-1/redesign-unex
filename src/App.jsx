import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Admission from './components/Admission';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Campuses from './components/Campuses';
import Reviews from './components/Reviews';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white font-sans antialiased pt-20 overflow-x-hidden">
      <Header />
      <Hero />
      <Admission />
      <Courses />
      <Stats />
      <Campuses />
      <Reviews />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}