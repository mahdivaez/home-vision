import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

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

const glow = keyframes`
  0% {
    box-shadow: 0 0 15px rgba(203, 157, 118, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(203, 157, 118, 0.8);
  }
  100% {
    box-shadow: 0 0 15px rgba(203, 157, 118, 0.5);
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
  padding: 140px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(203, 157, 118, 0.15) 0%, transparent 45%),
              radial-gradient(circle at 20% 80%, rgba(203, 157, 118, 0.15) 0%, transparent 45%);
  background-image: radial-gradient(rgba(203, 157, 118, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
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

// Hero image section
const HeroImage = styled.div<{ inView: boolean }>`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 100px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4);
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '40px'});
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
  
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px;
`;

const HeroTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  
  span {
    background: linear-gradient(90deg, #ffee96, #ffb347);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 30px;
  line-height: 1.7;
`;

// Main content section
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

const ContentContainer = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
`;

const LightingDemo = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const RoomImage = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.5s ease;
  }
`;

const LightOverlay = styled.div<{ color: string; brightness: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  opacity: ${props => props.brightness / 100 * 0.5};
  mix-blend-mode: soft-light;
  transition: all 0.5s ease;
`;

const LightingControls = styled.div`
  position: relative;
  margin-top: -50px;
  z-index: 10;
  background: rgba(30, 30, 32, 0.8);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-left: 40px;
  margin-right: 40px;
`;

const ControlsTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  
  svg {
    margin-right: 10px;
    color: rgba(255, 238, 150, 0.9);
  }
`;

const ControlRow = styled.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ControlLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
  span {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  strong {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const RangeSlider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.9);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
  }
  
  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    animation: ${glow} 2s infinite;
  }
  
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.9);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
  }
  
  &::-moz-range-thumb:hover {
    transform: scale(1.1);
  }
`;

const ColorPicker = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: 15px;
`;

interface ColorButtonProps {
  color: string;
  active: boolean;
}

const ColorButton = styled.button<ColorButtonProps>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 3px solid ${props => props.active ? 'rgba(203, 157, 118, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.active ? `0 0 15px ${props.color}` : 'none'};
  
  &:hover {
    transform: scale(1.1);
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
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  
  span {
    background: linear-gradient(90deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  line-height: 1.7;
`;

const FeatureList = styled.div`
  margin-top: 40px;
`;

const FeatureItem = styled.div<{ inView: boolean; delay: number }>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateX(${props => props.inView ? 0 : '30px'});
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: ${props => `${props.delay * 0.1}s`};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 15px;
  background-color: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  
  svg {
    color: rgba(203, 157, 118, 0.9);
    width: 24px;
    height: 24px;
  }
`;

const FeatureContent = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: white;
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

const ActionButton = styled(Button)`
  margin-top: 40px;
  background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(203, 157, 118, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(203, 157, 118, 0.4);
  }
`;

const SmartLighting = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [interactiveRef, interactiveInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // State for interactive lighting controls
  const [brightness, setBrightness] = useState(70);
  const [color, setColor] = useState('#cb9d76');
  
  const colors = [
    '#cb9d76', // Copper/Bronze (primary)
    '#ff5f5f', // Red
    '#5ea7ff', // Blue
    '#7dff7d', // Green
    '#ff7dff', // Purple
    '#ffaa5e', // Orange
  ];
  
  return (
    <LightingSection id="smart-lighting">
      <BackgroundEffect />
      <Container>
        <SectionHeader ref={headerRef} inView={headerInView}>
          <SectionTitle>Smart <span>Lighting</span> Control</SectionTitle>
          <SectionSubtitle>
            Transform any space with intelligent lighting that adapts to your needs, mood, and activities.
            Experience the perfect ambience with just a tap.
          </SectionSubtitle>
        </SectionHeader>
        
        {/* Hero image section */}
        {/* <HeroImage ref={heroRef} inView={heroInView}>
          <img src="/lightingControl.jpg" alt="Smart Lighting" />
          <HeroOverlay>
            <HeroTitle>Create the Perfect <span>Atmosphere</span></HeroTitle>
            <HeroDescription>
              Our smart lighting system lets you create custom scenes for any occasion, 
              from cozy movie nights to productive work sessions.
            </HeroDescription>
          </HeroOverlay>
        </HeroImage> */}
        
        {/* Interactive control demo */}
        <ContentWrapper ref={interactiveRef} inView={interactiveInView}>
          <ContentContainer>
            <Subtitle>Smart Control</Subtitle>
            <Title>Complete <span>Control</span> at Your Fingertips</Title>
            <Description>
              Adjust brightness, color, and mood with intuitive controls through our app,
              voice commands, or elegant wall panels. Create custom scenes for any occasion.
            </Description>
            
            <FeatureList ref={featuresRef}>
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index} 
                  inView={featuresInView} 
                  delay={index + 1}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureContent>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </FeatureContent>
                </FeatureItem>
              ))}
            </FeatureList>
            
            <ActionButton>Explore Lighting Solutions</ActionButton>
          </ContentContainer>
          
          <LightingDemo>
            <RoomImage>
              <img src="/lightingControl.jpg" alt="Smart Lighting Demo" />
              <LightOverlay color={color} brightness={brightness} />
            </RoomImage>
            
            <LightingControls>
              <ControlsTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                Live Lighting Control
              </ControlsTitle>
              
              <ControlRow>
                <ControlLabel>
                  <span>Brightness</span>
                  <strong>{brightness}%</strong>
                </ControlLabel>
                <RangeSlider 
                  min="10" 
                  max="100" 
                  value={brightness} 
                  onChange={(e) => setBrightness(parseInt(e.target.value))} 
                />
              </ControlRow>
              
              <ControlRow>
                <ControlLabel>
                  <span>Color</span>
                </ControlLabel>
                <ColorPicker>
                  {colors.map((clr, index) => (
                    <ColorButton 
                      key={index}
                      color={clr}
                      active={color === clr}
                      onClick={() => setColor(clr)}
                    />
                  ))}
                </ColorPicker>
              </ControlRow>
            </LightingControls>
          </LightingDemo>
        </ContentWrapper>
      </Container>
    </LightingSection>
  );
};

export default SmartLighting; 