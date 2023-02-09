import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';

import emptySquares from 'assets/shapes/emptySquares.png';

import { Text } from './_common/Text';
import { isMobile } from './rwd/detectMobile';

const text = {
  titleOne: "For more information about Fida's security protocol please view our Whitepaper.",
  buttonTitle: 'GO TO WHITEPAPER'
};

export const SecurityProtocol = () => (
  <StyledGenericWrapper maxWidth={870} marginTop={110} marginBottom={150}>
    <BackgroundWrapper>
      <StyledGenericWrapper maxWidth={850} marginBottom={35}>
        <Text size={isMobile ? 1.5 : 2} textPlacing="center" label={text.titleOne} fontWeight={700} />
      </StyledGenericWrapper>
      <StyledLink href="#">
        <Text size={1} label={text.buttonTitle} color="black" fontWeight={700} />
      </StyledLink>
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
      width: 900px;
      height: 900px;
      top: 20%;
      left: 50%;
      z-index: -1;
      background: url(${emptySquares}) 0 0 no-repeat;
      transform: translate(-50%, -50%) rotate(-135deg) scale(.6);
    }
`;
const StyledLink = styled.a`
    display: block;
    padding: 4px 18px;
    font-weight: 700;
    border-radius: 25px;
    text-decoration: none;
    cursor: pointer;
    background-color: white;
`;
