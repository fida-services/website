import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { colors } from 'theme';
import { MenuButton } from './MenuButton';

import { Text } from './_common/Text';

const text = {
  titleOne: "For more information about Fida's security protocol please view our Whitepaper.",
  buttonTitle: 'GO TO WHITEPAPER'
};

export const SecurityProtocol = () => (
  <StyledGenericWrapper maxWidth={870} marginBottom={0}>
    <StyledGenericWrapper maxWidth={850} marginBottom={35}>
      <Text size={32} textPlacing="center" label={text.titleOne} fontWeight={700} />
    </StyledGenericWrapper>
    <StyledButton type="button">
      <Text size={16} label={text.buttonTitle} color="black" fontWeight={700} />
    </StyledButton>
  </StyledGenericWrapper>
);

const StyledButton = styled.button`
    padding: 4px 18px;
    font-weight: 700;
    border-radius: 25px;
    cursor: pointer;
    background-color: 'black';
    color: 'white';
`;
