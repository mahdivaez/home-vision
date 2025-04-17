import React, { useState, useEffect } from 'react';
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
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Styled Components
const UrgencyContainer = styled.section`
  background-color: #0a0a0a;
  color: #fff;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(203, 157, 118, 0.15) 0%, transparent 70%),
              radial-gradient(circle at 80% 70%, rgba(203, 157, 118, 0.1) 0%, transparent 70%);
  z-index: 0;
`;

const BackgroundLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`;

const ContentWrapper = styled.div<{ inView: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const UrgencyTitle = styled.h2`
  font-size: 3.2rem;
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
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const UrgencySubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 30px auto 60px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const OfferSectionWrapper = styled.div<{ inView: boolean }>`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(203, 157, 118, 0.1);
  padding: 50px;
  margin-bottom: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.2s;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const OfferColumn = styled.div<{ delay: number, inView: boolean }>`
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out;
  transition-delay: ${props => props.delay * 0.1}s;
`;

const OfferTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  color: rgba(203, 157, 118, 0.9);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.9), transparent);
  }
`;

const OfferList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OfferItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.9);
`;

const CheckIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  color: rgba(203, 157, 118, 0.9);
`;

const OfferText = styled.span`
  font-size: 1.1rem;
  line-height: 1.5;
`;

const CountdownWrapper = styled.div<{ inView: boolean }>`
  width: 100%;
  margin-bottom: 60px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.4s;
`;

const CountdownContainer = styled.div`
  background: rgba(203, 157, 118, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(203, 157, 118, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CountdownTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  span {
    color: rgba(203, 157, 118, 0.9);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.9), transparent);
  }
`;

const Countdown = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  
  @media (max-width: 576px) {
    gap: 15px;
  }
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: rgba(203, 157, 118, 0.1);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  border: 1px solid rgba(203, 157, 118, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 3s infinite ease-in-out;
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    width: 60px;
    height: 60px;
  }
`;

const TimeLabel = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 1px;
`;

const SpotsLeftWrapper = styled.div<{ inView: boolean }>`
  margin-bottom: 40px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.6s;
`;

const SpotsLeft = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.2), rgba(203, 157, 118, 0.05));
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
  border: 1px solid rgba(203, 157, 118, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${float} 3s infinite ease-in-out;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    margin-left: 5px;
  }
`;

const CTAWrapper = styled.div<{ inView: boolean }>`
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.7s;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  padding: 18px 40px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const UrgencySection = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [offerRef, offerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [countdownRef, countdownInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [spotsRef, spotsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [ctaRef, ctaInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Calculate time remaining until end of month
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      lastDay.setHours(23, 59, 59, 999);
      
      const difference = lastDay.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <UrgencyContainer id="limited-offer">
      <BackgroundPattern />
      <BackgroundLines />
      <Container>
        <ContentWrapper ref={headerRef} inView={headerInView}>
          <SectionHeader>
            <UrgencyTitle>Limited Time Offer</UrgencyTitle>
            <UrgencySubtitle>
              Schedule your free consultation today and receive these exclusive bonuses 
              that will enhance your premium smart home experience
            </UrgencySubtitle>
          </SectionHeader>
        </ContentWrapper>
        
        <OfferSectionWrapper ref={offerRef} inView={offerInView}>
          <OffersGrid>
            <OfferColumn delay={1} inView={offerInView}>
              <OfferTitle>Premium Exclusives</OfferTitle>
              <OfferList>
                <OfferItem>
                  <CheckIcon>✓</CheckIcon>
                  <OfferText>Complimentary Design Consultation ($450 Value)</OfferText>
                </OfferItem>
                <OfferItem>
                  <CheckIcon>✓</CheckIcon>
                  <OfferText>15% OFF Premium Installation Package</OfferText>
                </OfferItem>
                <OfferItem>
                  <CheckIcon>✓</CheckIcon>
                  <OfferText>Priority Installation Scheduling</OfferText>
                </OfferItem>
                <OfferItem>
                  <CheckIcon>✓</CheckIcon>
                  <OfferText>Custom Smart Home Blueprint & Roadmap</OfferText>
                </OfferItem>
              </OfferList>
            </OfferColumn>
            
            <OfferColumn delay={2} inView={offerInView}>
              <OfferTitle>Luxury Additions</OfferTitle>
              <OfferList>
                <OfferItem>
                  <CheckIcon>✓</CheckIcon>
                  <OfferText>Exclusive Smart Home Technology Guide</OfferText>
                </OfferItem>
                <OfferItem>
                  <CheckIcon>✓</CheckIcon>
                  <OfferText>Private Demo of Latest Premium Features</OfferText>
                </OfferItem>
                <OfferItem>
                  <CheckIcon>✓</CheckIcon>
                  <OfferText>Personalized Energy Efficiency Analysis</OfferText>
                </OfferItem>
                <OfferItem>
                  <CheckIcon>✓</CheckIcon>
                  <OfferText>Lifetime VIP Support & Priority Service</OfferText>
                </OfferItem>
              </OfferList>
            </OfferColumn>
          </OffersGrid>
        </OfferSectionWrapper>
        
        <CountdownWrapper ref={countdownRef} inView={countdownInView}>
          <CountdownContainer>
            <CountdownTitle>Offer Expires in <span>Limited Time</span></CountdownTitle>
            
            <Countdown>
              <TimeUnit>
                <TimeNumber>{timeLeft.days.toString().padStart(2, '0')}</TimeNumber>
                <TimeLabel>Days</TimeLabel>
              </TimeUnit>
              <TimeUnit>
                <TimeNumber>{timeLeft.hours.toString().padStart(2, '0')}</TimeNumber>
                <TimeLabel>Hours</TimeLabel>
              </TimeUnit>
              <TimeUnit>
                <TimeNumber>{timeLeft.minutes.toString().padStart(2, '0')}</TimeNumber>
                <TimeLabel>Minutes</TimeLabel>
              </TimeUnit>
              <TimeUnit>
                <TimeNumber>{timeLeft.seconds.toString().padStart(2, '0')}</TimeNumber>
                <TimeLabel>Seconds</TimeLabel>
              </TimeUnit>
            </Countdown>
          </CountdownContainer>
        </CountdownWrapper>
        
        <SpotsLeftWrapper ref={spotsRef} inView={spotsInView}>
          <SpotsLeft>
            🕒 Only <span>5 premium slots</span> remaining this month
          </SpotsLeft>
        </SpotsLeftWrapper>
        
        <CTAWrapper ref={ctaRef} inView={ctaInView}>
          <StyledButton onClick={() => scrollToSection('contact')}>
            Reserve Your Consultation
          </StyledButton>
        </CTAWrapper>
      </Container>
    </UrgencyContainer>
  );
};

export default UrgencySection; 