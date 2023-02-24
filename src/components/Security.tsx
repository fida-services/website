import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import linesBg from 'assets/shapes/linesBg.svg';
import { Text } from 'components/_common/Text';
import { useOnScreen } from 'hooks/useOnScreen';
import { MenuButton } from './MenuButton';
import { maxWidth840, maxWidth1140 } from './rwd/detectMobile';

const text = {
  titleOne: "For more information about Fida's security protocol please view our Whitepaper.",
  buttonTitle: 'GO TO WHITEPAPER'
};

export const Security = () => {
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
    <Wrapper isChangedMargin={isTablet}>
      <TitleWrapper isChangedMargin={isTablet}>
        <TextWrapper
          ref={elementOneRef}
          isOnScreen={isElementOneVisible}
        >
          <Text size={isMobile ? 1.5 : 2} textPlacing="center" label={text.titleOne} fontWeight={700} />
        </TextWrapper>
        <ButtonWrapper
          ref={elementTwoRef}
          isOnScreen={isElementTwoVisible}
        >
          <MenuButton label={text.buttonTitle} link="#" border />
        </ButtonWrapper>
        <LinesBg src={linesBg} alt="qrcode" />
      </TitleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isChangedMargin: boolean }>`
    margin: 200px 30px 50px 30px;
    display: flex;
    justify-content: center;
`;

const LinesBg = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

const TitleWrapper = styled.div<{ isChangedMargin: boolean }>`
    margin-bottom: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 640px;
    gap: 20px
`;

const TextWrapper = styled.div<{ isOnScreen: boolean }>`
  transform: ${({ isOnScreen }) => (isOnScreen ? 'translateY(0)' : 'translateY(50px)')};
  transition: 1.5s;
  transition-delay: 0.01s;
`;

const ButtonWrapper = styled.div<{ isOnScreen: boolean }>`
  transform: ${({ isOnScreen }) => (isOnScreen ? 'translateY(0)' : 'translateY(50px)')};
  transition: 1.5s;
  transition-delay: 0.01s;
`;
