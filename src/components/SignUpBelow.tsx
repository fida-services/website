import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { Text } from 'components/_common/Text';

import emptySquares from 'assets/shapes/emptySquares.png';

import { MenuButton } from './MenuButton';
import { isMobile } from './rwd/detectMobile';

const text = {
  signUp: 'Sign up below to be invited to the Fida network when we go live.'
};

export const SignUpBelow = () => (
  <StyledGenericWrapper marginTop={isMobile ? 50 : 110} marginBottom={isMobile ? 50 : 150}>
    <BackgroundWrapper>
      <TextWrapper>
        <Text size={isMobile ? 1.5 : 2} label={text.signUp} fontWeight={700} />
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
      width: 150%;
      height: 400%;
      top: 5%;
      left: 45%;
      z-index: -1;
      background: url(${emptySquares}) 0 0 no-repeat;
      transform: translate(-50%, -50%) rotate(-135deg) scale(.5);
    }
`;
const TextWrapper = styled.div`
    max-width: 640px;
    margin-bottom: 36px;
    text-align: center  
`;
