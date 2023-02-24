import React from 'react';
import styled from 'styled-components';

import questGates from 'assets/logos/questGates.svg';
import sompo from 'assets/logos/sompo.svg';
import superscript from 'assets/logos/superscript.svg';
import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { colors } from 'theme';
import { Text } from './_common/Text';

const assets = {
  titleOne: 'OUR PARTNERS & INVESTORS',
  logos: [superscript, questGates, sompo]
};

export const Partners = () => (
  <StyledGenericWrapper marginBottom={150} marginTop={100}>
    <div className="mb-3 text-center">
      <Text size={3} label={assets.titleOne} fontWeight={700} toUpperCase />
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
    padding: 0;

    @media (max-width: 840px) {
      max-width: 100%;
    }
`;
const SponsorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 20px;
    background-color: ${colors.white};
    padding: 30px;
    border-radius: 25px;

`;
