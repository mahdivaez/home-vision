import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
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

// Styled components
const Section = styled.section`
  padding: 130px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/noise-pattern.png');
  opacity: 0.05;
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div<{ inView: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '40px'});
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const MainImage = styled.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 60%);
    z-index: 1;
    pointer-events: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.7s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const BlueGlow = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(203, 157, 118, 0.3) 0%, rgba(203, 157, 118, 0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  animation: ${float} 6s ease-in-out infinite;
`;

const VoiceWaves = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  height: 40px;
  width: 80%;
  z-index: 2;
`;

interface WaveBarProps {
  delay: number;
  height: number;
}

const WaveBar = styled.div<WaveBarProps>`
  width: 6px;
  margin: 0 3px;
  height: ${props => props.height}px;
  background-color: rgba(203, 157, 118, 0.8);
  border-radius: 3px;
  opacity: 0.7;
  animation: ${props => css`
    ${waveAnimation(props.height)} 1.2s ease-in-out ${props.delay}s infinite alternate
  `};
`;

const waveAnimation = (maxHeight: number) => keyframes`
  0% {
    height: 5px;
  }
  100% {
    height: ${maxHeight}px;
  }
`;

const VoiceButton = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(203, 157, 118, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 8px 20px rgba(203, 157, 118, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: rgba(203, 157, 118, 0.8);
    z-index: -1;
    animation: ${ripple} 2s infinite;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

const ContentContainer = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
  color: rgba(203, 157, 118, 0.9);
  font-weight: 500;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 25px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`;

const CommandsList = styled.div`
  margin-bottom: 40px;
`;

const CommandCard = styled.div<{ delay: number }>`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.6s forwards;
  animation-delay: ${props => 0.1 + props.delay * 0.15}s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    border-color: rgba(203, 157, 118, 0.4);
  }
`;

const CommandHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CommandIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: rgba(203, 157, 118, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  svg {
    width: 20px;
    height: 20px;
    color: rgba(203, 157, 118, 0.9);
  }
`;

const CommandTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

const CommandExample = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin: 0;
  padding-left: 51px;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    font-style: italic;
  }
`;

const CTAButton = styled(Button)`
  background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 15px 35px;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(203, 157, 118, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(203, 157, 118, 0.4);
  }
`;

const VoiceCommandService = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  
  const toggleVoice = () => {
    setIsVoiceActive(!isVoiceActive);
  };
  
  const voiceCommands = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ),
      title: 'Lighting Control',
      example: '"Hey Home, set living room lights to 50 percent"',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: 'Home Security',
      example: '"Hey Home, arm the security system" or "unlock front door"',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12" y2="18"></line>
        </svg>
      ),
      title: 'Entertainment',
      example: '"Hey Home, play music in the kitchen" or "turn on the TV"',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </svg>
      ),
      title: 'Climate Control',
      example: '"Hey Home, set temperature to 72 degrees" or "turn on AC"',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate random wave heights
  const waveHeights = Array.from({ length: 12 }, () => Math.floor(Math.random() * 25) + 10);
  const waveDelays = Array.from({ length: 12 }, (_, i) => (i * 0.1));

  return (
    <Section id="voice-control" ref={ref}>
      <BackgroundOverlay />
      
      <Container>
        <ContentWrapper inView={inView}>
          <ContentContainer>
            <Subtitle>Smart Home Assistant</Subtitle>
            <Title>Voice Command Service</Title>
            <Description>
              Control your entire smart home ecosystem with the power of your voice.
              Our advanced voice recognition system understands natural language and
              can perform complex tasks across multiple integrated systems.
            </Description>
            
            <CommandsList>
              {voiceCommands.map((command, index) => (
                <CommandCard key={index} delay={index}>
                  <CommandHeader>
                    <CommandIcon>{command.icon}</CommandIcon>
                    <CommandTitle>{command.title}</CommandTitle>
                  </CommandHeader>
                  <CommandExample>
                    Example: <span>{command.example}</span>
                  </CommandExample>
                </CommandCard>
              ))}
            </CommandsList>
            
            <CTAButton onClick={() => scrollToSection('contact')}>
              Explore Voice Control Options
            </CTAButton>
          </ContentContainer>
          
          <ImageContainer>
            <MainImage>
              <img src="/voiceCommand.jpg" alt="Voice Assistant" />
              {isVoiceActive && (
                <VoiceWaves>
                  {waveHeights.map((height, index) => (
                    <WaveBar key={index} height={height} delay={waveDelays[index]} />
                  ))}
                </VoiceWaves>
              )}
              <VoiceButton onClick={toggleVoice}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </VoiceButton>
            </MainImage>
            <BlueGlow />
          </ImageContainer>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default VoiceCommandService; 