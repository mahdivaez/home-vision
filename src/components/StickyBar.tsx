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
    gap: 15px;
  }
`;

const OfferText = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 15px;
  
  .icon {
    font-size: 1.5rem;
  }
  
  .text {
    span {
      color: var(--primary);
      font-weight: 600;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 5px;
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
        
        <Button 
          primary
          onClick={() => scrollToSection('contact')}
        >
          Book My Free Consult
        </Button>
      </Container>
    </StickyContainer>
  );
};

export default StickyBar; 