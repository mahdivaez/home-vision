import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const ShowcaseContainer = styled.section`
  padding: 100px 0;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(255,255,255,0.8), transparent 60%);
    z-index: 1;
  }
`;

const ShowcaseContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const ShowcaseHeading = styled.h2<{ inView: boolean }>`
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.6s ease-out;
  font-weight: 700;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.inView ? '100%' : '0'};
    height: 3px;
    background: var(--primary);
    transition: width 0.8s ease-out 0.3s;
  }
`;

const ShowcaseSubheading = styled.p<{ inView: boolean }>`
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 50px;
  max-width: 700px;
  line-height: 1.6;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '30px'});
  transition: all 0.6s ease-out 0.2s;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ShowcaseItem = styled.div<{ inView: boolean; delay: number }>`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '40px'});
  transition-delay: ${props => props.delay}ms;
  border: 1px solid rgba(0, 0, 0, 0.03);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ShowcaseImage = styled.div`
  height: 240px;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0,0,0,0.15), transparent);
  }
`;

const ShowcaseInfo = styled.div`
  padding: 25px;
`;

const ShowcaseTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 15px;
  font-weight: 600;
`;

const ShowcaseDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ShowcaseButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

const Showcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const grid = gridRef.current;

    if (container && content && heading && subheading && grid) {
      const containerRect = container.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const headingRect = heading.getBoundingClientRect();
      const subheadingRect = subheading.getBoundingClientRect();
      const gridRect = grid.getBoundingClientRect();

      const containerHeight = containerRect.height;
      const contentHeight = contentRect.height;
      const headingHeight = headingRect.height;
      const subheadingHeight = subheadingRect.height;
      const gridHeight = gridRect.height;

      const containerScrollTop = containerRect.top;
      const contentScrollTop = contentRect.top;
      const headingScrollTop = headingRect.top;
      const subheadingScrollTop = subheadingRect.top;
      const gridScrollTop = gridRect.top;

      const containerScrollBottom = containerScrollTop + containerHeight;
      const contentScrollBottom = contentScrollTop + contentHeight;
      const headingScrollBottom = headingScrollTop + headingHeight;
      const subheadingScrollBottom = subheadingScrollTop + subheadingHeight;
      const gridScrollBottom = gridScrollTop + gridHeight;

      const containerScrollRange = containerScrollBottom - containerScrollTop;
      const contentScrollRange = contentScrollBottom - contentScrollTop;
      const headingScrollRange = headingScrollBottom - headingScrollTop;
      const subheadingScrollRange = subheadingScrollBottom - subheadingScrollTop;
      const gridScrollRange = gridScrollBottom - gridScrollTop;

      const containerScrollProgress = (containerScrollTop - containerScrollRange) / containerScrollRange;
      const contentScrollProgress = (contentScrollTop - contentScrollRange) / contentScrollRange;
      const headingScrollProgress = (headingScrollTop - headingScrollRange) / headingScrollRange;
      const subheadingScrollProgress = (subheadingScrollTop - subheadingScrollRange) / subheadingScrollRange;
      const gridScrollProgress = (gridScrollTop - gridScrollRange) / gridScrollRange;

      const containerScrollProgressClamped = Math.max(0, Math.min(1, containerScrollProgress));
      const contentScrollProgressClamped = Math.max(0, Math.min(1, contentScrollProgress));
      const headingScrollProgressClamped = Math.max(0, Math.min(1, headingScrollProgress));
      const subheadingScrollProgressClamped = Math.max(0, Math.min(1, subheadingScrollProgress));
      const gridScrollProgressClamped = Math.max(0, Math.min(1, gridScrollProgress));

      if (heading) {
        heading.style.opacity = headingScrollProgressClamped.toString();
        heading.style.transform = `translateY(${headingScrollProgressClamped * 30}px)`;
      }

      if (subheading) {
        subheading.style.opacity = subheadingScrollProgressClamped.toString();
        subheading.style.transform = `translateY(${subheadingScrollProgressClamped * 30}px)`;
      }

      if (grid) {
        grid.style.opacity = gridScrollProgressClamped.toString();
        grid.style.transform = `translateY(${gridScrollProgressClamped * 40}px)`;
      }
    }
  }, []);

  return (
    <ShowcaseContainer ref={containerRef}>
      <ShowcaseContent ref={contentRef}>
        <ShowcaseHeading inView={true} ref={headingRef}>
          Showcase Heading
        </ShowcaseHeading>
        <ShowcaseSubheading inView={true} ref={subheadingRef}>
          Showcase subheading text goes here.
        </ShowcaseSubheading>
        <ShowcaseGrid ref={gridRef}>
          {/* Add your showcase items here */}
        </ShowcaseGrid>
      </ShowcaseContent>
    </ShowcaseContainer>
  );
};

export default Showcase; 