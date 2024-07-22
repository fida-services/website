import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import welcomeOverlay from 'assets/overlays/welcome-overlay.svg';
import welcomeOverlayDesktop from 'assets/overlays/welcome-overlay-desktop.svg';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { welcomeTexts } from 'data/texts';
import { maxWidth640, maxWidth840 } from '../rwd/detectMobile';
import { HeroCard } from '../HeroCard';
import { Title } from '../_common/Title';
import { WelcomeCards } from '../WelcomeCards';

export const Welcome = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <>
      <StyledWelcome>
        <LinesBg
          alt="welcome-overlay"
          src={isMobile ? welcomeOverlay : welcomeOverlayDesktop}
        />
        <TextWrapper>
          <Title label={welcomeTexts.title} />
          <Text
            color={colors.textTertiary600}
            fontFamily="Inter"
            fontWeight={500}
            label={welcomeTexts.description}
            size={isTablet ? 1.5 : 1.875}
          />
        </TextWrapper>
        <HeroCard />
      </StyledWelcome>
      <WelcomeCards />
    </>
  );
};

const StyledWelcome = styled.div`
  display: grid;
  overflow: hidden;;
  position: relative;

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    grid-template-columns: 50% 50%;
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
`;
