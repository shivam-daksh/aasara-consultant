import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MissionVision } from './components/MissionVision';
import { Services } from './components/Services';
import { CallToAction } from './components/CallToAction';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-roboto bg-gray-100">
      <Header />
      <Hero />
      <MissionVision />
      <Services />
      <CallToAction />
      <WhyChooseUs />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;