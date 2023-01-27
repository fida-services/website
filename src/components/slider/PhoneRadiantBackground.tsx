import React from 'react';
import styled from 'styled-components';

import { StyledGradientBackground } from 'styledParts/StyledGradientBackground';
import appPhone from 'assets/images/appPhone.png';

export const PhoneRadiantBackground = () => (
  <StyledGradientBackground width={250} height={420} marginX={75} alignItems="flex-start">
    <ImageWrapper>
      <img src={appPhone} height={430} alt="phone with applications on screen" />
    </ImageWrapper>
  </StyledGradientBackground>
);

const ImageWrapper = styled.div`
    transform: translateX(5%)
`;
