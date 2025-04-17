import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

// High-quality image for bonuses
const bonusImageUrl = 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
// Video URL - ensure path is relative to public directory
const bonusVideoUrl = '/video2.mp4';

const leadMagnets = [
  {
    id: 'guide',
    title: 'Ultimate Smart Home Guide',
    description: 'Transform your home with our comprehensive guide to smart technology integration and customization.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    color: '#CB9D76',
    colorEnd: '#bb8d66',
    tag: 'Most Popular',
  },
  {
    id: 'checklist',
    title: 'Smart Home Essentials Checklist',
    description: 'Your 10-point checklist for a fully automated home with prioritized implementation steps.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    color: '#b78a63',
    colorEnd: '#a77a53',
  },
  {
    id: 'webinar',
    title: 'Smart Home 101 Webinar',
    description: 'Access our exclusive video series on designing your dream automated home with expert insights.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    color: '#8d6c4e',
    colorEnd: '#7d5c3e',
  },
  {
    id: 'quiz',
    title: 'Home Automation Readiness Quiz',
    description: 'Is your home ready for automation? Take our 2-minute assessment to identify the best starting points.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
    color: '#f8d7bc',
    colorEnd: '#eac7ab',
  },
  {
    id: 'energy',
    title: 'Energy Savings Report',
    description: 'Discover your potential savings with smart home technology through our detailed analysis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
      </svg>
    ),
    color: '#CB9D76',
    colorEnd: '#bb8d66',
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LeadMagnetsSection = styled.section`
  padding: 120px 0 140px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundElement = styled.div`
  position: absolute;
  z-index: 0;
  
  &.circle1 {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
    top: -200px;
    right: -200px;
  }
  
  &.circle2 {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.04) 0%, rgba(255, 255, 255, 0) 70%);
    bottom: -150px;
    left: -150px;
  }
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
  color: var(--secondary);
  margin-bottom: 15px;
  font-size: 2.6rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  
  span {
    color: var(--primary);
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
  color: var(--text);
  line-height: 1.7;
`;

const ContentGrid = styled.div<{ inView: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  overflow: hidden;
  
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const VideoSection = styled.div`
  position: relative;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  @media (max-width: 1100px) {
    min-height: 400px;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;
`;

const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 5;
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.3);
  }
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
    margin-left: 5px;
  }
`;

const ExclusiveTag = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  background: linear-gradient(135deg, var(--primary) 0%, #b78a63 100%);
  color: white;
  padding: 12px 25px 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0 30px 30px 0;
  box-shadow: 0 10px 20px rgba(203, 157, 118, 0.3);
  z-index: 3;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s infinite;
    border-radius: 0 30px 30px 0;
  }
`;

const LeadMagnetContainer = styled.div`
  padding: 50px;
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1100px) {
    padding: 40px;
  }
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const LeadMagnetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  overflow-y: auto;
  max-height: 600px;
  padding-right: 10px;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 10px;
  }
`;

const LeadMagnetItem = styled.div<{ color: string; colorEnd: string; delay: number; active: boolean }>`
  background-color: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeIn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: ${props => 0.15 + props.delay * 0.15}s;
  
  ${props => props.active && css`
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
    
    &::before {
      opacity: 1;
    }
    
    .icon-wrapper {
      background: linear-gradient(135deg, ${props.color} 0%, ${props.colorEnd} 100%);
      
      svg {
        color: white;
        transform: scale(1.1);
      }
    }
  `}
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
    
    &::before {
      opacity: 1;
    }
    
    .icon-wrapper {
      background: linear-gradient(135deg, ${props => props.color} 0%, ${props => props.colorEnd} 100%);
      
      svg {
        color: white;
        transform: scale(1.1);
      }
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, ${props => props.color}, ${props => props.colorEnd});
    opacity: 0.5;
    transition: opacity 0.3s ease;
    border-radius: 16px 0 0 16px;
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${props => props.color}15;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  svg {
    width: 30px;
    height: 30px;
    color: ${props => props.color};
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

const LeadMagnetContent = styled.div`
  flex: 1;
`;

const MagnetTag = styled.div`
  display: inline-block;
  background-color: var(--primary);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const MagnetTitle = styled.h3`
  color: var(--secondary);
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: 700;
`;

const MagnetDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.5;
  margin-bottom: 0;
`;

const FloatingIcon = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  opacity: 0.03;
  z-index: 0;
  animation: ${float} 6s ease-in-out infinite;
  
  &.icon1 {
    top: 15%;
    right: 10%;
    animation-delay: 0s;
  }
  
  &.icon2 {
    bottom: 10%;
    left: 5%;
    animation-delay: 2s;
  }
  
  svg {
    width: 100%;
    height: 100%;
    color: var(--primary);
  }
`;

const CTAContainer = styled.div<{ inView: boolean }>`
  margin-top: 40px;
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.7s ease 0.8s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, var(--primary), #b78a63);
  }
`;

const CTATitle = styled.h3`
  font-size: 1.4rem;
  color: var(--secondary);
  margin-bottom: 15px;
  font-weight: 700;
`;

const CTAText = styled.p`
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto 25px;
  color: var(--text);
  line-height: 1.6;
`;

const CustomButton = styled(Button)`
  background: linear-gradient(135deg, var(--primary) 0%, #b78a63 100%);
  border: none;
  padding: 14px 28px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(203, 157, 118, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(203, 157, 118, 0.3);
  }
`;

const LeadMagnets = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [activeMagnet, setActiveMagnet] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleMouseEnter = (magnetId: string) => {
    setActiveMagnet(magnetId);
  };
  
  const handleMouseLeave = () => {
    setActiveMagnet(null);
  };
  
  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false; // Ensure it's unmuted when playing
        videoRef.current.play().catch(err => {
          console.error("Error playing video:", err);
          // If autoplay policy blocks unmuted play, try muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LeadMagnetsSection ref={ref} id="bonuses">
      <BackgroundElement className="circle1" />
      <BackgroundElement className="circle2" />
      
      <FloatingIcon className="icon1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </FloatingIcon>
      
      <FloatingIcon className="icon2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      </FloatingIcon>
      
      <Container>
        <SectionHeader inView={inView}>
          <SectionTitle>Exclusive <span>Bonuses</span> When You Book Today</SectionTitle>
          <SectionSubtitle>
            Schedule your free consultation now and get instant access to these 
            valuable resources to help you plan and maximize your smart home investment.
          </SectionSubtitle>
        </SectionHeader>
        
        <ContentGrid inView={inView}>
          <VideoSection>
            <video 
              ref={videoRef}
              src={bonusVideoUrl} 
              poster={bonusImageUrl}
              loop
              muted
              preload="auto"
              playsInline
              controls={isPlaying}
              onError={(e) => console.error("Video error:", e)}
            />
            <VideoOverlay style={{ opacity: isPlaying ? 0.3 : 1 }} onClick={toggleVideo}>
              <PlayButton>
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </PlayButton>
              <ExclusiveTag>EXCLUSIVE BONUSES</ExclusiveTag>
            </VideoOverlay>
          </VideoSection>
          
          <LeadMagnetContainer>
            <LeadMagnetList>
              {leadMagnets.map((item, index) => (
                <LeadMagnetItem 
                  key={item.id} 
                  color={item.color}
                  colorEnd={item.colorEnd}
                  delay={index}
                  active={activeMagnet === item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <IconWrapper className="icon-wrapper" color={item.color}>
                    {item.icon}
                  </IconWrapper>
                  <LeadMagnetContent>
                    {item.tag && <MagnetTag>{item.tag}</MagnetTag>}
                    <MagnetTitle>{item.title}</MagnetTitle>
                    <MagnetDescription>{item.description}</MagnetDescription>
                  </LeadMagnetContent>
                </LeadMagnetItem>
              ))}
            </LeadMagnetList>
            
            <CTAContainer inView={inView}>
              <CTATitle>Ready to Transform Your Home?</CTATitle>
              <CTAText>
                Schedule your free consultation today and gain instant access to all these
                exclusive bonuses designed to help you create your perfect smart home.
              </CTAText>
              <CustomButton 
                onClick={() => scrollToSection('contact')}
              >
                Claim Your Free Consultation + Bonuses
              </CustomButton>
            </CTAContainer>
          </LeadMagnetContainer>
        </ContentGrid>
      </Container>
    </LeadMagnetsSection>
  );
};

export default LeadMagnets; 