import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { colors } from 'theme';

import lines from 'assets/shapes/emptySquares.png';

import { Text } from './_common/Text';

const text = {
  titleOne: 'keeping your assets ',
  titleTwo: 'secure'
};

export const KeepingSecure = () => (
  <StyledGenericWrapper marginTop={300} marginBottom={220}>
    <BackgroundWrapper>
      <StyledTextWrapper>
        <Text size={5} label={text.titleOne} fontWeight={700} toUpperCase />
        <Text size={5} label={text.titleTwo} fontWeight={700} color={colors.textGradient} linearGradient toUpperCase />
      </StyledTextWrapper>
    </BackgroundWrapper>
  </StyledGenericWrapper>
);

const BackgroundWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  &:after {
      content: "";
      position: absolute;
      overflow: visible;
      width: 250%;
      height: 300%;
      top: -100%;
      left: -12%;
      z-index: -1;
      background: url(${lines}) 0 0 no-repeat;
      transform:  scale(.9);
      @media (max-width: 840px) {
        transform: scale(.7);
        top: -50%;
        left: -50%;
      }
    }
`;
const StyledTextWrapper = styled.div`
    max-width: 680px;
    text-align: center;
`;
