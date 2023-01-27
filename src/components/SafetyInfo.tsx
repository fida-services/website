import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import safetyBackgroundOne from 'assets/shapes/safetyBackgroundOne.png';
import safetyBackgroundTwo from 'assets/shapes/safetyBackgroundTwo.png';
import safetyBackgroundThree from 'assets/shapes/safetyBackgroundThree.png';
import { Text } from './_common/Text';

interface ParagraphProps {
  paragraph: {
    title: string;
    description: string;
    backgroundImage: string;
  }
}
interface StyledWrapperProps {
  backgroundImage: string
}

const paragraphs = [
  {
    title: 'Distributed risk',
    description: 'Any given capital allocation is distributed across multiple unspent transaction outputs held jointly between the owner and the platform, limiting the power each party has over the funds.',
    backgroundImage: safetyBackgroundOne
  },
  {
    title: 'Fail safes',
    description: 'The outputs have a simple time lock, followed by a safety fuse at the start of their validation allowing the team to react to any suspicious activity by freezing assets and topping the attack immediately.',
    backgroundImage: safetyBackgroundTwo
  },
  {
    title: "Minimal 'Attack Surface'",
    description: 'The Fida Protocol user Haskell/Plutus, a fundamentally more secure programming language where a major portion of the techniques are not implementable and auditing is much more effective.',
    backgroundImage: safetyBackgroundThree
  }

];

export const SafetyInfo = () => (
  <StyledGenericWrapper marginBottom={50}>
    {paragraphs.map(paragraph => <Paragraph paragraph={paragraph} />)}
  </StyledGenericWrapper>
);

const Paragraph = ({ paragraph }: ParagraphProps) => (
  <StyledWrapper backgroundImage={paragraph.backgroundImage}>
    <Text size={32} textPlacing="center" label={paragraph.title} fontWeight={700} />
    <Text size={24} textPlacing="center" label={paragraph.description} fontWeight={400} />
  </StyledWrapper>
);

const StyledWrapper = styled.div<StyledWrapperProps>`
    display: flex;
    flex-direction: column;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-position: center;
    background-repeat: no-repeat;
    padding: 100px 0;
    max-width: 495px;
    margin: 20px auto;
`;
