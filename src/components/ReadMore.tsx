import { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { colors } from 'theme';
import { maxWidth840 } from './rwd/detectMobile';
import { Text } from './_common/Text';

interface ReadMoreProps {
  text: string;
  limit: number;
}

export const ReadMore = (props: ReadMoreProps) => {
  const { text, limit } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <div>
      <TextWrapper>
        <Text
          color={colors.buttonTertiaryColorFg}
          fontFamily="Inter"
          fontWeight={500}
          label={isExpanded ? text : `${text?.slice(0, limit)}...`}
          lineHeight={isTablet ? 20 : 28}
          size={isTablet ? 0.875 : 1.125}
        />
      </TextWrapper>
      <StyledButton onClick={toggleText}>
        <Text
          color={colors.buttonTertiaryColorFg}
          fontWeight={700}
          label={isExpanded ? 'Read Less' : 'Read More'}
          lineHeight={isTablet ? 20 : 28}
          size={isTablet ? 0.875 : 1.125}
        />
      </StyledButton>
    </div>
  );
};

const TextWrapper = styled.div`
  margin-top: 16px;
`;

const StyledButton = styled.button`
    background-color: transparent;
    border-width: 0px;
    border: none;
    text-align: center;
    transition: 0.5s;
    width: fit-content;

    &:hover {
    opacity: 0.6;
    }
`;
