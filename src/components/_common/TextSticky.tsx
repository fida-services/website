import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme';
import { Text } from 'components/_common/Text';
import { isMobile } from 'components/rwd/detectMobile';

interface Props {
  textData: {
    highlightIndex: number;
    titleTexts: string[];
    descriptionText?: string;
  }
}

export const TextSticky = ({ textData }: Props) => {
  const { highlightIndex, titleTexts, descriptionText } = textData;

  return (
    <StyledTextSticky>
      <div>
        {titleTexts.map((text, index) => (index === highlightIndex
          ? <Text key={text} size={2} label={text} color={colors.textGradient} fontWeight={700} linearGradient />
          : <Text key={text} size={2} label={text} fontWeight={400} />))}
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
  margin-bottom: 100px;
  @media (max-width: 840px) {
    margin-top: 20px;
    width: 90%;
    margin-bottom: 20px;
  }
`;
