import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme';

interface StyledSectionProps {
  children: JSX.Element[] | JSX.Element
}

export const StickySection = ({ children }: StyledSectionProps) => (
  <StickyWrapper>
    <StickyContent>
      {children}
    </StickyContent>
  </StickyWrapper>
);

const StickyWrapper = styled.section<StyledSectionProps>`
    position: sticky;
    margin: 40px auto;
    position: -webkit-sticky;
    top: 0;
    max-width: 1240px;
    height: 100vh;
    width: 90%;
    background: ${colors.textGradient};
    padding: 3px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    justify-content: center;
    @media (max-width: 840px) {
      width: 100%;
    }
`;
const StickyContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.mainBlack};
    width: 100%;
    border-radius: 25px;
    min-height: 100%;
    padding: 30px 0;
    box-sizing: border-box;

    @media (max-width: 840px) {
      flex-direction: column;
      justify-content: center;
      padding: 0;
    }
`;
