import React from 'react';
import styled from 'styled-components';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';

const texts = {
  theFida: 'the fida',
  marketplace: 'marketplace',
  description: 'Fida is a blockchain-based risk transfer marketplace connecting re/insurance risk to alternative capital secured by smart contracts.'
};

export const Description = () => (
  <StyledGenericWrapper marginBottom={230}>
    <div className="flex justify-content-center gap-3">
      <Text label={texts.theFida} size={60} color={colors.textGradient} fontWeight={700} linearGradient toUpperCase />
      <Text label={texts.marketplace} size={60} fontWeight={700} toUpperCase />
    </div>
    <StyledTextWrapper>
      <Text textPlacing="center" label={texts.description} size={32} fontWeight={700} />
    </StyledTextWrapper>
  </StyledGenericWrapper>
);

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  max-width: 715px;
`;
