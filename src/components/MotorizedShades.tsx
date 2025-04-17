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

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(203, 157, 118, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0);
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

// Styled Components
const Section = styled.section`
  padding: 140px 0;
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
  opacity: 0.3;
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

const ContentContainer = styled.div`
  @media (max-width: 992px) {
    order: 1;
  }
`;

const ShadeDemo = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const WindowFrame = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: #e1e8ed;
    z-index: 1;
  }
`;

const WindowView = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 350px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 0.5s ease;
  }
`;

interface ShadeProps {
  openPercent: number;
}

const Shade = styled.div<ShadeProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => 100 - props.openPercent}%;
  background-color: #f8f9fa;
  transition: height 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 12px;
    background: #e1e8ed;
    border-bottom: 2px solid #cbd5e0;
  }
`;

const ShadeControls = styled.div`
  position: relative;
  margin-top: 30px;
  background: rgba(30, 30, 32, 0.8);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const ControlsTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  
  svg {
    margin-right: 10px;
    color: rgba(203, 157, 118, 0.9);
  }
`;

const ControlRow = styled.div`
  margin-bottom: 25px;
  
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
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  strong {
    font-size: 0.9rem;
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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.9);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
  }
  
  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    animation: ${pulse} 2s infinite;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
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

const PresetsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const PresetButton = styled.button<{ active: boolean }>`
  padding: 8px 15px;
  background: ${props => props.active ? 'linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9))' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.9)'};
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 10px 20px rgba(203, 157, 118, 0.3)' : 'none'};
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9))' : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
    box-shadow: ${props => props.active ? '0 15px 30px rgba(203, 157, 118, 0.4)' : '0 5px 15px rgba(0, 0, 0, 0.1)'};
  }
`;

const ScheduleButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 18px;
  background: ${props => props.active ? 'rgba(203, 157, 118, 0.15)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? 'rgba(203, 157, 118, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  svg {
    color: rgba(203, 157, 118, 0.9);
    margin-right: 10px;
  }
  
  .time {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    margin-right: 5px;
  }
  
  .label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
  }
  
  .toggle {
    margin-left: auto;
    width: 36px;
    height: 20px;
    background: ${props => props.active ? 'rgba(203, 157, 118, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
    border-radius: 10px;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: ${props => props.active ? 'calc(100% - 18px)' : '2px'};
      width: 16px;
      height: 16px;
      background: #fff;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
  }
  
  &:hover {
    border-color: rgba(203, 157, 118, 0.5);
    
    .toggle {
      background: ${props => props.active ? 'rgba(203, 157, 118, 1)' : 'rgba(255, 255, 255, 0.3)'};
    }
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
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`;

const FeaturesList = styled.div`
  margin-bottom: 40px;
`;

const Feature = styled.div<{ delay: number }>`
  margin-bottom: 25px;
  display: flex;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.6s forwards;
  animation-delay: ${props => 0.2 + props.delay * 0.15}s;
  
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

const FeatureContent = styled.div``;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: #fff;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;

const AccentCircle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(203, 157, 118, 0.15) 0%, rgba(203, 157, 118, 0) 70%);
  bottom: -80px;
  left: -50px;
  z-index: -1;
  animation: ${float} 6s ease-in-out infinite;
`;

const CTAButton = styled(Button)`
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

const MotorizedShades = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [shadeOpenPercent, setShadeOpenPercent] = useState(75);
  const [morningSchedule, setMorningSchedule] = useState(true);
  const [eveningSchedule, setEveningSchedule] = useState(true);
  const [activePreset, setActivePreset] = useState("privacy");
  
  const presets = [
    { id: "open", name: "Open", value: 100 },
    { id: "privacy", name: "Privacy", value: 75 },
    { id: "movie", name: "Movie", value: 20 },
    { id: "closed", name: "Closed", value: 0 }
  ];
  
  const handlePresetClick = (preset: any) => {
    setShadeOpenPercent(preset.value);
    setActivePreset(preset.id);
  };
  
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: 'Precision Controls',
      description: 'Set your shades to the exact position you want with precise controls, from fully closed to fully open.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: 'Energy Efficiency',
      description: 'Smart shades automatically adjust based on time of day and temperature to reduce heating and cooling costs.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Automated Schedules',
      description: 'Set schedules for your shades to open in the morning and close in the evening automatically.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: 'Remote Control',
      description: 'Control your shades from anywhere using your smartphone, tablet, or voice assistant.'
    }
  ];
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Section id="motorized-shades" ref={ref}>
      <BackgroundPattern />
      
      <Container>
        <ContentWrapper inView={inView}>
          <ContentContainer>
            <Subtitle>Smart Home Integration</Subtitle>
            <Title>Motorized <span>Shades</span></Title>
            <Description>
              Enhance your home with sophisticated motorized window treatments that 
              combine elegant design with smart technology. Our motorized shades provide 
              privacy, light control, and energy efficiency while seamlessly integrating 
              with your smart home system.
            </Description>
            
            <FeaturesList>
              {features.map((feature, index) => (
                <Feature key={index} delay={index}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureContent>
                </Feature>
              ))}
            </FeaturesList>
            
            <CTAButton onClick={() => scrollToSection('contact')}>
              Explore Shade Options
            </CTAButton>
            <AccentCircle />
          </ContentContainer>
          
          <ShadeDemo>
            <WindowFrame>
              <WindowView>
                <img src="/motorizesShade.jpg" alt="View through window" />
                <Shade openPercent={shadeOpenPercent} />
              </WindowView>
            </WindowFrame>
            
            <ShadeControls>
              <ControlsTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                Shade Controls
              </ControlsTitle>
              
              <ControlRow>
                <ControlLabel>
                  <span>Shade Position</span>
                  <strong>{shadeOpenPercent}% Open</strong>
                </ControlLabel>
                <RangeSlider
                  min="0"
                  max="100"
                  value={shadeOpenPercent}
                  onChange={(e) => {
                    setShadeOpenPercent(parseInt(e.target.value));
                    setActivePreset("");
                  }}
                />
                <PresetsContainer>
                  {presets.map((preset) => (
                    <PresetButton
                      key={preset.id}
                      active={activePreset === preset.id}
                      onClick={() => handlePresetClick(preset)}
                    >
                      {preset.name}
                    </PresetButton>
                  ))}
                </PresetsContainer>
              </ControlRow>
              
              <ControlRow>
                <ControlLabel>
                  <span>Daily Schedules</span>
                </ControlLabel>
                
                <ScheduleButton 
                  active={morningSchedule}
                  onClick={() => setMorningSchedule(!morningSchedule)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                  <div>
                    <span className="time">7:30 AM</span>
                    <span className="label">Open shades</span>
                  </div>
                  <div className="toggle"></div>
                </ScheduleButton>
                
                <div style={{ height: '10px' }}></div>
                
                <ScheduleButton 
                  active={eveningSchedule}
                  onClick={() => setEveningSchedule(!eveningSchedule)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  <div>
                    <span className="time">7:00 PM</span>
                    <span className="label">Close shades</span>
                  </div>
                  <div className="toggle"></div>
                </ScheduleButton>
              </ControlRow>
            </ShadeControls>
          </ShadeDemo>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default MotorizedShades; 