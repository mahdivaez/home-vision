import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const Section = styled.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.1);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.15);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const Content = styled.div`
  flex: 1;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: rgba(203, 157, 118, 0.9);
    border-radius: 2px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.9);

  &::before {
    content: '✓';
    color: rgba(203, 157, 118, 0.9);
    font-weight: bold;
    margin-right: 15px;
    background: rgba(203, 157, 118, 0.15);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const MainImage = styled.img`
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  animation: ${float} 6s ease-in-out infinite;
  z-index: 2;
`;

const TemperatureControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 30, 32, 0.8);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  max-width: 300px;
`;

const TemperatureButton = styled.button<{ isUp?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.isUp ? 'rgba(203, 157, 118, 0.9)' : '#ff7070'};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Temperature = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin: 0 30px;
  min-width: 90px;
  text-align: center;
`;

const Tag = styled.span`
  display: inline-block;
  background: rgba(203, 157, 118, 0.15);
  color: rgba(203, 157, 118, 0.9);
  padding: 6px 12px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const SmartThermostat = () => {
  const [temperature, setTemperature] = useState(72);

  const increaseTemp = () => {
    if (temperature < 90) {
      setTemperature(temperature + 1);
    }
  };

  const decreaseTemp = () => {
    if (temperature > 60) {
      setTemperature(temperature - 1);
    }
  };

  return (
    <Section id="smart-thermostat">
      <Container>
        <FlexContainer>
          <Content>
            <Tag>Energy Efficient</Tag>
            <Title>Smart Thermostat</Title>
            <Description>
              Take complete control of your home climate with our intelligent Smart Thermostat system. 
              Designed to learn your preferences and optimize energy usage while maintaining your ideal 
              comfort level at all times.
            </Description>
            
            <TemperatureControl>
              <TemperatureButton onClick={decreaseTemp}> - </TemperatureButton>
              <Temperature>{temperature}°F</Temperature>
              <TemperatureButton isUp onClick={increaseTemp}> + </TemperatureButton>
            </TemperatureControl>

            <FeatureList>
              <FeatureItem>Smart scheduling learns your routine and adjusts automatically</FeatureItem>
              <FeatureItem>Reduces energy costs by up to 23% annually</FeatureItem>
              <FeatureItem>Zoned temperature control for personalized comfort</FeatureItem>
              <FeatureItem>Remote access from anywhere via smartphone app</FeatureItem>
              <FeatureItem>Compatible with all major voice assistants</FeatureItem>
            </FeatureList>

            <Button>Get Smart Climate Control</Button>
          </Content>
          <ImageContainer>
            <MainImage src="/smart-thermostat.jpg" alt="Smart Thermostat System" />
          </ImageContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default SmartThermostat; 