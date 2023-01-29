import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';

import emptySquares from 'assets/shapes/emptySquares.png';

const texts = {
  theFida: 'the fida',
  marketplace: 'marketplace',
  description: 'Fida is a blockchain-based risk transfer marketplace connecting re/insurance risk to alternative capital secured by smart contracts.'
};

export const Description = () => (
  <StyledGenericWrapper marginBottom={230}>
    <BackgroundWrapper>
      <div className="flex justify-content-center gap-3">
        <Text label={texts.theFida} size={60} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
        <Text label={texts.marketplace} size={60} fontWeight={700} toUpperCase />
      </div>
      <StyledTextWrapper>
        <Text textPlacing="center" label={texts.description} size={32} fontWeight={700} />
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
      width: 100%;
      height: 250%;
      top: -100%;
      left: -10%;
      z-index: -1;
      background: url(${emptySquares}) 0 0 no-repeat;
      transform: rotate(-135deg) scale(.8);
    }
`;
const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  max-width: 715px;
`;
