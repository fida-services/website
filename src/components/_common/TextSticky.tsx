/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { colors } from 'theme';
import { Text } from 'components/_common/Text';
import { maxWidth840, maxWidth1140 } from 'components/rwd/detectMobile';

interface Props {
  textData: {
    highlightIndex: number;
    titleTexts: string[];
    descriptionText?: string;
  }
}

export const TextSticky = ({ textData }: Props) => {
  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  const isTablet = useMediaQuery({
    query: maxWidth1140,
  });

  const { highlightIndex, titleTexts, descriptionText } = textData;

  return (
    <StyledTextSticky>
      <div>
        {titleTexts.map((text, index) => (index === highlightIndex
          ? <Text key={text} size={isMobile ? 1.5 : isTablet ? 1.7 : 2} label={text} color={colors.textGradient} fontWeight={700} linearGradient />
          : <Text key={text} size={isMobile ? 1.5 : isTablet ? 1.7 : 2} label={text} fontWeight={400} />))}
      </div>
      { descriptionText && (
      <div className="mt-3">
        <Text size={isMobile ? 1 : 1.5} label={descriptionText} />
      </div>
      )}
    </StyledTextSticky>
  );
};

const StyledTextSticky = styled.div`
  max-width: 400px;
  width: 30%;
  
  @media (max-width: 840px) {
    margin-top: 20px;
    width: 90%;
    font-size: 10px;
  }
`;
