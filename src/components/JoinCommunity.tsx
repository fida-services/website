import React from 'react';
import styled from 'styled-components';

import { Text } from 'components/_common/Text';

import { colors } from 'theme';
import { GradientBox } from 'components/_common/GradientBox';

import cube from 'assets/icons/cube.png';
import circles from 'assets/icons/circles.png';
import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';

const text = {
  title: {
    join: 'join ',
    our: 'our',
    community: ' community'
  },
  boxesData: [
    {
      title: 'An Active Community',
      description: 'We are building a community where participants can facilitate knowledge sharing and evolve the insurance industry.',
      image: cube
    },
    {
      title: 'A Professional Network',
      description: 'The Fida insurance network connects professionals in the industry including brokers, underwriters and capacity providers to reduce unnecessary friction in the execution and trading of insurance contracts.',
      image: circles
    }
  ]
};

export const JoinCommunity = () => (
  <StyledGenericWrapper marginBottom={110}>
    <div className="mb-7">
      <Text size={80} label={text.title.join} toUpperCase fontWeight={700} />
      <Text size={80} label={text.title.our} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
      <Text size={80} label={text.title.community} fontWeight={700} toUpperCase />
    </div>
    <StyledBoxesWrapper>
      {text.boxesData.map(boxData => <GradientBox key={boxData.title} boxData={boxData} />)}
    </StyledBoxesWrapper>
  </StyledGenericWrapper>
);

const StyledBoxesWrapper = styled.div`
    display: flex;

`;
