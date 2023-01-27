import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { Text } from 'components/_common/Text';

import { MenuButton } from './MenuButton';

const text = {
  signUp: 'Sign up below to be invited to the Fida network when we go live.'
};

export const SignUpBelow = () => (
  <StyledGenericWrapper marginBottom={170}>
    <TextWrapper>
      <Text size={32} label={text.signUp} fontWeight={700} />
    </TextWrapper>
    <MenuButton label="join our community" link="#" border />
  </StyledGenericWrapper>
);

const TextWrapper = styled.div`
    max-width: 640px;
    margin-bottom: 36px;
    text-align: center
    
`;
