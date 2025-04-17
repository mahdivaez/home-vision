import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Replace the team image with homevison.jpg from public folder
const teamImageUrl = '/homevison.jpg';

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

const reveal = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
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

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Main section container
const AboutSection = styled.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.15) 0%, rgba(10, 10, 10, 0) 70%);
    top: -200px;
    left: -200px;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.1) 0%, rgba(10, 10, 10, 0) 70%);
    bottom: -150px;
    right: -150px;
    z-index: 0;
  }
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

// Container for content alignment
const AboutContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 0 30px;
  }
`;

// Section title with animated underline
const SectionTitle = styled.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(203, 157, 118, 0.9);
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
  font-weight: 600;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    transform-origin: left;
    animation: ${reveal} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
`;

// Main heading with gradient
const MainHeading = styled.h3<{ inView: boolean }>`
  font-size: clamp(2.5rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  span {
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: rgba(203, 157, 118, 0.1);
      z-index: -1;
      border-radius: 10px;
    }
  }
`;

// Content container with staggered animation for children
const AboutContent = styled.div<{ inView: boolean }>`
  p {
    margin-bottom: 25px;
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.3s;
    
    ${props => props.inView && css`
      opacity: 1;
      transform: translateY(0);
    `}
  }
`;

// Key features section
const KeyFeatures = styled.div<{ inView: boolean }>`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div<{ delay: number, inView: boolean }>`
  display: flex;
  gap: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: ${props => props.delay * 0.1}s;
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(203, 157, 118, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(203, 157, 118, 0.9);
  border: 1px solid rgba(203, 157, 118, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      transparent, 
      transparent, 
      transparent, 
      rgba(203, 157, 118, 0.1)
    );
    transform: rotate(45deg);
    animation: ${shimmer} 3s linear infinite;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const FeatureContent = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #fff;
  }
  
  p {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

// Redesigned image container
const AboutImage = styled.div<{ inView: boolean }>`
  position: relative;
  height: 550px;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(0);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(40px) rotateY(-5deg);
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.2s;
    filter: brightness(1.1) contrast(1.05);
    
    ${props => props.inView && css`
      opacity: 1;
      transform: translateY(0) rotateY(0deg);
    `}
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    left: -30px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(203, 157, 118, 0.3);
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    transform: translate(20px, -20px);
    transition: all 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.6s;
    
    ${props => props.inView && css`
      opacity: 1;
      transform: translate(0, 0);
    `}
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 140px;
    height: 140px;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96 4H4V96H96V4Z' stroke='%23CB9D76' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='1 8'/%3E%3C/svg%3E");
    background-size: cover;
    z-index: -1;
    opacity: 0;
    transition: all 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.8s;
    
    ${props => props.inView && css`
      opacity: 0.7;
    `}
  }
  
  @media (max-width: 992px) {
    height: 450px;
  }
  
  @media (max-width: 576px) {
    height: 350px;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: radial-gradient(circle at center, rgba(203, 157, 118, 0.2) 0%, transparent 70%);
  z-index: -1;
  opacity: 0.7;
  filter: blur(20px);
`;

// Decorative elements for the image
const CircleDecoration = styled.div<{ inView: boolean }>`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  border: 2px dashed rgba(203, 157, 118, 0.4);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.9s;
  
  ${props => props.inView && css`
    opacity: 1;
    transform: scale(1);
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.6);
  }
`;

const RotatingBorder = styled.div<{ inView: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px dashed rgba(203, 157, 118, 0.3);
  opacity: 0;
  z-index: -1;
  animation: ${rotate} 20s linear infinite;
  transition: opacity 1s ease;
  transition-delay: 1s;
  
  ${props => props.inView && css`
    opacity: 1;
  `}
`;

// Features data
const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Client Satisfaction",
    description: "We put our clients first, ensuring your complete satisfaction with every project and installation."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Premium Quality",
    description: "We partner only with the most trusted brands and technologies for reliable, long-lasting results."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Expert Design",
    description: "Our certified designers create custom solutions tailored to your specific home and lifestyle needs."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Dedicated Support",
    description: "Our team provides ongoing maintenance and support long after installation is complete."
  }
];

const About = () => {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <AboutSection id="about">
      <BackgroundLines />
      <AboutContainer>
        <AboutContent ref={contentRef} inView={contentInView}>
          <SectionTitle>About Us</SectionTitle>
          
          <MainHeading inView={contentInView}>
            We Make Smart Homes <span>Simple & Elegant</span>
          </MainHeading>
          
          <p>
            For over a decade, HomeVision has been at the forefront of smart home innovation, 
            designing and implementing premium automation solutions for discerning homeowners.
          </p>
          
          <p>
            Our team of certified smart home specialists brings together expertise in technology, 
            design, and customer service to deliver seamless integration of intelligent systems 
            that enhance your lifestyle.
          </p>
          
          <KeyFeatures inView={contentInView}>
            {features.map((feature, index) => (
              <FeatureItem 
                key={index} 
                delay={index + 3}
                inView={contentInView}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureContent>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </FeatureContent>
              </FeatureItem>
            ))}
          </KeyFeatures>
        </AboutContent>
        
        <AboutImage ref={imageRef} inView={imageInView}>
          <RotatingBorder inView={imageInView} />
          <img src={teamImageUrl} alt="HomeVision Smart Home" />
          <GlowEffect />
          <CircleDecoration inView={imageInView} />
        </AboutImage>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 