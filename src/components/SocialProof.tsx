import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Placeholder image for the testimonial
const testimonialImageUrl = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

const ProofSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-gray);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, rgba(65, 70, 80, 0.03) 0%, rgba(203, 157, 118, 0.03) 100%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    color: var(--secondary);
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
    color: var(--secondary);
  }
`;

const TestimonialCard = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 40px;
  box-shadow: var(--box-shadow);
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  
  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 6rem;
    font-family: Georgia, serif;
    color: rgba(203, 157, 118, 0.1);
    line-height: 1;
  }
`;

const TestimonialContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ClientImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`;

const TestimonialText = styled.div`
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 15px;
    font-style: italic;
    color: var(--secondary);
  }
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  
  .location {
    font-size: 0.9rem;
    color: var(--primary);
    font-weight: 600;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 60px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
`;

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 5px;
  }
  
  p {
    font-size: 1rem;
    font-weight: 500;
    color: var(--secondary);
    margin: 0;
  }
`;

const SocialProof = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ProofSection ref={ref}>
      <Container>
        <SectionHeader className={inView ? 'fade-in' : ''}>
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it. Here's what homeowners in Vancouver 
            are saying about their smart home experience with us.
          </p>
        </SectionHeader>
        
        <TestimonialCard className={inView ? 'slide-up' : ''}>
          <TestimonialContent>
            <ClientImage>
              <img src={testimonialImageUrl} alt="Client" />
            </ClientImage>
            
            <TestimonialText>
              <p>
                "I didn't even know this was possible. It's like my home anticipates me. 
                The lights adjust as I walk through rooms, music follows me, and everything 
                is controlled from one simple app. Home Vision's team was professional, 
                clean, and completed everything on schedule. Worth every penny."
              </p>
              <h4>James Richardson</h4>
              <div className="location">Homeowner in West Vancouver</div>
            </TestimonialText>
          </TestimonialContent>
        </TestimonialCard>
        
        <Stats>
          <StatItem className={inView ? 'fade-in delay-1' : ''}>
            <h3>20+</h3>
            <p>Homes Transformed in Vancouver</p>
          </StatItem>
          
          <StatItem className={inView ? 'fade-in delay-2' : ''}>
            <h3>4.9⭐️</h3>
            <p>Google Review Rating</p>
          </StatItem>
          
          <StatItem className={inView ? 'fade-in delay-3' : ''}>
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </StatItem>
        </Stats>
      </Container>
    </ProofSection>
  );
};

export default SocialProof; 