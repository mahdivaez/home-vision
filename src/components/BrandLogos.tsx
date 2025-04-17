import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Updated logo array with more reliable paths
const logos = [
  { src: '/control4.png', alt: 'Control4' },
  { src: '/lutron.png', alt: 'Lutron' },
  { src: '/sonos.png', alt: 'Sonos' },
  { src: '/sony.png', alt: 'Sony' },
  { src: '/jvc.png', alt: 'JVC' },
  { src: '/leon.png', alt: 'Leon' },
  { src: '/senhizer.png', alt: 'Sennheiser' },
  { src: '/seura.png', alt: 'Seura' },
  { src: '/araknis.png', alt: 'Araknis' },
  { src: '/urc.png', alt: 'Urc' },
  { src: '/smart-clare.png', alt: 'Smart Clare' },
  { src: '/seura.png', alt: 'Seura' },
  { src: '/line.png', alt: 'Linde' },
  { src: '/clare.png', alt: 'Clare' },
  { src: '/luma.png', alt: 'Luma' },
];

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
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
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(203, 157, 118, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.1);
  }
`;

const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(80px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(80px) rotate(-360deg);
  }
`;

// Main section container
const LogosSection = styled.section`
  padding: 100px 0;
  background-color: #0a0a0a;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.1) 0%, rgba(10, 10, 10, 0) 70%);
    top: -300px;
    right: -300px;
    z-index: 0;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  opacity: 0.2;
`;

// Container for content alignment
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

// Section heading with gradient and animation
const SectionTitle = styled.h2<{ inView: boolean }>`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(203, 157, 118, 0.9);
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  ${props => props.inView && `
    opacity: 1;
    transform: translateY(0);
  `}
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    transform-origin: left;
  }
`;

// Subtitle with animation
const Subtitle = styled.h3<{ inView: boolean }>`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 60px;
  color: #fff;
  font-weight: 300;
  max-width: 650px;
  line-height: 1.3;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.2s;
  
  ${props => props.inView && `
    opacity: 1;
    transform: translateY(0);
  `}
  
  span {
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 400;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: rgba(203, 157, 118, 0.1);
      z-index: -1;
      border-radius: 10px;
    }
  }
`;

// Container for the marquee effect
const MarqueeContainer = styled.div<{ inView: boolean }>`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 0.8s ease;
  
  ${props => props.inView && `
    opacity: 1;
  `}
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
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

// Container for each row
const RowContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

// Animation speed variations for rows
const MarqueeRow = styled.div<{ speed: number, reverse?: boolean, delay: number, inView: boolean }>`
  display: flex;
  align-items: center;
  animation: ${props => css`${scroll} ${props.speed}s linear infinite`};
  animation-direction: ${props => props.reverse ? 'reverse' : 'normal'};
  animation-delay: ${props => props.delay}s;
  animation-play-state: paused;
  
  ${props => props.inView && `
    animation-play-state: running;
  `}
`;

// Individual logo with hover effect
const Logo = styled.div<{ featured?: boolean }>`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  padding: 10px;
  opacity: 0.7;
  background: rgba(30, 30, 30, 0.3);
  border-radius: 8px;
  min-width: 150px;
  filter: brightness(1.2);
  transition: all 0.5s ease;
  position: relative;
  
  ${props => props.featured && css`
    animation: ${glowPulse} 4s infinite ease-in-out;
    border: 1px solid rgba(203, 157, 118, 0.3);
    background: rgba(40, 40, 40, 0.5);
    opacity: 0.85;
  `}
  
  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(203, 157, 118, 0.2);
    background: rgba(30, 30, 30, 0.5);
    z-index: 10;
  }
  
  img {
    max-height: 100%;
    max-width: 120px;
    object-fit: contain;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.5), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

// Fallback for logo when image loading fails
const LogoFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(203, 157, 118, 0.9);
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

// Partner decoration element
const PartnerDecoration = styled.div`
  position: absolute;
  top: 50px;
  right: 80px;
  width: 120px;
  height: 120px;
  z-index: 0;
  opacity: 0.7;
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  
  &::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px dashed rgba(203, 157, 118, 0.3);
    animation: ${css`${float} 6s ease-in-out infinite`};
  }
  
  &::after {
    top: 20px;
    left: 20px;
    width: 60%;
    height: 60%;
    border: 1px solid rgba(203, 157, 118, 0.2);
    animation: ${css`${float} 4s ease-in-out infinite`};
    animation-delay: 1s;
  }
`;

const OrbitingDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.7);
  top: 60px;
  left: 60px;
  animation: ${css`${orbit} 12s linear infinite`};
  
  &:nth-child(2) {
    width: 5px;
    height: 5px;
    animation-duration: 8s;
    animation-delay: 1s;
  }
  
  &:nth-child(3) {
    width: 4px;
    height: 4px;
    animation-duration: 15s;
    animation-delay: 2s;
    background: rgba(255, 255, 255, 0.5);
  }
`;

const RowDivider = styled.div<{ inView: boolean }>`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.2), transparent);
  margin: 30px 0;
  position: relative;
  opacity: 0;
  transition: opacity 0.6s ease;
  
  ${props => props.inView && `
    opacity: 1;
  `}
  
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.2);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LogoRowLabel = styled.div<{ inView: boolean, align: 'left' | 'right' }>`
  position: absolute;
  ${props => props.align === 'left' ? 'left: 15px;' : 'right: 15px;'}
  top: 50%;
  transform: translateY(-50%);
  background: rgba(40, 40, 40, 0.7);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  color: rgba(203, 157, 118, 0.8);
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.8s ease;
  
  ${props => props.inView && `
    opacity: 1;
  `}
`;

// BrandLogos component
const BrandLogos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Handle image load errors
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    
    if (parent) {
      target.style.display = 'none';
      parent.innerHTML = `<div style="color: rgba(203, 157, 118, 0.9); font-weight: 500; font-size: 14px; text-align: center;">Brand Logo</div>`;
    }
  };
  
  // Evenly distribute logos between two rows
  const halfPoint = Math.ceil(logos.length / 2);
  const firstRowLogos = logos.slice(0, halfPoint);
  const secondRowLogos = logos.slice(halfPoint);
  
  // Define which logos to highlight as featured
  const featuredIndexes = [1, 3, 5]; // Featured logos in first row
  const featuredIndexes2 = [0, 2, 4]; // Featured logos in second row
  
  return (
    <LogosSection id="partners" ref={ref}>
      <BackgroundPattern />
      <PartnerDecoration>
        <OrbitingDot />
        <OrbitingDot />
        <OrbitingDot />
      </PartnerDecoration>
      
      <Container>
        <SectionTitle inView={inView}>Trusted Partners</SectionTitle>
        <Subtitle inView={inView}>
          We integrate with the <span>world's leading brands</span> to create a seamless smart home experience
        </Subtitle>
      </Container>
      
      <MarqueeContainer inView={inView}>
        <LogoRowLabel inView={inView} align="left">Premium Brands</LogoRowLabel>
        <MarqueeRow speed={40} inView={inView} delay={0.2}>
          <RowContainer>
            {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
              <Logo 
                key={`row1-${index}`}
                featured={featuredIndexes.includes(index % firstRowLogos.length)}
              >
                <img src={logo.src} alt={logo.alt} onError={handleError} />
              </Logo>
            ))}
          </RowContainer>
        </MarqueeRow>
      </MarqueeContainer>
      
      <RowDivider inView={inView} />
      
      <MarqueeContainer inView={inView}>
        <LogoRowLabel inView={inView} align="right">Integration Partners</LogoRowLabel>
        <MarqueeRow speed={35} reverse inView={inView} delay={0.5}>
          <RowContainer>
            {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
              <Logo 
                key={`row2-${index}`}
                featured={featuredIndexes2.includes(index % secondRowLogos.length)}
              >
                <img src={logo.src} alt={logo.alt} onError={handleError} />
              </Logo>
            ))}
          </RowContainer>
        </MarqueeRow>
      </MarqueeContainer>
    </LogosSection>
  );
};

export default BrandLogos; 