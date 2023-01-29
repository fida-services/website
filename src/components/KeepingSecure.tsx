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
  <StyledGenericWrapper marginBottom={30}>
    <BackgroundWrapper>
      <StyledTextWrapper>
        <Text size={80} label={text.titleOne} fontWeight={700} toUpperCase />
        <Text size={80} label={text.titleTwo} fontWeight={700} color={colors.textGradient} linearGradient toUpperCase />
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
      width: 100%;
      height: 400%;
      top: -200%;
      left: 0;
      z-index: -1;
      background: url(${lines}) 0 0 no-repeat;
      transform: rotate(-135deg) scale(.7);
    }
`;
const StyledTextWrapper = styled.div`
    max-width: 680px;
    text-align: center;
`;
