import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import lines from 'assets/shapes/lines.png';
import filledSquares from 'assets/shapes/squareWithFill.png';

import { MenuButton } from './MenuButton';
import { Header } from './Header';

const texts = {
  elevateGame: 'Elevate your game; invest in insurance contracts.',
  mainTitle: [
    { title: 'FOLLOW INSURANCE EXPERTS.' },
    { title: 'MAKE THE SAME' },
    { title: 'INVESTMENTS THEY DO.' },
  ]
};

export const Welcome = () => (
  <FirstBackground>
    <Header />
    <StyledWelcome className="flex flex-column">
      <Text label={texts.elevateGame} size={30} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
      {texts.mainTitle.map(({ title }) => <Text key={title} label={title} size={62} toUpperCase />)}
      <div className="mt-6">
        <MenuButton label="join our community" link="https://share.hsforms.com/1BenVBo4ESxyMjAsvqk0GRQe8c3w" border />
      </div>
    </StyledWelcome>
  </FirstBackground>
);

const StyledWelcome = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 155px;
    margin-top: 130px;
    margin-bottom: 30px;
    padding-bottom: 520px;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      position: absolute;
      overflow: visible;
      width: 100%;
      height: 100%;
      top: 400px;
      left: 430px;
      background: url(${filledSquares}) 0 0 no-repeat;
      transform: rotate(45deg);
    }
`;

const FirstBackground = styled.div`
  background-image: url(${lines});
  background-position: 63% 3%;
  background-repeat: no-repeat;
`;
