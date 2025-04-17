import React, { useState, useEffect } from 'react';
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
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
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

// New animations
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const wave = keyframes`
  0% { height: 5px; }
  50% { height: 20px; }
  100% { height: 5px; }
`;

// Styled components
const Section = styled.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const BackgroundCircles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
  }
  
  &::before {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.9) 0%, transparent 70%);
    top: -200px;
    right: -200px;
  }
  
  &::after {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.9) 0%, transparent 70%);
    bottom: -300px;
    left: -200px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div<{ inView: boolean }>`
  text-align: center;
  margin-bottom: 80px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(203, 157, 118, 0.2);
      z-index: -1;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
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
    order: 1;
  }
`;

const MainImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.2) 0%, transparent 50%);
    z-index: 1;
  }
  
  img {
    width: 100%;
    display: block;
    transition: transform 0.7s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 150px;
  height: 150px;
  background: rgba(203, 157, 118, 0.9);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  animation: ${float} 5s ease-in-out infinite;
  z-index: 2;
  
  h3 {
    font-size: 1.8rem;
    margin: 0;
    line-height: 1;
  }
  
  p {
    margin: 10px 0 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const ContentColumn = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FeatureItem = styled.div<{ delay: number, inView: boolean }>`
  display: flex;
  gap: 25px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateX(${props => props.inView ? 0 : '30px'});
  transition: all 0.6s ease-out;
  transition-delay: ${props => props.delay * 0.1}s;
`;

const IconContainer = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 28px;
    height: 28px;
    color: rgba(203, 157, 118, 0.9);
  }
`;

const FeatureContent = styled.div`
  h4 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #fff;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }
`;

const CtaContainer = styled.div<{ inView: boolean }>`
  margin-top: 50px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '20px'});
  transition: all 0.8s ease-out;
  transition-delay: 0.6s;
`;

// New styled components for gamification
const InteractiveSection = styled.div`
  margin-top: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionLabel = styled.h4`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const VolumeSlider = styled.input`
  flex-grow: 1;
  height: 6px;
  -webkit-appearance: none;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--primary) ${props => props.value}%, rgba(255, 255, 255, 0.2) ${props => props.value}%);
  outline: none;
  margin: 0 15px;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--primary);
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const VolumeButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--primary);
  }
`;

const SoundVisualization = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 40px;
  gap: 3px;
  margin-bottom: 20px;
`;

const SoundBar = styled.div<{ height: number }>`
  width: 5px;
  background: var(--primary);
  border-radius: 2px;
  height: ${props => props.height}px;
  transition: height 0.1s ease;
`;

const PresetSelector = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Preset = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#000' : 'rgba(255, 255, 255, 0.8)'};
  border: none;
  border-radius: 30px;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.15)'};
    transform: translateY(-2px);
  }
`;

const Achievement = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  border-left: 3px solid var(--primary);
`;

const AchievementIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--primary);
`;

const AchievementContent = styled.div`
  flex-grow: 1;
  
  h5 {
    font-size: 1rem;
    margin: 0 0 5px;
  }
  
  p {
    font-size: 0.85rem;
    margin: 0;
    opacity: 0.7;
  }
`;

const RevealMessage = styled.div`
  text-align: center;
  color: var(--primary);
  font-weight: 500;
  margin-top: 15px;
  font-size: 0.9rem;
  height: 20px;
`;

// Speaker features
const speakerFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: "Premium Sound Quality",
    description: "Experience crystal clear audio with deep bass and rich tones, perfectly balanced for any room size."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12z" />
      </svg>
    ),
    title: "Wireless Connectivity",
    description: "Seamlessly connect via Bluetooth, Wi-Fi, or AirPlay 2 for effortless streaming from any device."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Multi-Room Audio",
    description: "Create synchronized audio experiences throughout your home with our whole-home audio solution."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Smart Integration",
    description: "Control your speakers with voice commands via Amazon Alexa, Google Assistant, or Apple Siri."
  }
];

interface PresetType {
  id: string;
  name: string;
}

const Speakers = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // New state for gamification
  const [volume, setVolume] = useState(60);
  const [isMuted, setIsMuted] = useState(false);
  const [activePreset, setActivePreset] = useState("natural");
  const [soundBars, setSoundBars] = useState(Array.from({ length: 20 }, () => 5));
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);
  const [revealMessage, setRevealMessage] = useState("");
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    
    // Achievement for max volume
    if (newVolume === 100 && !achievementUnlocked) {
      setAchievementUnlocked(true);
      setRevealMessage("🏆 Achievement Unlocked: Sound Enthusiast!");
      setTimeout(() => setRevealMessage(""), 3000);
    }
  };
  
  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      // If currently muted, restore previous volume
      setVolume(volume === 0 ? 60 : volume);
    } else {
      // Store current volume by keeping it in state
      // and just set isMuted to true
    }
  };
  
  // Handle preset change
  const handlePresetChange = (preset: string) => {
    setActivePreset(preset);
    
    // Different visualization patterns for different presets
    if (preset === "cinema") {
      setRevealMessage("🎬 Cinema Mode Activated");
    } else if (preset === "music") {
      setRevealMessage("🎵 Music Mode Activated");
    } else if (preset === "night") {
      setRevealMessage("🌙 Night Mode Activated");
    } else if (preset === "natural") {
      setRevealMessage("🌿 Natural Mode Activated");
    }
    
    setTimeout(() => setRevealMessage(""), 2000);
  };
  
  // Sound visualization effect
  useEffect(() => {
    if (isMuted) {
      setSoundBars(Array.from({ length: 20 }, () => 5));
      return;
    }
    
    const interval = setInterval(() => {
      const newBars = soundBars.map(() => {
        let height;
        
        // Different patterns based on preset
        if (activePreset === "cinema") {
          height = Math.random() * 25 * (volume / 100);
        } else if (activePreset === "music") {
          height = Math.max(5, Math.random() * 35 * (volume / 100));
        } else if (activePreset === "night") {
          height = Math.min(15, Math.random() * 15 * (volume / 100));
        } else {
          height = Math.random() * 20 * (volume / 100);
        }
        
        return Math.max(3, height);
      });
      
      setSoundBars(newBars);
    }, 100);
    
    return () => clearInterval(interval);
  }, [volume, isMuted, activePreset]);
  
  const presets: PresetType[] = [
    { id: "natural", name: "Natural" },
    { id: "cinema", name: "Cinema" },
    { id: "music", name: "Music" },
    { id: "night", name: "Night" }
  ];
  
  return (
    <Section id="speakers">
      <BackgroundCircles />
      <Container>
        <SectionHeader ref={headerRef} inView={headerInView}>
          <Title>Premium <span>Speaker Systems</span></Title>
          <Subtitle>
            Transform your living space with immersive audio that delivers concert-quality sound throughout your entire home.
          </Subtitle>
        </SectionHeader>
        
        <ContentWrapper ref={contentRef} inView={contentInView}>
          <ImageContainer>
            <MainImage>
              <img src="/ArchitecturalSpeaker.jpg" alt="Premium Smart Speaker System" />
            </MainImage>
            <FloatingElement>
              <h3>360°</h3>
              <p>Immersive Sound</p>
            </FloatingElement>
          </ImageContainer>
          
          <ContentColumn>
            <FeatureList>
              {speakerFeatures.map((feature, index) => (
                <FeatureItem 
                  key={index} 
                  delay={index + 1} 
                  inView={contentInView}
                >
                  <IconContainer>
                    {feature.icon}
                  </IconContainer>
                  <FeatureContent>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </FeatureContent>
                </FeatureItem>
              ))}
            </FeatureList>
            
            {/* Interactive Gamification Section */}
            <InteractiveSection>
              <SectionLabel>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 18L10 10 14 14 22 6" />
                  <path d="M22 6H14" />
                  <path d="M14 14H22V6" />
                </svg>
                Interactive Demo
              </SectionLabel>
              
              <SoundVisualization>
                {soundBars.map((height, index) => (
                  <SoundBar key={index} height={height} />
                ))}
              </SoundVisualization>
              
              <VolumeControl>
                <VolumeButton onClick={toggleMute}>
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                      <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                      <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                      <line x1="12" y1="19" x2="12" y2="23"></line>
                      <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 8a5 5 0 0 1 4 5 5 5 0 0 1-4 5"></path>
                      <path d="M9 12v-4a3 3 0 0 1 5.12-2.12"></path>
                      <path d="M18 8.12A7 7 0 0 1 21 12a7 7 0 0 1-3 5.88"></path>
                      <path d="M12 19v4"></path>
                      <path d="M8 23h8"></path>
                    </svg>
                  )}
                </VolumeButton>
                <VolumeSlider
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                />
                <span style={{ minWidth: '40px', textAlign: 'right', color: 'rgba(255,255,255,0.8)' }}>
                  {isMuted ? '0%' : `${volume}%`}
                </span>
              </VolumeControl>
              
              <PresetSelector>
                {presets.map(preset => (
                  <Preset
                    key={preset.id}
                    active={activePreset === preset.id}
                    onClick={() => handlePresetChange(preset.id)}
                  >
                    {preset.name}
                  </Preset>
                ))}
              </PresetSelector>
              
              {achievementUnlocked && (
                <Achievement>
                  <AchievementIcon>🏆</AchievementIcon>
                  <AchievementContent>
                    <h5>Sound Enthusiast</h5>
                    <p>You've experienced our speakers at maximum volume!</p>
                  </AchievementContent>
                </Achievement>
              )}
              
              <RevealMessage>{revealMessage}</RevealMessage>
            </InteractiveSection>
            
            <CtaContainer ref={ctaRef} inView={ctaInView}>
              <Button 
                style={{ 
                  background: "var(--primary)",
                  color: "#fff",
                  padding: "15px 35px",
                  fontSize: "1.1rem",
                  borderRadius: "12px",
                  fontWeight: "600"
                }}
              >
                Learn More
              </Button>
            </CtaContainer>
          </ContentColumn>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Speakers; 