import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { colors } from 'theme';
import { Text } from './_common/Text';

const text = {
  titleOne: 'keeping your assets ',
  titleTwo: 'secure'
};

export const KeepingSecure = () => (
  <StyledGenericWrapper marginBottom={30}>
    <StyledTextWrapper>
      <Text size={80} label={text.titleOne} fontWeight={700} toUpperCase />
      <Text size={80} label={text.titleTwo} fontWeight={700} color={colors.textGradient} linearGradient toUpperCase />
    </StyledTextWrapper>
  </StyledGenericWrapper>
);

const StyledTextWrapper = styled.div`
    max-width: 680px;
    text-align: center;
`;
