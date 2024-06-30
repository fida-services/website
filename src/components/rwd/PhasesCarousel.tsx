/* eslint-disable react/no-array-index-key */
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { roadMapTexts } from 'data/texts';
import { MobilePhaseItem } from './MobilePhaseItem';

const variants = (direction: number) => ({
  enter: {
    x: direction > 0 ? 100 : -100,
    opacity: 0
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
});

export const PhasesCarousel = ({ height, width } : { height: number, width: number }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    if (page + newDirection >= 0 && page + newDirection < roadMapTexts?.phases?.length) {
      setPage([page + newDirection, newDirection]);
    }
  };

  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <MainContainer ref={targetRef}>
      <AnimatePresence initial={false} custom={direction}>
        {roadMapTexts?.phases?.map((item, index) => (
          page === index && (
            <MotionBox
              key={index}
              variants={variants(1)}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <MobilePhaseItem
                dots={item}
                height={height}
                isActive={page === index}
                width={width}
                index={index + 1}
                onClickLeft={() => paginate(-1)}
                onClickRight={() => paginate(1)}
                {...item}
              />
            </MotionBox>
          )))}
      </AnimatePresence>
    </MainContainer>
  );
};

const MotionBox = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const MainContainer = styled.div`
  align-self: end;
  position: relative;
`;
