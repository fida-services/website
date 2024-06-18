import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

import { SliderCard } from './SliderCard';
import { sliderData } from './sliderData';

export const Slider = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-67%']);

  return (
    <MainContainer ref={targetRef}>
      <Wrapper>
        <motion.div style={{ x, display: 'flex', gap: '16px' }}>
          {sliderData.map((item, index) => (
            <SliderCard currentIndex={index + 1} {...item} />
          ))}
        </motion.div>
      </Wrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 300vh;
  position: relative;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: sticky;
  top: 0;
`;
