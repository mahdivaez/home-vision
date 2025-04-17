import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Styled Components
const SpeakersSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #f5f7fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 10% 20%, rgba(216, 223, 233, 0.4) 0%, rgba(255, 255, 255, 0) 90%);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #2c3e50 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  color: #4a5568;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out forwards;
  opacity: 0;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: linear-gradient(135deg, #4a5568 0%, #2c3e50 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  font-size: 24px;
  animation: ${pulse} 3s ease-in-out infinite;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #2c3e50;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4a5568;
`;

const Showcase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 100px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ShowcaseImageContainer = styled.div`
  position: relative;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: ${float} 6s ease-in-out infinite;
  
  @media (max-width: 900px) {
    height: 400px;
  }
`;

const ShowcaseContent = styled.div`
  padding: 20px;
`;

const ShowcaseTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const ShowcaseDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 30px;
`;

const FeatureList = styled.ul`
  margin-bottom: 30px;
  padding-left: 20px;
`;

const FeatureItem = styled.li`
  font-size: 16px;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 10px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4a5568 0%, #2c3e50 100%);
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #2c3e50 0%, #4a5568 100%);
  border-radius: 12px;
  padding: 60px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const CTATitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 30px;
`;

const ArchitecturalSpeakers = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [volume, setVolume] = useState(60);
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [activePreset, setActivePreset] = useState("natural");
  
  const presets = [
    { id: "natural", name: "Natural" },
    { id: "cinema", name: "Cinema" },
    { id: "music", name: "Music" },
    { id: "custom", name: "Custom" }
  ];
  
  const handlePresetClick = (preset: any) => {
    setActivePreset(preset.id);
  };
  
  // Create random heights for visualization
  const soundBars = Array.from({ length: 20 }, () => ({
    height: Math.floor(Math.random() * 30) + 5,
    delay: Math.random() * 0.5
  }));
  
  const features = [
    {
      icon: "��",
      title: "Invisible Integration",
      description: "Speakers that blend seamlessly with your walls and ceilings, preserving your interior design aesthetics."
    },
    {
      icon: "🎵",
      title: "Premium Sound Quality",
      description: "High-fidelity audio with remarkable clarity across the entire frequency range for immersive listening."
    },
    {
      icon: "🏠",
      title: "Whole-Home Audio",
      description: "Create unified sound experiences that follow you from room to room with perfect synchronization."
    },
    {
      icon: "🎮",
      title: "Smart Controls",
      description: "Integrate with your home automation system for voice, app, or touch panel control."
    },
    {
      icon: "⚡",
      title: "Energy Efficient",
      description: "Advanced amplifier technology delivers powerful sound while minimizing energy consumption."
    },
    {
      icon: "🔧",
      title: "Easy Installation",
      description: "Designed for straightforward installation in new construction or retrofit applications."
    }
  ];
  
  const showcases = [
    {
      image: "/in-wall-speakers.jpg",
      title: "In-Wall Speaker Systems",
      description: "Our in-wall speaker systems deliver exceptional audio performance while maintaining a clean, uncluttered aesthetic in your home.",
      features: [
        "Paintable grilles to match any wall color",
        "Directional tweeters for precise sound positioning",
        "Advanced dampening to prevent sound transfer between rooms",
        "Compatible with all major home automation systems"
      ]
    },
    {
      image: "/ceiling-speakers.jpg",
      title: "Ceiling Speaker Solutions",
      description: "Enjoy immersive audio that seems to come from everywhere and nowhere at once with our ceiling-mounted speaker systems.",
      features: [
        "Low-profile design with minimal visual footprint",
        "Wide dispersion technology for even sound distribution",
        "Moisture-resistant models for bathroom installations",
        "Optional LED lighting integration for dual functionality"
      ]
    }
  ];
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <SpeakersSection id="architectural-speakers" ref={ref}>
      <Container>
        <SectionTitle>Architectural Speakers</SectionTitle>
        <SectionSubtitle>
          Discover our range of premium architectural speakers that deliver exceptional sound quality 
          while complementing your home's design aesthetic.
        </SectionSubtitle>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
        
        {showcases.map((showcase, index) => (
          <Showcase key={index} style={{ flexDirection: index % 2 ? 'row-reverse' : 'row' }}>
            <ShowcaseImageContainer>
              <img 
                src={showcase.image} 
                alt={showcase.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ShowcaseImageContainer>
            <ShowcaseContent>
              <ShowcaseTitle>{showcase.title}</ShowcaseTitle>
              <ShowcaseDescription>{showcase.description}</ShowcaseDescription>
              <FeatureList>
                {showcase.features.map((feature, idx) => (
                  <FeatureItem key={idx}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <Button>Learn More</Button>
            </ShowcaseContent>
          </Showcase>
        ))}
        
        <CTASection>
          <CTATitle>Ready to Transform Your Audio Experience?</CTATitle>
          <CTADescription>
            Our team of audio experts is ready to design a custom architectural speaker solution 
            tailored to your home's unique needs and aesthetic.
          </CTADescription>
          <Button style={{ background: 'white', color: '#2c3e50' }}>Schedule Consultation</Button>
        </CTASection>
      </Container>
    </SpeakersSection>
  );
};

export default ArchitecturalSpeakers; 