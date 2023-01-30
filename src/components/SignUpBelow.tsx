import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { Text } from 'components/_common/Text';

import emptySquares from 'assets/shapes/emptySquares.png';

import { MenuButton } from './MenuButton';

const text = {
  signUp: 'Sign up below to be invited to the Fida network when we go live.'
};

export const SignUpBelow = () => (
  <StyledGenericWrapper marginBottom={170}>
    <BackgroundWrapper>
      <TextWrapper>
        <Text size={32} label={text.signUp} fontWeight={700} />
      </TextWrapper>
      <MenuButton label="join our community" link="https://share.hsforms.com/1BenVBo4ESxyMjAsvqk0GRQe8c3w" border />
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
      left: -5%;
      z-index: -1;
      background: url(${emptySquares}) 0 0 no-repeat;
      transform: rotate(-135deg) scale(.7);
    }
`;
const TextWrapper = styled.div`
    max-width: 640px;
    margin-bottom: 36px;
    text-align: center  
`;
