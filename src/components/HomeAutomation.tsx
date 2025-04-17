import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(65, 154, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(65, 154, 255, 0.6); }
  100% { box-shadow: 0 0 5px rgba(65, 154, 255, 0.3); }
`;

// Styled Components
const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 20px;
  
  span {
    color: var(--accent);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--accent);
      border-radius: 3px;
    }
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: var(--text);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const GameWrapper = styled.div`
  margin-top: 40px;
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const GameInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 10px;
  }
  
  p {
    color: var(--text);
    margin: 0;
  }
`;

const ScoreDisplay = styled.div`
  text-align: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  padding: 15px 25px;
  border-radius: 15px;
  min-width: 150px;
  
  h4 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 5px;
  }
  
  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const MainImage = styled.div`
  height: 500px;
  background: url('/home-automations.jpg') center/cover no-repeat;
  border-radius: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%);
    z-index: 1;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

const FeatureCard = styled.div<{ isActive: boolean }>`
  background: white;
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid ${props => props.isActive ? 'var(--primary)' : 'transparent'};
  box-shadow: ${props => props.isActive ? 
    '0 10px 30px rgba(65, 154, 255, 0.2)' : 
    '0 10px 30px rgba(0, 0, 0, 0.05)'};
  
  ${props => props.isActive && css`
    animation: ${glow} 2s infinite;
  `}
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: rgba(65, 154, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 2rem;
`;

const FeaturePoints = styled.div<{ isActive: boolean }>`
  margin-left: auto;
  background: ${props => props.isActive ? 
    'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)' : 
    'rgba(65, 154, 255, 0.1)'};
  color: ${props => props.isActive ? 'white' : 'var(--primary)'};
  padding: 5px 12px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
`;

const FeatureTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary);
  margin: 0;
`;

const FeatureDescription = styled.p`
  color: var(--text);
  margin: 15px 0 0;
  line-height: 1.5;
`;

const ProgressDisplay = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;
`;

const ProgressTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary);
  margin: 0 0 20px;
  text-align: center;
`;

const ProgressBar = styled.div`
  height: 10px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${props => props.progress}%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  border-radius: 10px;
  transition: width 0.8s ease;
`;

const ProgressLevels = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;
`;

const ProgressLevel = styled.div<{ active: boolean }>`
  text-align: center;
  
  &::before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    background: ${props => props.active ? 'var(--primary)' : '#e9ecef'};
    border-radius: 50%;
    margin: 0 auto 8px;
    transition: all 0.3s ease;
  }
`;

const ProgressLevelName = styled.span<{ active: boolean }>`
  font-size: 0.9rem;
  color: ${props => props.active ? 'var(--primary)' : 'var(--text)'};
  font-weight: ${props => props.active ? '600' : '400'};
`;

const BadgesContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const BadgesTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 20px;
  text-align: center;
`;

const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const Badge = styled.div<{ unlocked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.unlocked ? 'rgba(65, 154, 255, 0.2)' : '#e9ecef'};
  background: ${props => props.unlocked ? 'rgba(65, 154, 255, 0.05)' : 'white'};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BadgeIcon = styled.div<{ unlocked: boolean }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${props => props.unlocked ? 
    'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)' : 
    '#f0f0f0'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 2rem;
  color: ${props => props.unlocked ? 'white' : '#999'};
  transition: all 0.3s ease;
`;

const BadgeTitle = styled.span<{ unlocked: boolean }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.unlocked ? 'var(--primary)' : 'var(--text)'};
  margin-bottom: 5px;
`;

const BadgeInfo = styled.small`
  color: #999;
  display: block;
`;

const HomeAutomation = () => {
  const [score, setScore] = useState(0);
  const [discoveredFeatures, setDiscoveredFeatures] = useState<number[]>([]);
  
  const features = [
    {
      id: 1,
      icon: '💡',
      title: 'Smart Lighting',
      description: 'Control your lights from anywhere, set schedules and automations, and save energy with smart lighting throughout your home.',
      points: 15
    },
    {
      id: 2,
      icon: '🔊',
      title: 'Voice Assistant',
      description: 'Control your home with simple voice commands for hands-free convenience. Adjust lights, temperature, music, and more.',
      points: 20
    },
    {
      id: 3,
      icon: '🌡️',
      title: 'Smart Thermostat',
      description: 'Optimize your home\'s temperature for comfort and energy savings. Learn your preferences and automatically adjust.',
      points: 25
    },
    {
      id: 4,
      icon: '🔒',
      title: 'Security System',
      description: 'Keep your home safe with smart cameras, sensors, and alerts. Monitor and control your security from anywhere.',
      points: 30
    },
    {
      id: 5,
      icon: '📡',
      title: 'Smart Hub',
      description: 'The central command center for all your connected devices. Integrate different brands and systems into one cohesive experience.',
      points: 40
    }
  ];
  
  const badges = [
    {
      icon: '💡',
      title: 'Lighting Master',
      unlockThreshold: 15,
      description: 'Started your smart home journey'
    },
    {
      icon: '🔊',
      title: 'Voice Wizard',
      unlockThreshold: 35,
      description: 'Exploring voice control'
    },
    {
      icon: '🌡️',
      title: 'Climate Controller',
      unlockThreshold: 60,
      description: 'Managing temperature smartly'
    },
    {
      icon: '🔒',
      title: 'Security Expert',
      unlockThreshold: 90,
      description: 'Protecting your home'
    },
    {
      icon: '🏆',
      title: 'Home Automation Guru',
      unlockThreshold: 130,
      description: 'Mastered smart home technology'
    }
  ];
  
  const levels = [
    { name: 'Beginner', threshold: 0 },
    { name: 'Novice', threshold: 35 },
    { name: 'Intermediate', threshold: 60 },
    { name: 'Advanced', threshold: 90 },
    { name: 'Expert', threshold: 130 }
  ];
  
  const handleFeatureClick = (id: number) => {
    if (!discoveredFeatures.includes(id)) {
      const feature = features.find(f => f.id === id);
      if (feature) {
        setScore(score + feature.points);
        setDiscoveredFeatures([...discoveredFeatures, id]);
      }
    }
  };
  
  const getCurrentLevel = () => {
    let currentLevel = 0;
    levels.forEach((level, index) => {
      if (score >= level.threshold) {
        currentLevel = index;
      }
    });
    return currentLevel;
  };
  
  const progressPercentage = () => {
    const currentLevel = getCurrentLevel();
    const nextLevel = currentLevel < levels.length - 1 ? currentLevel + 1 : currentLevel;
    
    if (currentLevel === levels.length - 1) return 100;
    
    const currentThreshold = levels[currentLevel].threshold;
    const nextThreshold = levels[nextLevel].threshold;
    const range = nextThreshold - currentThreshold;
    const progress = score - currentThreshold;
    
    return Math.min(100, (progress / range) * 100);
  };
  
  return (
    <Section id="home-automation">
      <Container>
        <SectionHeader>
          <SectionTitle>Smart Home <span>Automation</span></SectionTitle>
          <SectionDescription>
            Transform your home with intelligent automation. Explore our interactive 
            demo and discover the smart features that enhance your everyday living.
          </SectionDescription>
        </SectionHeader>
        
        <GameWrapper>
          <GameHeader>
            <GameInfo>
              <h3>Smart Home Explorer</h3>
              <p>Discover smart technology features and build your automation skills</p>
            </GameInfo>
            <ScoreDisplay>
              <h4>SMART POINTS</h4>
              <span>{score}</span>
            </ScoreDisplay>
          </GameHeader>
          
          <ImageContainer>
            <MainImage />
          </ImageContainer>
          
          <ProgressDisplay>
            <ProgressTitle>Your Smart Home Journey: {levels[getCurrentLevel()].name} Level</ProgressTitle>
            <ProgressBar>
              <ProgressFill progress={progressPercentage()} />
            </ProgressBar>
            <ProgressLevels>
              {levels.map((level, index) => (
                <ProgressLevel key={index} active={index <= getCurrentLevel()}>
                  <ProgressLevelName active={index <= getCurrentLevel()}>
                    {level.name}
                  </ProgressLevelName>
                </ProgressLevel>
              ))}
            </ProgressLevels>
          </ProgressDisplay>
          
          <FeatureGrid>
            {features.map(feature => (
              <FeatureCard 
                key={feature.id} 
                isActive={discoveredFeatures.includes(feature.id)}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <FeatureHeader>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeaturePoints isActive={discoveredFeatures.includes(feature.id)}>
                    {discoveredFeatures.includes(feature.id) ? 
                      'Collected' : 
                      `+${feature.points} pts`}
                  </FeaturePoints>
                </FeatureHeader>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeatureGrid>
          
          <BadgesContainer>
            <BadgesTitle>Your Smart Home Achievements</BadgesTitle>
            <BadgesGrid>
              {badges.map((badge, index) => (
                <Badge key={index} unlocked={score >= badge.unlockThreshold}>
                  <BadgeIcon unlocked={score >= badge.unlockThreshold}>
                    {badge.icon}
                  </BadgeIcon>
                  <BadgeTitle unlocked={score >= badge.unlockThreshold}>
                    {badge.title}
                  </BadgeTitle>
                  {score >= badge.unlockThreshold ? (
                    <BadgeInfo>Achieved!</BadgeInfo>
                  ) : (
                    <BadgeInfo>{badge.unlockThreshold - score} points to unlock</BadgeInfo>
                  )}
                </Badge>
              ))}
            </BadgesGrid>
          </BadgesContainer>
        </GameWrapper>
      </Container>
    </Section>
  );
};

export default HomeAutomation; 