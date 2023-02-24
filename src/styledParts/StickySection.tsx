import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { colors } from 'theme';
import { maxWidth840 } from 'components/rwd/detectMobile';

interface StyledSectionProps {
  children: JSX.Element[] | JSX.Element
}

export const StickySection = ({ children }: StyledSectionProps) => {
  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <StickyWrapper>
      <StickyContent mobilePadding={isMobile}>
        {children}
      </StickyContent>
    </StickyWrapper>
  );
};

const StickyWrapper = styled.section`
    margin: 40px auto;
    max-width: 1240px;
    width: 90%;
    background: ${colors.textGradient};
    padding: 2px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    justify-content: center;
    @media (max-width: 840px) {
      width: 100%;
    }
`;
const StickyContent = styled.div<{ mobilePadding: boolean }>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.mainBlack};
    width: 100%;
    border-radius: 25px;
    min-height: 100%;
    padding: 30px 0;
    box-sizing: border-box;
    padding: 30px 20px 25px;

    @media (max-width: 840px) {
      flex-direction: column;
      justify-content: center;
      padding: 20px 15px 15px;
    }
`;
