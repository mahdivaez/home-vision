import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import BrandLogos from './components/BrandLogos';
// import TrustIcons from './components/TrustIcons';
import Packages from './components/Packages';
import AddOns from './components/AddOns';
import LeadMagnets from './components/LeadMagnets';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import UrgencySection from './components/UrgencySection';
import ContactForm from './components/ContactForm';
import StickyBar from './components/StickyBar';
import Footer from './components/Footer';
import LightingControl from './components/LightingControl';
import VoiceCommandService from './components/VoiceCommandService';
import MotorizedShades from './components/MotorizedShades';
import SmartDoorLock from './components/SmartDoorLock';
import SmartLighting from './components/SmartLighting';
import Speakers from './components/Speakers';
import SmartThermostat from './components/SmartThermostat';
import SecuritySystem from './components/SecuritySystem';
import HomeTheater from './components/HomeTheater';
import HomeAutomation from './components/HomeAutomation';
// import Speakers from './components/Speakers';
const AppContainer = styled.div`
  position: relative;
`;

function App() {
  return (
    <AppContainer>
      <Hero />
      <About />
      <BrandLogos />
      {/* <TrustIcons /> */}
      <Packages />
      <AddOns />
      {/* <LeadMagnets /> */}
      {/* <LightingControl /> */}
      <VoiceCommandService />
      <MotorizedShades />
      <SmartDoorLock /> 
      <SmartLighting />
      {/* <SecuritySystem /> */}
      <Speakers />
      {/* <SmartThermostat /> */}
      <HomeTheater />
      {/* <SocialProof /> */}
      <FAQ />
      <UrgencySection />
      <ContactForm />
      <StickyBar />
      <Footer />
    </AppContainer>
  );
}

export default App;
