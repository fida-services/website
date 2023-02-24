import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import straightSquares from 'assets/shapes/straightSquares.svg';
import { colors } from 'theme';
import { useOnScreen } from 'hooks/useOnScreen';
import { maxWidth840, maxWidth1140 } from './rwd/detectMobile';
import { Text } from './_common/Text';

const text = {
  titleOne: 'keeping your assets ',
  titleTwo: 'secure'
};

export const KeepingSecure = () => {
  const [isElementOneVisible, setIsElementOneVisible] = useState(false);

  const elementOneRef = useRef<HTMLDivElement>(null);

  const isElementOneOnScreen = useOnScreen(elementOneRef);

  if (isElementOneOnScreen) {
    if (!isElementOneVisible) setIsElementOneVisible(true);
  }

  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  const isTablet = useMediaQuery({
    query: maxWidth1140,
  });
  return (
    <Wrapper isChangedMargin={isTablet}>
      <TitleWrapper isChangedMargin={isTablet}>
        <TextWrapper
          ref={elementOneRef}
          isOnScreen={isElementOneVisible}
        >
          <Text size={isMobile ? 3 : 4} label={text.titleOne} fontWeight={700} toUpperCase textPlacing="center" />
          <Text size={isMobile ? 3 : 4} label={text.titleTwo} fontWeight={700} color={colors.textGradient} linearGradient toUpperCase />
        </TextWrapper>
        <LinesWrapper>
          <LinesBg src={straightSquares} alt="qrcode" />
        </LinesWrapper>
      </TitleWrapper>
    </Wrapper>

  );
};

const Wrapper = styled.div<{ isChangedMargin: boolean }>`
    margin: 300px 30px 200px 30px;

    @media (max-width: 1140px) {
      margin: 300px 30px -30px 30px;
    }

    @media (max-width: 840px) {
      margin: 200px 30px 200px 30px;
    }

    @media (max-width: 640px) {
      margin: 100px 30px 0px 30px;
    }

    @media (max-width: 400px) {
      margin: -30px 30px 0px 30px;
    }

    @media (max-height: 360px) {
      margin: 60px 30px -20px 30px;
    }
`;

const LinesWrapper = styled.div`
      position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

`;

const LinesBg = styled.img`
    transform-origin: center;
    transform: scale(0.6);
    z-index: -1;
`;

const TitleWrapper = styled.div<{ isChangedMargin: boolean }>`
    text-align: center;
    margin-bottom: ${({ isChangedMargin }) => (isChangedMargin ? 150 : 40)}px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 400px) {
      margin-bottom: 100px;
    }
`;

const TextWrapper = styled.div<{ isOnScreen: boolean }>`
    transform: ${({ isOnScreen }) => (isOnScreen ? 'translateY(0)' : 'translateY(50px)')};
    transition: 1.5s;
    transition-delay: 0.01s;
`;
