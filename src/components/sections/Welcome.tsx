import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import welcomeOverlay from 'assets/overlays/welcome-overlay.svg';
import welcomeOverlayDesktop from 'assets/overlays/welcome-overlay-desktop.svg';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { welcomeTexts } from 'data/texts';
import { FounderHeroCard } from 'components/FounderHeroCard';
import { maxWidth840 } from '../rwd/detectMobile';
import { Title } from '../_common/Title';
import { WelcomeCards } from '../WelcomeCards';

const Welcome = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <>
      <StyledWelcome>
        <DesktopLinesBg
          alt="welcome-overlay"
          src={welcomeOverlayDesktop}
          loading="eager"
        />
        <MobileLinesBg
          alt="welcome-overlay"
          src={welcomeOverlay}
          loading="eager"
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
        <FounderHeroCard />
      </StyledWelcome>
      <WelcomeCards />
    </>
  );
};

export default Welcome;

const StyledWelcome = styled.div`
  display: grid;
  overflow: hidden;;
  position: relative;

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    grid-template-columns: 60% 50%;
  }

   @media (min-width: 1090px) {
    grid-template-columns: 50% 50%;
  }
`;

const DesktopLinesBg = styled.img`
  left: 50%;
  position: absolute;
  transform: translate(-50%, 10%);
  z-index: -1;

  @media (max-width: 640px) {
    display: none;
  }

  @media (min-width: 768px) {
    transform: translate(-50%, 5%);
  }

  @media (min-width: 1024px) {
    transform: translate(-30%, -10%);
  }
`;

const MobileLinesBg = styled.img`
  left: 50%;
  position: absolute;
  transform: translate(-50%, 10%);
  z-index: -1;

  top: 20%;
  height: 200px;
  width: 100%;
  object-fit: none;
  object-position: center;

  @media (min-width: 640px) {
    display: none;
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
