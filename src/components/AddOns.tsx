import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const addOns = [
  {
    id: 'blinds',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: 'Motorized Blinds',
    description: 'Automatic control of natural light with scheduling and remote access',
    color: 'rgba(203, 157, 118, 0.9)',
    colorEnd: 'rgba(183, 137, 98, 0.8)',
  },
  {
    id: 'touchpanels',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    ),
    title: 'Touch Panel Upgrades',
    description: 'Premium control interfaces with sleek, intuitive designs',
    color: 'rgba(203, 157, 118, 1)',
    colorEnd: 'rgba(183, 137, 98, 0.9)',
  },
  {
    id: 'outdoor',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    title: 'Outdoor Audio Systems',
    description: 'Extend your entertainment experiences to patios and gardens',
    color: 'rgba(203, 157, 118, 0.9)',
    colorEnd: 'rgba(183, 137, 98, 0.8)',
  },
  {
    id: 'theatre',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    ),
    title: 'Home Theatre Integration',
    description: 'Immersive cinematic experiences with professional calibration',
    color: 'rgba(203, 157, 118, 0.95)',
    colorEnd: 'rgba(183, 137, 98, 0.85)',
  },
  {
    id: 'voice',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
      </svg>
    ),
    title: 'Voice Assistant Support',
    description: 'Seamless integration with Alexa, Google Assistant, and more',
    color: 'rgba(203, 157, 118, 1)',
    colorEnd: 'rgba(183, 137, 98, 0.9)',
  },
];

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
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(203, 157, 118, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.3);
  }
`;

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const AddOnsSection = styled.section`
  padding: 120px 0 140px;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(rgba(203, 157, 118, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.2;
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div<{ inView: boolean }>`
  text-align: center;
  margin-bottom: 80px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const SectionTitle = styled.h2`
  color: #fff;
  margin-bottom: 15px;
  font-size: 2.6rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: rgba(203, 157, 118, 0.15);
      z-index: -1;
    }
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 750px;
  margin: 25px auto 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 -30px;
  padding: 0 30px;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 3;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, #0a0a0a, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, #0a0a0a, transparent);
  }
`;

const AddOnsTrack = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px 0;
  width: 100%;
  position: relative;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  scroll-behavior: smooth;
  justify-content: center;
  flex-wrap: nowrap;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 1400px) {
    gap: 20px;
    justify-content: flex-start;
  }
`;

const AddOnCard = styled.div<{ color: string; colorEnd: string; active: boolean }>`
  background-color: rgba(20, 20, 20, 0.9);
  border-radius: 16px;
  padding: 40px 25px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  flex: 0 0 250px;
  max-width: 250px;
  min-height: 320px;
  
  ${props => props.active && css`
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    animation: ${glow} 2s infinite;
  `}
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    ${props => !props.active && css`
      animation: ${glow} 2s infinite;
    `}
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, ${props => props.color}, ${props => props.colorEnd});
    border-radius: 16px 16px 0 0;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  @media (max-width: 1400px) {
    flex: 0 0 230px;
    max-width: 230px;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 220px;
    max-width: 220px;
    min-height: 300px;
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => `${props.color}10`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  color: ${props => props.color};
  font-size: 28px;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    border: 2px dashed ${props => props.color}40;
    opacity: 0.6;
    animation: ${rotate} 15s linear infinite;
  }
  
  svg {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
  }
  
  ${AddOnCard}:hover & {
    transform: translateY(-8px);
    
    svg {
      transform: scale(1.1);
    }
    
    &::after {
      animation: ${rotate} 8s linear infinite;
    }
  }
`;

const AddOnTitle = styled.h3`
  font-size: 1.35rem;
  margin-bottom: 12px;
  font-weight: 700;
  color: #fff;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.2), rgba(203, 157, 118, 0.8), rgba(203, 157, 118, 0.2));
    background-size: 200% auto;
    animation: ${shine} 3s linear infinite;
  }
`;

const AddOnDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin-top: 15px;
`;

const FloatingIcon = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  opacity: 0.04;
  z-index: 0;
  animation: ${float} 6s ease-in-out infinite;
  
  &.icon1 {
    top: 10%;
    right: 5%;
    animation-delay: 0s;
  }
  
  &.icon2 {
    bottom: 5%;
    left: 5%;
    animation-delay: 2s;
  }
  
  svg {
    width: 100%;
    height: 100%;
    color: rgba(203, 157, 118, 0.9);
  }
`;

const CTAContainer = styled.div<{ inView: boolean }>`
  margin-top: 70px;
  text-align: center;
  background: rgba(20, 20, 20, 0.6);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.3s;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(183, 137, 98, 0.8));
    border-radius: 20px 20px 0 0;
  }
`;

const CTATitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 15px;
  font-weight: 700;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 25px;
  
  span {
    position: relative;
    color: rgba(203, 157, 118, 0.9);
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: rgba(203, 157, 118, 0.15);
      z-index: -1;
    }
  }
`;

const AddOns = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [activeAddOn, setActiveAddOn] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const handleMouseEnter = (addonId: string) => {
    setActiveAddOn(addonId);
  };
  
  const handleMouseLeave = () => {
    setActiveAddOn(null);
  };

  return (
    <AddOnsSection ref={ref} id="addons">
      <BackgroundPattern />
      
      <FloatingIcon className="icon1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      </FloatingIcon>
      
      <FloatingIcon className="icon2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 18a5 5 0 0 0-10 0"></path>
          <line x1="12" y1="2" x2="12" y2="9"></line>
          <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
          <line x1="1" y1="18" x2="3" y2="18"></line>
          <line x1="21" y1="18" x2="23" y2="18"></line>
          <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
          <line x1="23" y1="22" x2="1" y2="22"></line>
          <polyline points="8 6 12 2 16 6"></polyline>
        </svg>
      </FloatingIcon>
      
      <Container>
        <SectionHeader inView={inView}>
          <SectionTitle>Enhance Your <span>Smart Home</span> Experience</SectionTitle>
          <SectionSubtitle>
            Customize your system with these premium add-ons. Each integrates seamlessly with your 
            core package to expand functionality and enhance your living experience.
          </SectionSubtitle>
        </SectionHeader>
        
        <CarouselContainer>
          <AddOnsTrack ref={carouselRef}>
            {addOns.map((addon) => (
              <AddOnCard 
                key={addon.id} 
                color={addon.color}
                colorEnd={addon.colorEnd}
                active={activeAddOn === addon.id}
                onMouseEnter={() => handleMouseEnter(addon.id)}
                onMouseLeave={handleMouseLeave}
              >
                <IconWrapper color={addon.color}>
                  {addon.icon}
                </IconWrapper>
                <AddOnTitle>{addon.title}</AddOnTitle>
                <AddOnDescription>{addon.description}</AddOnDescription>
              </AddOnCard>
            ))}
          </AddOnsTrack>
        </CarouselContainer>
        
        <CTAContainer inView={inView}>
          <CTATitle>Interested in Add-Ons?</CTATitle>
          <CTAText>
            <span>Just mention it in your consultation</span> and we'll create a custom package that includes 
            all the features you want.
          </CTAText>
        </CTAContainer>
      </Container>
    </AddOnsSection>
  );
};

export default AddOns;