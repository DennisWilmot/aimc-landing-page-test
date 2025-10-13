import React from 'react';
import HeroSection from './components/HeroSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import AIMasterclassTVSection from './components/AIMasterclassTVSection';
import SocialProofSection from './components/SocialProofSection';
import FreeSyllabusPreviewSection from './components/FreeSyllabusPreviewSection';
import UpgradePathsSection from './components/UpgradePathsSection';
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
      <WhatYouGetSection />
      <AIMasterclassTVSection />
      <FreeSyllabusPreviewSection />
      <SocialProofSection />
      <MeetTheInstructorsSection />
      <ValuePropositionSection />
      <ImagePreviews />
      <UpgradePathsSection />
      <FAQSection />
      <FinalCallSection />
      <Footer />
    </div>
  );
}

export default App;
