import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

// Sample lighting scenes (replace with your actual images)
const lightingScenes = [
  {
    id: 'scene1',
    title: 'Ambient Mood',
    description: 'Create the perfect atmosphere with subtle gradient lighting that transforms your space.',
    image: '/lighting1.jpg', // Replace with your image path
    color: '#e94ca1',
    colorEnd: '#c746b8',
  },
  {
    id: 'scene2',
    title: 'Entertainment Mode',
    description: "Enhance your media experience with synchronized lighting that responds to what's on screen. ",
    image: '/prodcut1.jpg', 
    color: '#f5b454',
    colorEnd: '#f8973f',
  },
  {
    id: 'scene3',
    title: 'Focus & Productivity',
    description: 'Optimize your environment for work with lighting scientifically designed to improve concentration.',
    image: '/lighting3.jpg', // Replace with your image path
    color: '#42c6ff',
    colorEnd: '#5a8afb',
  },
];

// Features of the lighting system
const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8M12 18v4M4.93 10.93l1.41 1.41M17.66 10.93l-1.41 1.41M2 18h2M20 18h2M19.437 3.406l-1.612 1.035M5.563 3.406l1.612 1.035M19.437 20.594l-1.612-1.035M5.563 20.594l1.612-1.035"></path>
        <circle cx="12" cy="14" r="4"></circle>
      </svg>
    ),
    title: 'Smart Scenes',
    description: 'Pre-program custom lighting scenes that activate with a single touch or voice command.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h10M12 2v10M12 12l8 8M22 2L12 12"></path>
      </svg>
    ),
    title: 'Intuitive Controls',
    description: 'Control your lighting through elegant wall panels, mobile app, or voice assistants.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
    title: 'Whole Home Integration',
    description: 'Seamlessly integrate with other smart home systems for comprehensive automation.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 1 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    title: 'Energy Efficient',
    description: 'Reduce electricity consumption with smart scheduling and motion-based activation.'
  },
];

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

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
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

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled Components
const LightingSection = styled.section`
  padding: 130px 0;
  background: linear-gradient(to bottom, #1a1a1a, #2b2b2b);
  position: relative;
  overflow: hidden;
  color: white;
`;

const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(233, 76, 161, 0.15) 0%, transparent 45%),
              radial-gradient(circle at 20% 80%, rgba(90, 138, 251, 0.15) 0%, transparent 45%);
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
  color: white;
  margin-bottom: 15px;
  font-size: 3.4rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  letter-spacing: -0.5px;
  
  span {
    background: linear-gradient(90deg, #e94ca1, #f5b454, #42c6ff);
    background-size: 200% 200%;
    animation: ${gradientShift} 7s ease infinite;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 750px;
  margin: 25px auto 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
`;

// Main showcase section
const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const MainImageDisplay = styled.div<{ inView: boolean }>`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '40px'});
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 40px 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: -0.5px;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
    max-width: 80%;
    line-height: 1.6;
  }
`;

const ControlBadge = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 100px;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 0.9rem;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #4dff91;
    border-radius: 50%;
    margin-right: 12px;
    box-shadow: 0 0 10px rgba(77, 255, 145, 0.8);
  }
`;

// Scene selection sidebar
const ScenesContainer = styled.div<{ inView: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '40px'});
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
  
  @media (max-width: 992px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 20px;
    
    &::-webkit-scrollbar {
      height: 5px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const SceneCard = styled.div<{ active: boolean; color: string; colorEnd: string }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  ${props => props.active && css`
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
    
    &::before {
      opacity: 0.6;
    }
  `}
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    
    &::before {
      opacity: 0.4;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, ${props => props.color}, ${props => props.colorEnd});
    opacity: ${props => props.active ? 0.8 : 0.2};
    transition: opacity 0.3s ease;
  }
  
  @media (max-width: 992px) {
    min-width: 280px;
  }
`;

const SceneTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const SceneDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;

// Features section
const FeaturesSection = styled.div<{ inView: boolean }>`
  margin-top: 120px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '40px'});
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
`;

const FeaturesTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 600;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div<{ delay: number }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeIn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: ${props => 0.15 + props.delay * 0.15}s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-10px);
    
    svg {
      transform: scale(1.1);
      color: #4dff91;
    }
  }
  
  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;

// CTA Section
const CTASection = styled.div<{ inView: boolean }>`
  margin-top: 120px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 60px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '40px'});
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(233, 76, 161, 0.08) 0%, transparent 70%);
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const CTAButton = styled(Button)`
  background: linear-gradient(to right, #e94ca1, #f5b454);
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 100px;
  box-shadow: 0 10px 30px rgba(233, 76, 161, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(233, 76, 161, 0.4);
  }
`;

// Component
const LightingControl = () => {
  const [activeScene, setActiveScene] = useState(lightingScenes[0].id);
  
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const activeSceneData = lightingScenes.find(scene => scene.id === activeScene) || lightingScenes[0];
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LightingSection ref={sectionRef} id="lighting-control">
      <BackgroundEffect />
      
      <Container>
        <SectionHeader inView={sectionInView}>
          <SectionTitle>Smart <span>Lighting Control</span></SectionTitle>
          <SectionSubtitle>
            Transform your home environment with intelligent lighting solutions that enhance mood,
            productivity, and energy efficiency through seamless automation.
          </SectionSubtitle>
        </SectionHeader>
        
        <ShowcaseGrid>
          <MainImageDisplay inView={sectionInView}>
            <img src={activeSceneData.image} alt={activeSceneData.title} />
            <ControlBadge>Smart Control</ControlBadge>
            <OverlayText>
              <h2>{activeSceneData.title}</h2>
              <p>{activeSceneData.description}</p>
            </OverlayText>
          </MainImageDisplay>
          
          <ScenesContainer inView={sectionInView}>
            {lightingScenes.map(scene => (
              <SceneCard 
                key={scene.id}
                active={activeScene === scene.id}
                onClick={() => setActiveScene(scene.id)}
                color={scene.color}
                colorEnd={scene.colorEnd}
              >
                <SceneTitle>{scene.title}</SceneTitle>
                <SceneDescription>{scene.description}</SceneDescription>
              </SceneCard>
            ))}
          </ScenesContainer>
        </ShowcaseGrid>
        
        <FeaturesSection ref={featuresRef} inView={featuresInView}>
          <FeaturesTitle>Intelligent Lighting Features</FeaturesTitle>
          
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index} delay={index}>
                {feature.icon}
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesSection>
        
        <CTASection ref={ctaRef} inView={ctaInView}>
          <CTATitle>Upgrade Your Home Lighting Experience</CTATitle>
          <CTADescription>
            Schedule a consultation with our lighting specialists to design a custom solution
            for your home that perfectly blends aesthetics, functionality, and innovation.
          </CTADescription>
          <CTAButton onClick={() => scrollToSection('contact')}>
            Schedule a Consultation
          </CTAButton>
        </CTASection>
      </Container>
    </LightingSection>
  );
};

export default LightingControl; 