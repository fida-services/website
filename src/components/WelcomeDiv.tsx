import React from 'react';
import styled from 'styled-components';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { MenuButton } from './MenuButton';

const texts = {
  elevateGame: 'Elevate your game; invest in insurance contracts.',
  mainTitle: [
    { title: 'FOLLOW INSURANCE EXPERTS.' },
    { title: 'MAKE THE SAME' },
    { title: 'INVESTMENTS THEY DO.' },
  ]
};

export const WelcomeDiv = () => (
  <StyledWelcomeDiv className="flex flex-column">
    <Text label={texts.elevateGame} size={30} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
    {texts.mainTitle.map(({ title }) => <Text key={title} label={title} size={62} toUpperCase />)}
    <div className="mt-6">
      <MenuButton label="join our community" link="#" border />
    </div>
  </StyledWelcomeDiv>
);

const StyledWelcomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 130px;
    margin-bottom: 400px;
    margin-left: 155px;
`;
