import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';

import emptySquares from 'assets/shapes/emptySquares.png';
import { isMobile } from './rwd/detectMobile';

const texts = {
  theFida: 'the fida',
  marketplace: 'marketplace',
  description: 'Fida is a blockchain-based risk transfer marketplace connecting re/insurance risk to alternative capital secured by smart contracts.'
};

export const Description = () => (
  <StyledGenericWrapper marginBottom={isMobile ? 150 : 250}>
    <BackgroundWrapper>
      <div className={`flex ${isMobile ? 'flex-column align-items-center' : 'justify-content-center gap-3'}`}>
        <Text label={texts.theFida} size={isMobile ? 2 : 4} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
        <Text label={texts.marketplace} size={isMobile ? 2 : 4} fontWeight={700} toUpperCase />
      </div>
      <StyledTextWrapper>
        <Text textPlacing="center" label={texts.description} size={isMobile ? 1 : 2} fontWeight={700} />
      </StyledTextWrapper>
    </BackgroundWrapper>
  </StyledGenericWrapper>
);

const BackgroundWrapper = styled.div`
position: relative;
  &:after {
      content: "";
      position: absolute;
      overflow: visible;
      width: 300%;
      height: 400%;
      top: -150%;
      left: 0;
      z-index: -1;
      background: url(${emptySquares}) 0 0 no-repeat;
      transform: translate(-50%, -50%) rotate(-135deg) scale(.8) ;
      @media (max-width: 840px) {
        left: 50%;
        top: 40%;
      }
    }
`;
const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  max-width: 715px;
`;
