/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import welcomeOverlay from 'assets/overlays/welcome-overlay.svg';
import welcomeOverlayDesktop from 'assets/overlays/welcome-overlay-desktop.svg';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { maxWidth640, maxWidth840 } from './rwd/detectMobile';
import { FidaMarketPlaceCard } from './FidaMarketPlaceCard';
import { Title } from './_common/Title';

const texts = {
  title: 'Invest in insurence Contracts',
  description: 'Follow insurence experts.\nMake the same investments they do.',
};

export const Welcome = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <StyledWelcome>
      <LinesBg src={isMobile ? welcomeOverlay : welcomeOverlayDesktop} alt="qrcode" />
      <TextWrapper>
        <Title label={texts.title} />
        <Text
          label={texts.description}
          size={isTablet ? 1.5 : 1.875}
          fontFamily="Inter"
          color={colors.text_tertiary_600}
          fontWeight={500}
        />
      </TextWrapper>
      <FidaMarketPlaceCard />
    </StyledWelcome>
  );
};

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;
  position: relative;

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    gap: 24px;
  }
`;

const LinesBg = styled.img`
  left: 50%;
  position: absolute;
  transform: translate(-50%, 10%);
  z-index: -1;

  @media (min-width: 768px) {
    transform: translate(-50%, 5%);
  }

  @media (min-width: 1024px) {
    transform: translate(-30%, -10%);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;

  @media (min-width: 1024px) {
    padding: 54px 0px;
  }

  @media (min-width: 1440px) {
    min-width: 800px;
  }
`;
