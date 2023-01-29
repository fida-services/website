import React from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { colors } from 'theme';

import questGates from 'assets/logos/questGates.png';
import sompo from 'assets/logos/sompo.png';
import superscript from 'assets/logos/superscript.png';
import { Text } from './_common/Text';

const assets = {
  titleOne: 'OUR PARTNERS & INVESTORS',
  logos: [superscript, questGates, sompo]
};

export const Partners = () => (
  <StyledGenericWrapper marginBottom={150}>
    <div className="mb-5">
      <Text size={60} label={assets.titleOne} fontWeight={700} toUpperCase />
    </div>
    <SponsorsWrapper>
      {assets.logos.map(logo => (
        <SponsorWrapper>
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
`;
const SponsorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
`;
