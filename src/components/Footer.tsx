import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const FooterContainer = styled.footer`
  background-color: var(--secondary);
  color: var(--white);
  padding: 80px 0 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  h3 {
    color: var(--white);
    margin-bottom: 25px;
    font-size: 1.2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: var(--primary);
    }
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
  span {
    color: var(--primary);
  }
`;

const AboutText = styled.p`
  margin-bottom: 25px;
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.9;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: var(--transition);
    
    &:hover {
      background-color: var(--primary);
      transform: translateY(-3px);
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 12px;
    
    a {
      color: var(--white);
      opacity: 0.8;
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      
      &:hover {
        opacity: 1;
        color: var(--primary);
        transform: translateX(5px);
      }
      
      svg {
        margin-right: 8px;
        font-size: 14px;
      }
    }
  }
`;

const ContactInfo = styled.div`
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
    
    svg {
      margin-top: 5px;
      color: var(--primary);
    }
    
    p {
      margin: 0;
      font-size: 0.95rem;
      opacity: 0.9;
    }
  }
`;

const Newsletter = styled.div`
  p {
    margin-bottom: 20px;
    font-size: 0.95rem;
    line-height: 1.7;
    opacity: 0.9;
  }
  
  form {
    display: flex;
    
    input {
      flex: 1;
      padding: 12px 15px;
      border: none;
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--white);
      border-radius: 4px 0 0 4px;
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
      
      &:focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
    
    button {
      border-radius: 0 4px 4px 0;
      border: none;
      background-color: var(--primary);
      color: var(--white);
      padding: 0 15px;
      cursor: pointer;
      transition: var(--transition);
      
      &:hover {
        background-color: #b78a63;
      }
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 50px 0 30px;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.7;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const ButtonStyled = styled(Button)`
  background-color: var(--primary);
  color: var(--white);
  font-weight: 500;
  padding: 10px 15px;
  font-size: 0.9rem;
  border-radius: 0 4px 4px 0;
  
  &:hover {
    background-color: #b78a63;
  }
`;

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <Column>
            <Logo>
              Home <span>Vision</span> Solutions
            </Logo>
            <AboutText>
              Vancouver's premier smart home integration team. We design, install, 
              and support custom automation systems for homes of all sizes. Experience 
              the future of home living with our cutting-edge smart technology.
            </AboutText>
            <SocialIcons>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </SocialIcons>
          </Column>
          
          <Column>
            <h3>Quick Links</h3>
            <LinksList>
              <li>
                <a href="#" onClick={() => scrollToSection('about')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection('packages')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Smart Home Packages
                </a>
              </li>
              <li>
                <a href="#contact">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Privacy Policy
                </a>
              </li>
            </LinksList>
          </Column>
          
          <Column>
            <h3>Contact Us</h3>
            <ContactInfo>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p>123 Marine Drive, West Vancouver, BC V7T 1A1</p>
              </div>
              
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p>(604) 123-4567</p>
              </div>
              
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p>info@homevision.com</p>
              </div>
            </ContactInfo>
          </Column>
          
          <Column>
            <h3>Newsletter</h3>
            <Newsletter>
              <p>Subscribe to get updates on smart home tips, exclusive offers, and new product announcements.</p>
              <form>
                <input type="email" placeholder="Your email address" />
                <ButtonStyled as="button" type="submit">
                  Send
                </ButtonStyled>
              </form>
            </Newsletter>
          </Column>
        </FooterGrid>
        
        <Divider />
        
        <Copyright>
          <div>© {new Date().getFullYear()} Home Vision Solutions. All rights reserved.</div>
          <div>Designed with ♥ in Vancouver</div>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 