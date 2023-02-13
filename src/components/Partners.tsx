import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { colors } from 'theme';

import questGates from 'assets/logos/questGates.png';
import sompo from 'assets/logos/sompo.png';
import superscript from 'assets/logos/superscript.png';
import { Text } from './_common/Text';
import { isMobile } from './rwd/detectMobile';

const assets = {
  titleOne: 'OUR PARTNERS & INVESTORS',
  logos: [superscript, questGates, sompo]
};

export const Partners = () => (
  <StyledGenericWrapper marginBottom={150}>
    <div className="mb-5 text-center">
      <Text size={4} label={assets.titleOne} fontWeight={700} toUpperCase />
    </div>
    <SponsorsWrapper>
      {assets.logos.map(logo => (
        <SponsorWrapper key={logo}>
          <img src={logo} alt={logo} />
        </SponsorWrapper>
      ))}
    </SponsorsWrapper>
  </StyledGenericWrapper>
);

const SponsorsWrapper = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${colors.white};
    border-radius: 25px;
    padding: 40px 100px;
    @media (max-width: 840px) {
      max-width: 100%;
    }
`;
const SponsorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 20px;
`;
