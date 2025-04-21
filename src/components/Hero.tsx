import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, createGlobalStyle, css } from 'styled-components';
import Button from './Button';
import { useInView } from 'react-intersection-observer';

// Animations (unchanged for brevity, but can be optimized if needed)
const textReveal = keyframes`
  0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
  100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const buttonGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(203, 157, 118, 0.5), 0 0 10px rgba(203, 157, 118, 0); }
  50% { box-shadow: 0 0 10px rgba(203, 157, 118, 0.7), 0 0 20px rgba(203, 157, 118, 0.3); }
  100% { box-shadow: 0 0 5px rgba(203, 157, 118, 0.5), 0 0 10px rgba(203, 157, 118, 0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const slideInRight = keyframes`
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Global styles
const GlobalStyle = createGlobalStyle`
  .hero-video {
    will-change: transform;
    transition: all 1.5s ease-in-out;
  }
  
  .hero-video.in-view {
    transform: scale(1.05);
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const HeroContainer = styled.section`
  position: relative;
  color: #fff;
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #0a0a0a;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    min-height: auto;
  }
`;

const VideoSection = styled.div`
  flex: 0.6;
  position: relative;
  overflow: hidden;
  height: 100vh;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  @media (max-width: 1024px) {
    flex: 1;
    height: 60vh;
  }
  
  @media (max-width: 768px) {
    height: 50vh;
  }
  
  @media (max-width: 480px) {
    height: 40vh;
  }
`;

const VideoBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #0a0a0a;
  transform: translateZ(-50px) scale(1.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 0.4));
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.4) 100%);
    z-index: 2;
    opacity: 0.5;
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 1;
  }
`;

const ParticlesOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
  
  @media (max-width: 768px) {
    display: none; // Disable particles on mobile for performance
  }
`;

const Particle = styled.div<{ size: number, posX: number, posY: number, speed: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(203, 157, 118, 0.2);
  border-radius: 50%;
  top: ${props => props.posY}%;
  left: ${props => props.posX}%;
  animation: ${float} ${props => props.speed}s ease-in-out infinite;
  opacity: 0.2;
`;

const ContentSection = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  position: relative;
  z-index: 10;
  background-color: #0a0a0a;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 50%, rgba(203, 157, 118, 0.05) 0%, rgba(0, 0, 0, 0) 50%);
    z-index: -1;
    animation: ${shimmer} 10s linear infinite;
  }
  
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    flex: 1;
    padding: 20px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

const ContentInner = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: relative;
  padding-top: 120px;
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
  
  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 500;
  color: #fff;
  z-index: 20;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(203, 157, 118, 0.1);
      z-index: -1;
    }
  }
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    fill: rgba(203, 157, 118, 0.9);
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    top: 15px;
    left: 15px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const MainHeading = styled.h1<{ inView: boolean }>`
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.2s;
  position: relative;
  letter-spacing: -0.5px;
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  .reveal-text {
    display: inline-block;
    position: relative;
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    animation: ${textReveal} 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    animation-delay: 0.5s;
    margin-right: 6px;
  }
  
  .reveal-text:nth-child(2) { animation-delay: 0.7s; }
  .reveal-text:nth-child(3) { animation-delay: 0.9s; }
  
  span {
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;
    background-size: 200% auto;
    animation: ${gradientMove} 4s ease infinite;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(203, 157, 118, 0.1);
      z-index: -1;
      border-radius: 8px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.9), transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 3.5vw, 1.8rem);
    margin-bottom: 15px;
  }
`;

const WordHighlight = styled.span`
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: rgba(203, 157, 118, 0.2);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease-out;
    border-radius: 4px;
  }
  
  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }
`;

const Subtitle = styled.p<{ inView: boolean }>`
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.4s;
  position: relative;
  max-width: 95%;
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  strong {
    color: rgba(203, 157, 118, 0.9);
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      color: #fff;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 0;
    width: 25px;
    height: 2px;
    background-color: rgba(203, 157, 118, 0.4);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(0.85rem, 2vw, 1rem);
    margin-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div<{ inView: boolean }>`
  display: flex;
  gap: 12px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.6s;
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

const PrimaryButton = styled(Button)`
  padding: 12px 24px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  animation: ${buttonGlow} 2s infinite;
  min-height: 48px; // Ensure touch target size
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: all 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 14px;
  }
`;

const SecondaryButton = styled(Button)`
  padding: 12px 24px;
  background-color: transparent;
  color: #fff;
  border-radius: 10px;
  border: 1px solid rgba(203, 157, 118, 0.3);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  min-height: 48px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.1), rgba(178, 132, 93, 0.2));
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    border-color: rgba(203, 157, 118, 0.6);
    transform: translateY(-3px);
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 14px;
  }
`;

const FeaturesBar = styled.div<{ inView: boolean }>`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.8s;
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  @media (max-width: 1024px) {
    right: 20px;
    gap: 15px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 20px;
    height: 20px;
    color: rgba(203, 157, 118, 0.9);
  }
  
  span {
    font-size: clamp(0.75rem, 2vw, 0.85rem);
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ScrollCTA = styled.div<{ inView: boolean }>`
  position: absolute;
  bottom: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 1s;
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  span {
    font-size: 0.75rem;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.6);
    transform: rotate(-90deg);
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  
  .scroll-indicator {
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, rgba(203, 157, 118, 0.9), transparent);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 12px;
      background-color: rgba(203, 157, 118, 0.9);
      animation: ${slideInRight} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BrandLogoSection = styled.div<{ inView: boolean }>`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 40px;
  padding: 10px 0;
  z-index: 10;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
  transition-delay: 1.2s;
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin-top: 10px;
    padding: 5px 0;
  }
`;

const BrandLogoContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
  @media (min-width: 769px) {
    &::before, &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 50px;
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
  }
  
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const LogoRow = styled.div`
  display: flex;
  gap: 20px;
  animation: ${css`${scroll} 30s linear infinite`};
  padding: 5px 0;
  
  @media (max-width: 768px) {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const BrandLogo = styled.div`
  height: 25px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  img {
    height: 100%;
    max-width: 70px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
  
  @media (max-width: 768px) {
    height: 20px;
    flex: 0 0 calc(33.33% - 10px);
    max-width: 60px;
  }
  
  @media (max-width: 480px) {
    flex: 0 0 calc(50% - 10px);
    max-width: 50px;
  }
`;

const BrandLabel = styled.div`
  font-size: clamp(0.6rem, 1.5vw, 0.7rem);
  text-transform: uppercase;
  color: rgba(203, 157, 118, 0.7);
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-weight: 500;
`;

const LeadFormContainer = styled.div<{ inView: boolean }>`
  background: rgba(25, 25, 25, 0.8);
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  border: 1px solid rgba(203, 157, 118, 0.2);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  margin-top: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.6s;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.3), rgba(203, 157, 118, 0.9), rgba(203, 157, 118, 0.3));
    z-index: 1;
  }
  
  ${props => props.inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
  
  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 12px;
  }
`;

const FormTitle = styled.h3`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin-bottom: 12px;
  color: #fff;
  position: relative;
  
  span {
    color: rgba(203, 157, 118, 0.9);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 35px;
    height: 2px;
    background: rgba(203, 157, 118, 0.6);
  }
`;

const InputRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-bottom: 12px;
  
  @media (max-width: 520px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const InputGroup = styled.div`
  flex: 1;
  position: relative;
`;

const FormLabel = styled.label`
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  color: rgba(255, 255, 255, 0.7);
  display: block;
  margin-bottom: 4px;
  transition: color 0.3s ease;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid rgba(203, 157, 118, 0.2);
  background: rgba(20, 20, 20, 0.6);
  color: #fff;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  transition: all 0.3s ease;
  min-height: 48px;
  
  &:focus {
    outline: none;
    border-color: rgba(203, 157, 118, 0.8);
    box-shadow: 0 0 0 2px rgba(203, 157, 118, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  
  &:hover {
    border-color: rgba(203, 157, 118, 0.4);
  }
  
  &.invalid {
    border-color: #ff6b6b;
    animation: ${shake} 0.5s cubic-bezier(.36,.07,.19,.97) both;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 18px;
  border-radius: 6px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  font-weight: 600;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${buttonGlow} 2s infinite;
  margin-top: 5px;
  min-height: 48px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: all 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`;

const LimitedOffer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(203, 157, 118, 0.1);
  border: 1px dashed rgba(203, 157, 118, 0.3);
  border-radius: 6px;
  padding: 8px 12px;
  margin: 12px 0;
`;

const OfferText = styled.span`
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  color: rgba(255, 255, 255, 0.8);
  
  strong {
    color: rgba(203, 157, 118, 0.9);
    font-weight: 600;
  }
`;

const Timer = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 600;
  background: rgba(203, 157, 118, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  color: #fff;
`;

const SocialProof = styled.div`
  display: flex;
  align-items: center;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  color: rgba(255, 255, 255, 0.6);
  margin-top: 12px;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    color: rgba(203, 157, 118, 0.8);
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: rgba(255, 255, 255, 0.8);
  animation: ${slideIn} 0.5s ease;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  
  svg {
    width: 14px;
    height: 14px;
    margin-right: 8px;
    color: rgba(203, 157, 118, 0.9);
    flex-shrink: 0;
  }
`;

const brandLogos = [
  { src: '/control4.png', alt: 'Control4' },
  { src: '/lutron.png', alt: 'Lutron' },
  { src: '/sonos.png', alt: 'Sonos' },
  { src: '/sony.png', alt: 'Sony' },
  { src: '/jvc.png', alt: 'JVC' },
  { src: '/leon.png', alt: 'Leon' },
  { src: '/senhizer.png', alt: 'Sennheiser' },
  { src: '/seura.png', alt: 'Seura' },
  { src: '/urc.png', alt: 'URC' },
  { src: '/araknis.png', alt: 'Araknis' },
];

const generateParticles = (count: number) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      size: Math.random() * 3 + 1,
      posX: Math.random() * 100,
      posY: Math.random() * 100,
      speed: Math.random() * 10 + 10
    });
  }
  return particles;
};

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [particles] = useState(() => generateParticles(20)); // Reduced count for performance
  const [videoError, setVideoError] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [validationErrors, setValidationErrors] = useState<{name?: boolean, phone?: boolean}>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [scrollRef, scrollInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [brandLogoRef, brandLogoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [videoInView, setVideoInView] = useState(false);
  
  const titleWords = ["Transform", "Your", "Home"];
  
  useEffect(() => {
    setTimeout(() => {
      setVideoInView(true);
    }, 500);
    
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error('Video playback error:', err);
        setVideoError(true);
      });
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors(prev => ({ ...prev, [name]: false }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: {name?: boolean, phone?: boolean} = {};
    if (!formData.name.trim()) {
      errors.name = true;
    }
    if (!formData.phone.trim() || !/^[0-9]{10,}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = true;
    }
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    // Send data to GHL webhook
    fetch('https://services.leadconnectorhq.com/hooks/XIy9sfqFwX2Pzvq9l7VY/webhook-trigger/e01a048d-7694-408e-9078-e7d5d43188ca', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formName: 'Hero Form',
        name: formData.name,
        phone: formData.phone,
        source: 'Website Hero Section',
        dateSubmitted: new Date().toISOString()
      })
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully to GHL');
        setFormSubmitted(true);
        setFormData({ name: '', phone: '' });
      } else {
        console.error('Form submission failed');
        alert('There was an error submitting your request. Please try again or call us directly.');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    });
  };
  
  return (
    <HeroContainer id="hero">
      <GlobalStyle />
      
      <Logo>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 4.2L20.1 19h-16L12 6.2z" />
        </svg>
        HOME<span>VISION</span>
      </Logo>
      
      <ContentSection>
        <ContentInner ref={contentRef}>
          <MainHeading inView={contentInView}>
            <span className="reveal-text">Transform Your Home</span>
            <span className="reveal-text">with</span>
            <span className="reveal-text"><span>Smart Technology</span></span>
          </MainHeading>
          
          <Subtitle inView={contentInView}>
            Elevate your lifestyle with <strong>seamless, integrated</strong> home automation 
            systems designed for <WordHighlight>comfort</WordHighlight>, <WordHighlight>security</WordHighlight>, 
            and <WordHighlight>efficiency</WordHighlight>.
          </Subtitle>
          
          <LeadFormContainer ref={formRef} inView={formInView}>
            <FormTitle>Get Your <span>Free Consultation</span></FormTitle>
            
            <LimitedOffer>
              <OfferText>
                <strong>Limited Time:</strong> 20% off installation
              </OfferText>
              <Timer>{formatTime(timeLeft)}</Timer>
            </LimitedOffer>
            
            {formSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '25px 15px',
                background: 'rgba(203, 157, 118, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(203, 157, 118, 0.3)',
                marginTop: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(203, 157, 118, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: '1.8rem',
                  color: 'rgba(203, 157, 118, 0.9)'
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: 'rgba(203, 157, 118, 0.9)',
                  margin: '0 0 15px 0'
                }}>
                  Thank You!
                </h3>
                <p style={{
                  margin: '0 0 20px 0',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  We've received your request for a free consultation. One of our smart home specialists will call you within 24 hours to discuss your home automation needs.
                </p>
                <Button 
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    backgroundColor: 'rgba(203, 157, 118, 0.9)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <InputRow>
                  <InputGroup>
                    <FormLabel>Your Name</FormLabel>
                    <FormInput 
                      type="text" 
                      placeholder="Enter your name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={validationErrors.name ? 'invalid' : ''}
                    />
                  </InputGroup>
                  
                  <InputGroup>
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput 
                      type="tel" 
                      placeholder="Enter your phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={validationErrors.phone ? 'invalid' : ''}
                    />
                  </InputGroup>
                </InputRow>
                
                <BenefitsList>
                  <BenefitItem>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Free in-home assessment ($150 value)
                  </BenefitItem>
                  <BenefitItem>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Personalized smart home plan
                  </BenefitItem>
                  <BenefitItem>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    No obligation quote
                  </BenefitItem>
                </BenefitsList>
                
                <SubmitButton type="submit">Make an Appointment</SubmitButton>
              </form>
            )}
            
            <SocialProof>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>Join 500+ homeowners who upgraded this year</span>
            </SocialProof>
          </LeadFormContainer>
        </ContentInner>
        
        <BrandLogoSection ref={brandLogoRef} inView={brandLogoInView}>
          <BrandLabel>Trusted Technology Partners</BrandLabel>
          <BrandLogoContainer>
            <LogoRow>
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <BrandLogo key={`${logo.alt}-${index}`}>
                  <img src={logo.src} alt={logo.alt} />
                </BrandLogo>
              ))}
            </LogoRow>
          </BrandLogoContainer>
        </BrandLogoSection>
      </ContentSection>
      
      <VideoSection>
        <VideoBackground>
          {videoError ? (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a' }}>
              <p style={{ color: '#fff', fontSize: '1rem' }}>Video unavailable</p>
            </div>
          ) : (
            <video 
              ref={videoRef}
              autoPlay 
              muted 
              loop 
              playsInline
              className={`hero-video ${videoInView ? 'in-view' : ''}`}
              onError={() => setVideoError(true)}
            >
              <source src="/video5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </VideoBackground>
        
        <ParticlesOverlay>
          {particles.map((particle, index) => (
            <Particle 
              key={index}
              size={particle.size}
              posX={particle.posX}
              posY={particle.posY}
              speed={particle.speed}
            />
          ))}
        </ParticlesOverlay>
        
        <FeaturesBar ref={featuresRef} inView={featuresInView}>
          <FeatureItem>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span>Energy Efficient</span>
          </FeatureItem>
          
          <FeatureItem>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Enhanced Security</span>
          </FeatureItem>
          
          <FeatureItem>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span>24/7 Support</span>
          </FeatureItem>
        </FeaturesBar>
        
        <ScrollCTA ref={scrollRef} inView={scrollInView}>
          <span>Scroll</span>
          <div className="scroll-indicator"></div>
        </ScrollCTA>
      </VideoSection>
    </HeroContainer>
  );
};

export default Hero;