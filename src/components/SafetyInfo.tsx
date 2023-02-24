import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import safetyBackgroundOne from 'assets/shapes/safetyBackgroundOne.png';
import safetyBackgroundTwo from 'assets/shapes/safetyBackgroundTwo.png';
import safetyBackgroundThree from 'assets/shapes/safetyBackgroundThree.png';
import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { useOnScreen } from 'hooks/useOnScreen';
import { Text } from './_common/Text';

interface ParagraphProps {
  paragraph: {
    title: string;
    description: string;
    backgroundImage: string;
  }
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
  <StyledGenericWrapper marginTop={110} marginBottom={150}>
    {paragraphs.map(paragraph => <Paragraph key={paragraph.title} paragraph={paragraph} />)}
  </StyledGenericWrapper>
);

const Paragraph = ({ paragraph }: ParagraphProps) => {
  const [isElementOneVisible, setIsElementOneVisible] = useState(false);

  const elementOneRef = useRef<HTMLDivElement>(null);

  const isElementOneOnScreen = useOnScreen(elementOneRef);

  if (isElementOneOnScreen) {
    if (!isElementOneVisible) setIsElementOneVisible(true);
  }

  return (
    <StyledWrapper
      backgroundImage={paragraph.backgroundImage}
      ref={elementOneRef}
      isOnScreen={isElementOneVisible}
    >
      <Text size={2} textPlacing="center" label={paragraph.title} fontWeight={700} />
      <Text size={1.5} textPlacing="center" label={paragraph.description} fontWeight={400} />
    </StyledWrapper>
  );
};

interface StyledWrapperProps {
  backgroundImage: string
  isOnScreen: boolean
}

const StyledWrapper = styled.div<StyledWrapperProps>`
    display: flex;
    flex-direction: column;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-position: center;
    background-repeat: no-repeat;
    padding: 100px 0;
    max-width: 495px;
    margin: 0 auto;

    transform: ${({ isOnScreen }) => (isOnScreen ? 'translateY(0)' : 'translateY(100px)')};
    transition: 1.5s;
    transition-delay: 0.01s;

    @media (max-width: 840px) {
      padding: 50px 0;
      margin-bottom: 40px;
    }

    @media (max-height: 360px) {
      margin-bottom: 40px;
    }
`;
