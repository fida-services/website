import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme';
import { Text } from 'components/_common/Text';

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
          ? <Text key={text} size={32} label={text} color={colors.textGradient} fontWeight={700} linearGradient />
          : <Text key={text} size={32} label={text} fontWeight={400} />))}
      </div>
      { descriptionText && (
      <div className="mt-3">
        <Text size={24} label={descriptionText} />
      </div>
      )}
    </StyledTextSticky>
  );
};

const StyledTextSticky = styled.div`
  max-width: 400px;
  width: 30%
`;
