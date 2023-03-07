/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import lines from 'assets/shapes/lines2.svg';
import filledSquares from 'assets/shapes/filledSquares.svg';

import { MenuButton } from './MenuButton';
import { Header } from './Header';
import { maxWidth640, maxWidth840, maxWidth1140 } from './rwd/detectMobile';

const texts = {
  elevateGame: 'Elevate your game; invest in insurance contracts.',
  mainTitle: [
    { title: 'FOLLOW INSURANCE EXPERTS. ' },
    { title: 'MAKE THE SAME ' },
    { title: 'INVESTMENTS THEY DO.' },
  ]
};

export const Welcome = () => {
  const isSmallMobile = useMediaQuery({
    query: maxWidth640,
  });

  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  const isTablet = useMediaQuery({
    query: maxWidth1140,
  });

  return (
    <>
      <Header />
      <StyledWelcome marginTop={isMobile ? 40 : isTablet ? 80 : 120}>
        <LightLinesBg src={lines} alt="qrcode" />
        <FilledSquaresBg src={filledSquares} alt="qrcode" />
        <TextWrapper>
          <FirstLineWrapper>
            <Text label={texts.elevateGame} size={isSmallMobile ? 1.5 : isMobile ? 1.8 : 2} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
          </FirstLineWrapper>
          <FurtherLinesWrapper isHigherOpacity={isMobile}>
            {texts.mainTitle.map(({ title }) => <Text key={title} label={title} size={isMobile ? 2 : isTablet ? 3 : 3.8} toUpperCase />)}
          </FurtherLinesWrapper>
          <ButtonWrapper>
            {isMobile
              ? <MenuButton label="join our network" backgroundColor={colors.white} color="black" link="https://share.hsforms.com/1BenVBo4ESxyMjAsvqk0GRQe8c3w" />
              : <MenuButton label="join our network" link="https://share.hsforms.com/1BenVBo4ESxyMjAsvqk0GRQe8c3w" border />}
          </ButtonWrapper>
        </TextWrapper>
      </StyledWelcome>
    </>
  );
};

const StyledWelcome = styled.div<{ marginTop: number }>`
    display: flex;
    justify-content: center;
    margin: ${({ marginTop }) => marginTop}px 40px 0 40px;
    position: relative;
    overflow: visible;
`;

const LightLinesBg = styled.img`
    position: absolute;
    left: 20%;
    top: -30%;
    z-index: -1;

    @media (max-width: 1263px) {
      left: 5%;
      top: -50%;
    }

    @media (max-width: 840px) {
      left: -50%;
      top: -90%;
    }
`;

const FilledSquaresBg = styled.img`
    position: absolute;
    right: -15%;
    top: 40%;
    z-index: -1;

    @media (max-width: 840px) {
      top: 30%;
      right: -45%;
    }

    @media (max-width: 600px) {
      top: 30%;
      right: -95%;
    }

    @media (max-width: 400px) {
      top: 30%;
      right: -155%;
    }
    `;

const FirstLineWrapper = styled.div`
    @media (max-width: 840px) {
      margin-bottom: 30px;
    }
`;

const FurtherLinesWrapper = styled.div<{ isHigherOpacity: boolean }>`
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, 
    from(rgba(0,0,0,1)), to(rgba(0,0,0,${({ isHigherOpacity }) => (isHigherOpacity ? 0.6 : 0.3)})));
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
`;

const ButtonWrapper = styled.div`
    margin-top: 50px;

    @media (max-width: 840px) {
    display: flex;
    justify-content: center;
    }
`;
