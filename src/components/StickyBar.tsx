import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StickyContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--secondary);
  padding: 15px 0;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: translateY(${props => props.isVisible ? '0' : '100%'});
  
  @media (max-width: 480px) {
    padding: 8px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    padding: 8px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 5px 12px;
    gap: 8px;
  }
`;

const OfferText = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 15px;
  
  .icon {
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  
  .text {
    span {
      color: var(--primary);
      font-weight: 600;
    }
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    gap: 8px;
  }
`;

const ActionContainer = styled.div`
  display: flex; 
  align-items: center; 
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    flex-direction: row;
    gap: 8px;
  }
`;

const PhoneLink = styled.a`
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  
  &:hover, &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 12px;
  }
  
  @media (max-width: 480px) {
    flex: 1;
    justify-content: center;
    font-size: 0.75rem;
    padding: 6px 8px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
  
  svg {
    @media (max-width: 480px) {
      width: 12px;
      height: 12px;
    }
  }
`;

const AppointmentButton = styled(Button)`
  padding: 10px 20px;
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    flex: 1;
    padding: 6px 8px;
    font-size: 0.75rem;
  }
`;

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky bar after scrolling down 500px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StickyContainer isVisible={isVisible}>
      <Container>
        <OfferText>
          <div className="icon">🏠</div>
          <div className="text">
            Smart Home Installed in 14 Days – From <span>$17K</span>
          </div>
        </OfferText>
        
        <ActionContainer>
          <PhoneLink href="tel:+16047164201">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +1 (604) 716 4201
          </PhoneLink>
          
          <AppointmentButton 
            primary
            onClick={() => scrollToSection('contact')}
          >
            Make an Appointment
          </AppointmentButton>
        </ActionContainer>
      </Container>
    </StickyContainer>
  );
};

export default StickyBar; 