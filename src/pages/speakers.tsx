import React from 'react';
import styled from 'styled-components';
import ArchitecturalSpeakers from '../components/ArchitecturalSpeakers';
import Button from '../components/Button';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 140px 0 80px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #2c3e50 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
  color: #4a5568;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Header = styled.header`
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FooterSection = styled.footer`
  background-color: #2c3e50;
  color: #fff;
  padding: 40px 0;
  text-align: center;
`;

export default function SpeakersPage() {
  return (
    <PageContainer>
      <header>
        <title>Architectural Speakers | HomeVision</title>
        <meta name="description" content="Experience premium audio with our architectural speakers - designed for the modern smart home." />
      </header>
      
      <Header>
        <Container>
          <h2>HomeVision</h2>
        </Container>
      </Header>
      
      <MainContent>
        <HeroSection>
          <Container>
            <HeroTitle>Premium Architectural Audio</HeroTitle>
            <HeroSubtitle>
              Immersive sound experiences seamlessly integrated into your home's architecture.
              Our speakers deliver powerful, crystal-clear audio while complementing your interior design.
            </HeroSubtitle>
            <Button>Schedule a Consultation</Button>
          </Container>
        </HeroSection>
        
        <ArchitecturalSpeakers />
      </MainContent>
      
      <FooterSection>
        <Container>
          <p>© {new Date().getFullYear()} HomeVision. All rights reserved.</p>
        </Container>
      </FooterSection>
    </PageContainer>
  );
} 