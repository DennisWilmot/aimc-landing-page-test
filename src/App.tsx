import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './contexts/NotificationContext';
import NotificationContainer from './components/NotificationContainer';
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
import QuizExample from './components/QuizExample';

function LandingPage() {
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

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizExample />} />
        </Routes>
        <NotificationContainer />
      </Router>
    </NotificationProvider>
  );
}

export default App;
