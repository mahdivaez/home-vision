import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

const packages = [
  {
    id: 'bedroom1',
    title: '1 Bedroom Smart Package',
    subtitle: 'Perfect for apartments and smaller spaces',
    price: '$17,000',
    image: '/1bed.png',
    features: [
      'Smart lighting (5 zones)',
      'Audio system (4 speakers)',
      '1 smart thermostat',
      '1 video doorbell',
      '1 smart touchscreen',
      '2 Wi-Fi access points',
      'Smart lock',
      'Full installation + network setup',
    ],
    color: '#f8d7bc',
    colorEnd: '#eac7ab',
  },
  {
    id: 'bedroom2',
    title: '2 Bedroom Smart Package',
    subtitle: 'Ideal for condos and townhomes',
    price: '$24,000',
    image: '/2bed.png',
    features: [
      'Smart lighting (7 zones)',
      'Audio (6 speakers)',
      '2 thermostats',
      'Video doorbell + touchscreen',
      'Smart lock',
      'Control4 automation hub',
      'Full install + tuning',
    ],
    featured: true,
    color: '#CB9D76',
    colorEnd: '#bb8d66',
  },
  {
    id: 'bedroom3',
    title: '3 Bedroom Smart Package',
    subtitle: 'Comprehensive coverage for larger spaces',
    price: '$33,000',
    image: '/3bed.png',
    features: [
      'Smart lighting (10 zones)',
      'Audio (8–10 speakers)',
      '3 thermostats',
      'Touchscreen x2 + TV control',
      'Video doorbell + smart lock',
      'Full network + access points',
      'Intercom/gate options',
    ],
    color: '#b78a63',
    colorEnd: '#a77a53',
  },
  {
    id: 'custom',
    title: 'Custom Luxury Homes',
    subtitle: 'Bespoke solutions for premium properties',
    price: 'Starting at $50,000+',
    image: '/cusrombed.png',
    features: [
      'Full panelized lighting',
      'Multi-zone audio/video',
      'In-ceiling speakers',
      'Motorized shades',
      'Rack system & power conditioning',
      'Full-service engineering + install',
    ],
    color: '#8d6c4e',
    colorEnd: '#7d5c3e',
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

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(203, 157, 118, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0);
  }
`;

const PackagesSection = styled.section`
  padding: 120px 0 150px;
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
  color: #fff;
  margin-bottom: 15px;
  font-size: 2.6rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  
  span {
    color: rgba(203, 157, 118, 0.9);
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
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const PackageCard = styled.div<{ color: string; colorEnd: string; featured?: boolean; delay: number; active: boolean }>`
  background-color: rgba(20, 20, 20, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fadeIn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: ${props => 0.15 + props.delay * 0.15}s;
  
  ${props => props.featured && css`
    transform: translateY(${props.active ? '-20px' : '-10px'});
    box-shadow: 0 25px 50px rgba(0, 0, 0, ${props.active ? '0.4' : '0.3'});
    border: 2px solid ${props.color};
    z-index: 2;
  `}
  
  ${props => props.active && !props.featured && css`
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  `}
  
  &:hover {
    transform: translateY(${props => props.featured ? '-20px' : '-15px'});
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, ${props => props.color}, ${props => props.colorEnd});
    opacity: ${props => props.featured || props.active ? 1 : 0.5};
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const PackageImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
    background-color: #1a1a1a;
  }
  
  ${PackageCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    ${props => props.color}15 100%
  );
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  ${PackageCard}:hover & {
    opacity: 1;
  }
`;

const BestValueTag = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--primary) 0%, #b78a63 100%);
  color: white;
  padding: 10px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(203, 157, 118, 0.3);
  z-index: 3;
  animation: ${pulse} 2s infinite;
  
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
    border-radius: 30px;
  }
`;

const PackageContent = styled.div`
  padding: 35px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PackageHeader = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

const PackageTitle = styled.h3`
  color: #fff;
  font-size: 1.6rem;
  margin-bottom: 5px;
  font-weight: 700;
`;

const PackageSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-bottom: 15px;
  opacity: 0.8;
`;

const PackagePrice = styled.div<{ color: string }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.color};
  margin-top: 15px;
  display: flex;
  align-items: baseline;
  
  span {
    font-size: 1rem;
    opacity: 0.7;
    margin-left: 5px;
    font-weight: normal;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.01));
  margin: 5px 0 25px;
`;

const FeaturesContainer = styled.div`
  flex: 1;
  margin-bottom: 30px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FeatureCheck = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: ${props => props.color}15;
  color: ${props => props.color};
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  font-size: 12px;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const FeatureText = styled.span`
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
`;

const CTAButton = styled.div`
  margin-top: auto;
`;

const CustomButton = styled(Button)<{ bgColor: string }>`
  background: linear-gradient(135deg, ${props => props.bgColor} 0%, ${props => props.bgColor}dd 100%);
  border: none;
  padding: 14px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 10px 20px ${props => props.bgColor}33;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px ${props => props.bgColor}40;
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  opacity: 0.04;
  z-index: 0;
  animation: ${float} 6s ease-in-out infinite;
  
  &.icon1 {
    top: 10%;
    right: 5%;
    animation-delay: 0s;
  }
  
  &.icon2 {
    bottom: 5%;
    left: 5%;
    animation-delay: 2s;
  }
  
  svg {
    width: 100%;
    height: 100%;
    color: var(--primary);
  }
`;

const Packages = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleMouseEnter = (packageId: string) => {
    setActivePackage(packageId);
  };
  
  const handleMouseLeave = () => {
    setActivePackage(null);
  };

  return (
    <PackagesSection id="packages" ref={ref}>
      <BackgroundPattern />
      
      <FloatingIcon className="icon1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </FloatingIcon>
      
      <FloatingIcon className="icon2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      </FloatingIcon>
      
      <Container>
        <SectionHeader inView={inView}>
          <SectionTitle>Choose Your <span>Smart Home</span> Package</SectionTitle>
          <SectionSubtitle>
            Select the perfect smart home solution for your space. Each package 
            includes professional design, installation, and programming with our
            white-glove service guarantee.
          </SectionSubtitle>
        </SectionHeader>
        
        <PackagesGrid>
          {packages.map((pkg, index) => (
            <PackageCard 
              key={pkg.id} 
              color={pkg.color}
              colorEnd={pkg.colorEnd}
              featured={pkg.featured}
              delay={index}
              active={activePackage === pkg.id}
              onMouseEnter={() => handleMouseEnter(pkg.id)}
              onMouseLeave={handleMouseLeave}
            >
              {pkg.featured && (
                <BestValueTag>MOST POPULAR</BestValueTag>
              )}
              <PackageImageContainer>
                <img src={pkg.image} alt={pkg.title} />
                <ImageOverlay color={pkg.color} />
              </PackageImageContainer>
              
              <PackageContent>
                <PackageHeader>
                  <PackageTitle>{pkg.title}</PackageTitle>
                  <PackageSubtitle>{pkg.subtitle}</PackageSubtitle>
                  <Divider />
                  <PackagePrice color={pkg.color}>
                    {pkg.price}
                    {pkg.id === 'custom' && <span>starting price</span>}
                  </PackagePrice>
                </PackageHeader>
                
                <FeaturesContainer>
                  <FeaturesList>
                    {pkg.features.map((feature, i) => (
                      <FeatureItem key={i}>
                        <FeatureCheck color={pkg.color}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </FeatureCheck>
                        <FeatureText>{feature}</FeatureText>
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                </FeaturesContainer>
                
                <CTAButton>
                  <CustomButton 
                    onClick={() => scrollToSection('contact')}
                    fullWidth
                    bgColor={pkg.color}
                  >
                    Get Started
                  </CustomButton>
                </CTAButton>
              </PackageContent>
            </PackageCard>
          ))}
        </PackagesGrid>
      </Container>
    </PackagesSection>
  );
};

export default Packages; 