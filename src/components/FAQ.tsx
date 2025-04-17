import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Animation keyframes
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

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const faqs = [
  {
    question: 'Is this DIY?',
    answer: 'No, we provide a full-service solution. Our certified technicians handle everything from design and installation to programming and training. You don\'t need any technical expertise—we take care of it all.',
    icon: '🛠️'
  },
  {
    question: 'Can this be done during renovation?',
    answer: 'Yes, and it\'s actually ideal! We work directly with your contractors to integrate smart home technology during construction or renovation. This allows for cleaner installation and more options for wired components.',
    icon: '🏗️'
  },
  {
    question: 'Do I need a new home?',
    answer: 'No, we work with homes of all ages. Our solutions can be retrofitted into existing homes without major construction. We offer both wireless solutions and minimally invasive wired options.',
    icon: '🏠'
  },
  {
    question: 'How long does it take?',
    answer: 'Typically 14 days from start to finish, depending on the complexity and size of your project. The consultation process takes 1-2 days, planning takes 3-5 days, and installation takes 5-7 days.',
    icon: '⏱️'
  },
  {
    question: 'What\'s included?',
    answer: 'Our packages include smart lighting control, audio systems, climate control, security features (smart locks, video doorbells), and a centralized control system. Each system is custom designed based on your specific needs and home layout.',
    icon: '📦'
  },
  {
    question: 'Is financing available?',
    answer: 'Yes, we offer flexible financing options. During your consultation, we can discuss payment plans that fit your budget, including 0% interest options for qualified customers.',
    icon: '💳'
  },
];

const FAQSection = styled.section`
  padding: 120px 0;
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
  z-index: 0;
  opacity: 0.05;
  background-image: radial-gradient(circle at 25% 25%, rgba(203, 157, 118, 0.5) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(203, 157, 118, 0.5) 0%, transparent 50%);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div<{ inView: boolean }>`
  text-align: center;
  margin-bottom: 80px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 20px auto 0;
  line-height: 1.6;
`;

const FAQList = styled.div<{ inView: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.8s ease-out 0.2s;
`;

const FAQItem = styled.div<{ delay: number, inView: boolean }>`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(203, 157, 118, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '20px'});
  transition-delay: ${props => props.delay * 0.1}s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(203, 157, 118, 0.2);
  }
`;

const Question = styled.div<{ isOpen: boolean }>`
  padding: 25px 30px;
  background-color: ${props => props.isOpen ? 'rgba(203, 157, 118, 0.1)' : 'transparent'};
  color: ${props => props.isOpen ? '#fff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.isOpen ? 'rgba(203, 157, 118, 0.1)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;

const QuestionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconCircle = styled.div<{ isOpen: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.isOpen 
    ? 'linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9))' 
    : 'rgba(203, 157, 118, 0.15)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  animation: ${props => props.isOpen ? pulse : 'none'} 3s infinite ease-in-out;
`;

const QuestionText = styled.span`
  font-size: 1.1rem;
`;

const ToggleIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: rgba(203, 157, 118, 0.9);
    transition: all 0.3s ease;
  }
  
  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateY(-50%);
  }
  
  &::after {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translateX(-50%);
    opacity: ${props => props.isOpen ? 0 : 1};
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const AnswerContent = styled.div`
  padding: 0 30px 25px 85px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-size: 1rem;
`;

const ShimmerLine = styled.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.3), transparent);
  background-size: 200px 100%;
  animation: ${shimmer} 2s infinite linear;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      <BackgroundPattern />
      <Container>
        <SectionHeader ref={headerRef} inView={headerInView}>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionDescription>
            Get answers to the most common questions about our premium smart home solutions
          </SectionDescription>
        </SectionHeader>
        
        <FAQList ref={contentRef} inView={contentInView}>
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              delay={index + 1}
              inView={contentInView}
            >
              <Question 
                isOpen={openIndex === index}
                onClick={() => toggleQuestion(index)}
              >
                <QuestionContent>
                  <IconCircle isOpen={openIndex === index}>
                    {faq.icon}
                  </IconCircle>
                  <QuestionText>{faq.question}</QuestionText>
                </QuestionContent>
                <ToggleIcon isOpen={openIndex === index} />
              </Question>
              
              <ShimmerLine />
              
              <Answer isOpen={openIndex === index}>
                <AnswerContent>
                  {faq.answer}
                </AnswerContent>
              </Answer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQSection>
  );
};

export default FAQ; 