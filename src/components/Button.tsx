import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  outline?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 4px;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: 2px solid transparent;
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.primary && css`
    background-color: var(--primary);
    color: var(--white);
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(203, 157, 118, 0.3);
    
    &:hover {
      background-color: #b78a63;
      border-color: #b78a63;
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(203, 157, 118, 0.4);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 5px 15px rgba(203, 157, 118, 0.3);
    }
  `}
  
  ${props => props.outline && css`
    background-color: transparent;
    color: var(--primary);
    border-color: var(--primary);
    
    &:hover {
      background-color: var(--primary);
      color: var(--white);
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(203, 157, 118, 0.3);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
    z-index: -1;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({
  primary = true,
  outline = false,
  children,
  onClick,
  type = 'button',
  className,
  fullWidth = false,
  style,
}) => {
  return (
    <StyledButton
      primary={primary}
      outline={outline}
      onClick={onClick}
      type={type}
      className={className}
      fullWidth={fullWidth}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 