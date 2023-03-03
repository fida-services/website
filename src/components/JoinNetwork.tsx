import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import cube from 'assets/icons/cube.png';
import circles from 'assets/icons/circles.png';
import linesBg from 'assets/shapes/linesBg.svg';
import { colors } from 'theme';
import { GradientBox } from 'components/_common/GradientBox';
import { useOnScreen } from 'hooks/useOnScreen';
import { Text } from 'components/_common/Text';
import { maxWidth840, maxWidth1140 } from './rwd/detectMobile';

const text = {
  title: {
    join: 'join ',
    our: 'our ',
    community: 'Network'
  },
  boxesData: [
    {
      title: 'An Active Network',
      description: 'We are building a network where participants can facilitate knowledge sharing and evolve the insurance industry.',
      image: cube
    },
    {
      title: 'A Professional Network',
      description: 'The Fida insurance network connects professionals in the industry including brokers, underwriters and capacity providers to reduce unnecessary friction in the execution and trading of insurance contracts.',
      image: circles
    }
  ]
};

export const JoinNetwork = () => {
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
      <TitleWrapper
        isChangedMargin={isTablet}
        ref={elementOneRef}
        isOnScreen={isElementOneVisible}
      >
        <a href="https://share.hsforms.com/1BenVBo4ESxyMjAsvqk0GRQe8c3w" className="no-underline">
          <Text size={isMobile ? 3 : 5} label={text.title.join} toUpperCase fontWeight={700} />
          <Text size={isMobile ? 3 : 5} label={text.title.our} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
          <Text size={isMobile ? 3 : 5} label={text.title.community} fontWeight={700} toUpperCase />
        </a>
        {isTablet && <LinesBg src={linesBg} alt="qrcode" />}
      </TitleWrapper>
      <StyledBoxesWrapper
        marginBottom={isMobile ? 10 : 0}
        ref={elementTwoRef}
        isOnScreen={isElementTwoVisible}
      >
        {text.boxesData.map(boxData => <GradientBox key={boxData.title} boxData={boxData} />)}
      </StyledBoxesWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isChangedMargin: boolean }>`
    margin: ${({ isChangedMargin }) => (isChangedMargin ? 250 : 700)}px 30px 100px 30px;

    @media (min-width: 1141px) and (max-height: 800px) {
      margin-top: 400px;
    }

    @media (min-width: 1141px) and (max-height: 700px) {
      margin-top: 200px;
    }

    @media (min-width: 1141px) and (max-height: 600px) {
      margin-top: 200px;
    }
`;

const LinesBg = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

interface WrapperProps {
  isOnScreen: boolean;
  isChangedMargin: boolean ;
}

const TitleWrapper = styled.div<WrapperProps>`
    text-align: center;
    position: relative;

    transform: ${({ isOnScreen }) => (isOnScreen ? 'translateY(0)' : 'translateY(100px)')};
    transition: 1.5s;
    transition-delay: 0.01s;


    @media (min-width: 1141px) {
      margin-bottom: 100px;
    }

    @media (max-width: 1141px) {
    margin-bottom: 190px;
    }

    @media (max-width: 960px) {
      margin-bottom: 130px;
    }

    @media (max-width: 810px) {
      margin-bottom: 190px;
    }

    @media (max-width: 640px) {
      margin-bottom: 150px;
    }

    @media (max-height: 360px) {
      margin-bottom: 170px;
    }
`;

interface BoxesWrapperProps {
  isOnScreen: boolean;
  marginBottom: number;
}

const StyledBoxesWrapper = styled.div<BoxesWrapperProps>`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;

    transform: ${({ isOnScreen }) => (isOnScreen ? 'translateY(0)' : 'translateY(100px)')};
    transition: 1.5s;
    transition-delay: 0.01s;

    @media (max-width: 840px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
`;
