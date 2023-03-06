/* eslint-disable no-nested-ternary */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import linesBg from 'assets/shapes/linesBg.svg';
import { colors } from 'theme';
import { Text } from 'components/_common/Text';
import { useOnScreen } from 'hooks/useOnScreen';
import { maxWidth840, maxWidth1140 } from './rwd/detectMobile';

const texts = {
  theFida: 'the fida',
  marketplace: 'marketplace',
  description: 'Fida is a blockchain-based risk transfer marketplace connecting re/insurance risk to alternative capital secured by smart contracts.'
};

export const Description = () => {
  const [isElementOneVisible, setIsElementOneVisible] = useState(false);
  const [isElementTwoVisible, setIsElementTwoVisible] = useState(false);

  const elementOneRef = useRef<HTMLDivElement>(null);
  const elementTwoRef = useRef<HTMLDivElement>(null);

  const isElementOneOnScreen = useOnScreen(elementOneRef);
  const isElementTwoOnScreen = useOnScreen(elementTwoRef);

  if (isElementOneOnScreen) {
    if (!isElementOneVisible) setIsElementOneVisible(true);
  }
  if (isElementTwoOnScreen) {
    if (!isElementTwoVisible) setIsElementTwoVisible(true);
  }

  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  const isTablet = useMediaQuery({
    query: maxWidth1140,
  });

  return (
    <Wrapper marginBottom={isMobile ? 50 : 100}>
      {!isMobile && (
      <LinesBg
        src={linesBg}
        alt="qrcode"
      />
      )}
      <TextWrapper>
        <TitleWrapper
          ref={elementOneRef}
          isOnScreen={isElementOneVisible}
        >
          <Text label={texts.theFida} size={isMobile ? 2 : isTablet ? 3 : 5} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
          <Text label={texts.marketplace} size={isMobile ? 2 : isTablet ? 3 : 5} fontWeight={700} toUpperCase />
        </TitleWrapper>
        <StyledTextWrapper
          ref={elementTwoRef}
          isOnScreen={isElementTwoVisible}
        >
          <Text textPlacing="center" label={texts.description} size={isMobile ? 1.4 : 2} fontWeight={700} />
        </StyledTextWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ marginBottom: number }>`
    display: flex;
    justify-content: center;
    margin: 700px 30px ${({ marginBottom }) => marginBottom}px 30px;
    position: relative;
    overflow: visible;

    @media (min-width: 1141px) {
      margin-top: 570px;
    }

    @media (max-width: 1140px) {
      margin-top: 660px;
    }

    @media (max-width: 960px) {
      margin-top: 650px;
    }

    @media (max-width: 810px) {
      margin-top: 520px;
    }

    @media (max-width: 700px) {
      margin-top: 530px;
    }

    @media (max-width: 650px) {
      margin-top: 550px;
    }

    @media (max-width: 600px) {
      margin-top: 380px;
    }

    @media (max-width: 450px) {
      margin-top: 330px;
    }
`;

const LinesBg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

const TitleWrapper = styled.div<{ isOnScreen: boolean }>`
  display: flex;
  gap: 40px;

  transform: ${({ isOnScreen }) => (isOnScreen ? 'translateY(0)' : 'translateY(50px)')};
  transition: 1.5s;
  transition-delay: 0.01s;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const StyledTextWrapper = styled.div<{ isOnScreen: boolean }>`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  max-width: 715px;

  transform: ${({ isOnScreen }) => (isOnScreen ? 'translateY(0)' : 'translateY(50px)')};
  transition: 1.5s;
  transition-delay: 0.01s;
`;
