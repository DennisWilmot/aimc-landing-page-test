import React from 'react';
import HeroSection from './components/HeroSection';
import SocialProofSection from './components/SocialProofSection';
import MeetTheInstructorsSection from './components/MeetTheInstructorsSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import ImagePreviews from './components/ImagePreviews';
import FAQSection from './components/FAQSection';
import FinalCallSection from './components/FinalCallSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <SocialProofSection />
      <MeetTheInstructorsSection />
      <ValuePropositionSection />
      <ImagePreviews />
      <FAQSection />
      <FinalCallSection />
      <Footer />
    </div>
  );
}

export default App;
