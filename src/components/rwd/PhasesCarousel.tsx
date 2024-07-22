/* eslint-disable react/no-array-index-key */
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { roadMapTexts } from 'data/texts';
import { MobilePhaseItem } from './MobilePhaseItem';

export const PhasesCarousel = ({ height, width } : { height: number, width: number }) => {
  const [[page], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    if (page + newDirection >= 0 && page + newDirection < roadMapTexts?.phases?.length) {
      setPage([page + newDirection, newDirection]);
    }
  };

  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <MainContainer ref={targetRef}>
      {roadMapTexts?.phases?.map((item, index) => (
        page === index && (
          <MobilePhaseItem
            dots={item}
            height={height}
            width={width}
            index={index + 1}
            onClickLeft={() => paginate(-1)}
            onClickRight={() => paginate(1)}
            key={index}
            {...item}
          />
        )))}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  align-self: end;
  position: relative;
`;
