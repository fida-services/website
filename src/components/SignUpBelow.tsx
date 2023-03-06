import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import linesBg from 'assets/shapes/linesBg.svg';
import { colors } from 'theme';
import { Text } from 'components/_common/Text';
import { useOnScreen } from 'hooks/useOnScreen';
import { MenuButton } from './MenuButton';
import { maxWidth840, maxWidth1140 } from './rwd/detectMobile';

const text = {
  signUp: 'Sign up below to be invited to the Fida network when we go live.'
};

export const SignUpBelow = () => {
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
          <Text size={isMobile ? 1.5 : 2} label={text.signUp} fontWeight={700} textPlacing="center" />
        </TextWrapper>
        <ButtonWrapper
          ref={elementTwoRef}
          isOnScreen={isElementTwoVisible}
        >
          <MenuButton label="join our network" link="https://share.hsforms.com/1BenVBo4ESxyMjAsvqk0GRQe8c3w" border backgroundColor={colors.white} color={colors.mainBlack} />
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

const TitleWrapper = styled.div<{ isChangedMargin: boolean }>`
    margin-bottom: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 640px;
    gap: 20px;
    text-align: center;
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

const LinesBg = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;
