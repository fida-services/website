import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { colors } from 'theme';

import { useMediaQuery } from 'react-responsive';
import { Skeleton } from '@mui/material';
import Footer from '../components/sections/Footer';
import { Text } from '../components/_common/Text';
import { Container } from '../components/_common/Container';

import backgroundImage from '../assets/images/background-pattern.png';
import { NFTSlider } from '../components/founder-sale/NFTSlider';
import { maxWidth840 } from '../components/rwd/detectMobile';
import { HeaderFounders } from '../components/HeaderFounders';
import { FounderBenefits } from '../components/founder-sale/FounderBenefits';

const NFTDetails = lazy(() => import('../components/founder-sale/NFTDetails'));

const FounderCards = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const handleScrollToBenefits = () => {
    document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <HeaderFounders handleLearnMore={handleScrollToBenefits} />
      <FounderContainer>
        <TitleContainer>
          <Title>{'Fida Founder\'s NFT Collection'.toUpperCase()}</Title>
          <Text style={{ width: isTablet ? '100%' : '60%', textAlign: 'center' }} size={isTablet ? 1.15 : 1.5} color={colors.textTertiary600} label="Explore the Founder&apos;s NFT collection for early adopter&apos;s access to the decentralized insurance marketplace." />
        </TitleContainer>
        <NFTSlider />
        <FounderBenefits />
        <Suspense fallback={<Skeleton height={200} width="100%" />}>
          <NFTDetails />
        </Suspense>
      </FounderContainer>
      <Footer />
    </Container>
  );
};

export default FounderCards;

const FounderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  position: relative;
  background-image: url("${backgroundImage}");
  background-size: 100%;
  background-position: right 0 bottom 50%;
  background-repeat: no-repeat;
  padding: 24px 48px;

  @media (max-width: 640px) {
        padding: 0 16px;
        gap: 24px;
    }
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  text-align: center;
  padding: 0;

  @media (max-width: 840px) {
        padding: 0 16px;
        gap: 24px;
    }
`;

const Title = styled.p`
color: ${colors.textPrimaryOnBrand};
font-size: 2rem;
font-weight: 400;
line-height: 44px;

white-space: pre-line;

transition: 0.5s;

@media (min-width: 1024px) {
  line-height: 90px;
  font-size: 4.5rem;
}
`;
