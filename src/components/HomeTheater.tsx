import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
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

// Styled Components
const Section = styled.section`
  padding: 120px 0;
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
  background: radial-gradient(circle at 70% 50%, rgba(203, 157, 118, 0.15) 0%, rgba(16, 16, 36, 0) 70%);
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div<{ inView: boolean }>`
  text-align: center;
  margin-bottom: 60px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentGrid = styled.div<{ inView: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.2s;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TheaterImage = styled.div`
  position: relative;
  
  @media (max-width: 991px) {
    order: 1;
  }
`;

const MainImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(203, 157, 118, 0.3) 0%, transparent 70%);
    z-index: 1;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  padding: 15px 25px;
  border-radius: 15px;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 10px 25px rgba(203, 157, 118, 0.4);
  animation: ${float} 6s ease-in-out infinite;
  z-index: 2;
  
  @media (max-width: 767px) {
    bottom: -15px;
    right: 20px;
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

const Content = styled.div`
  @media (max-width: 991px) {
    order: 2;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fff;
  
  span {
    color: rgba(203, 157, 118, 0.9);
  }
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 30px;
`;

const FeaturesList = styled.div`
  margin-bottom: 40px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: rgba(203, 157, 118, 0.9);
  }
`;

const FeatureContent = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 10px;
    color: #fff;
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }
`;

const ExperienceSection = styled.div<{ inView: boolean }>`
  margin-top: 120px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.4s;
`;

const ExperienceTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: #fff;
  
  span {
    color: rgba(203, 157, 118, 0.9);
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled.div<{ delay: number }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(203, 157, 118, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => 0.1 + props.delay * 0.1}s;
  opacity: 0;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(203, 157, 118, 0.3);
  }
`;

const ExperienceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  animation: ${pulse} 3s infinite ease-in-out;
  
  svg {
    width: 35px;
    height: 35px;
    color: rgba(203, 157, 118, 0.9);
  }
`;

const ExperienceCardTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #fff;
`;

const ExperienceCardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const CtaSection = styled.div<{ inView: boolean }>`
  margin-top: 100px;
  background: rgba(203, 157, 118, 0.05);
  border-radius: 20px;
  padding: 60px;
  text-align: center;
  border: 1px solid rgba(203, 157, 118, 0.15);
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.6s;
  
  @media (max-width: 767px) {
    padding: 40px 20px;
  }
`;

const CtaTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
`;

const CtaDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 30px;
  line-height: 1.6;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  border: none;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  border-radius: 12px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(203, 157, 118, 0.4);
  }
`;

// Component definition
const HomeTheater: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Experience data
  const experiences = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Cinematic Visuals",
      description: "Experience stunning 4K HDR visuals with professional-grade projectors and premium OLED displays for true cinematic picture quality."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.06-7.072m-1.06 7.072a9 9 0 001.06-12.728M12 18v-3" />
        </svg>
      ),
      title: "Immersive Audio",
      description: "Dolby Atmos and DTS:X surround sound systems with precision acoustic treatments for a fully immersive audio experience."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Custom Aesthetics",
      description: "Professionally designed theater spaces with premium seating, acoustic treatments, and customized lighting to match your home's design."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "One-Touch Control",
      description: "Intuitive control systems that let you manage your entire theater with a single touch from your mobile device or elegant wall panel."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Media Library",
      description: "Centralized storage solutions for your movie collection with elegant browsing interfaces and instant access to your favorite content."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Premium Streaming",
      description: "Access to premium streaming services with optimized networking for buffer-free 4K content delivery and the latest releases."
    }
  ];
  
  return (
    <Section id="home-theater">
      <BackgroundOverlay />
      <Container>
        <SectionHeader ref={headerRef} inView={headerInView}>
          <SectionTitle>Ultimate Home Theater Experience</SectionTitle>
          <SectionDescription>
            Transform your living space into an immersive entertainment destination with our custom
            home theater solutions designed for the ultimate cinematic experience.
          </SectionDescription>
        </SectionHeader>
        
        <ContentGrid ref={contentRef} inView={contentInView}>
          <TheaterImage>
            <MainImage>
              <img src="/home-theater.jpg" alt="Luxury Home Theater" />
            </MainImage>
            <FloatingBadge>Premium Experience</FloatingBadge>
          </TheaterImage>
          
          <Content>
            <FeatureTitle>
              Bringing the <span>Cinema</span> to Your Home
            </FeatureTitle>
            <FeatureDescription>
              Our custom home theater solutions combine state-of-the-art technology with luxurious comfort 
              to create an immersive viewing experience that rivals commercial theaters.
            </FeatureDescription>
            
            <FeaturesList>
              <FeatureItem>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </FeatureIcon>
                <FeatureContent>
                  <h4>Professional Design</h4>
                  <p>Expert acoustic design and space planning to optimize your viewing experience with proper seating arrangements and optimal screen placement.</p>
                </FeatureContent>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </FeatureIcon>
                <FeatureContent>
                  <h4>Personalized Experience</h4>
                  <p>Customized control systems with user profiles that remember each family member's preferences for lighting, sound, and content recommendations.</p>
                </FeatureContent>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </FeatureIcon>
                <FeatureContent>
                  <h4>Smart Integration</h4>
                  <p>Seamless integration with your existing smart home system, allowing for automation of the entire viewing experience from entry to exit.</p>
                </FeatureContent>
              </FeatureItem>
            </FeaturesList>
            
            <StyledButton onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>Explore Theater Solutions</StyledButton>
          </Content>
        </ContentGrid>
        
        <ExperienceSection ref={experienceRef} inView={experienceInView}>
          <ExperienceTitle>
            The Complete <span>Theater</span> Experience
          </ExperienceTitle>
          
          <ExperienceGrid>
            {experiences.map((item, index) => (
              <ExperienceCard key={index} delay={index}>
                <ExperienceIcon>{item.icon}</ExperienceIcon>
                <ExperienceCardTitle>{item.title}</ExperienceCardTitle>
                <ExperienceCardDescription>{item.description}</ExperienceCardDescription>
              </ExperienceCard>
            ))}
          </ExperienceGrid>
        </ExperienceSection>
        
        <CtaSection ref={ctaRef} inView={ctaInView}>
          <CtaTitle>Ready for Your Dream Home Theater?</CtaTitle>
          <CtaDescription>
            Let our experts design a custom home theater solution that perfectly matches your space, 
            style, and entertainment needs. Schedule a consultation today.
          </CtaDescription>
          <StyledButton onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Schedule a Theater Consultation</StyledButton>
        </CtaSection>
      </Container>
    </Section>
  );
};

export default HomeTheater; 