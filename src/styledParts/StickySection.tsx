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
    margin: 40px;
    position: -webkit-sticky;
    top: 0;
    height: 90vh;
    width: 100vw;
    background: ${colors.textGradient};
    padding: 3px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    justify-content: center;
`;
const StickyContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.mainBlack};
    min-width: 100%;
    border-radius: 25px;
    min-height: 100%;
`;
