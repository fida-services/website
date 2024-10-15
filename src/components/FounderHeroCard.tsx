import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import founderDesktopCard from 'assets/images/founder-hello-card-desktop.png';
import founderMobileCard from 'assets/images/founder-hello-card-mobile.png';
import { colors, radius } from 'theme';
import { founderWelcomeHeroCard } from 'data/texts';
import { maxWidth840 } from './rwd/detectMobile';
import { Text } from './_common/Text';
import { StyledMenuMainButton } from './StyledFoundersNavButtons';

export const FounderHeroCard = () => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <Wrapper isTablet={isTablet}>
      <ContentWrapper isTablet={isTablet}>
        <TopWrapper>
          <TextWrapper>
            <Text
              color={colors.textPrimaryOnBrand}
              fontFamily="Inter"
              fontWeight={500}
              label={founderWelcomeHeroCard.title}
              size={isTablet ? 1.5 : 2.25}
            />
            <Text
              color={colors.textSecondaryHover}
              fontFamily="Inter"
              fontWeight={400}
              label={founderWelcomeHeroCard.description}
              size={isTablet ? 1 : 1.25}
            />
          </TextWrapper>
          <StyledMenuMainButton onClick={() => navigate(founderWelcomeHeroCard.button.link)}>{founderWelcomeHeroCard.button.label}</StyledMenuMainButton>
        </TopWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isTablet: boolean }>`
  background-image: url("${({ isTablet }) => (isTablet ? founderMobileCard : founderDesktopCard)}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${radius['4xl']};
  display: flex;
  flex-direction: column;
  margin-top: 56px;

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    margin-top: 0px;
    overflow: hidden;
  }
`;

const ContentWrapper = styled.div<{ isTablet: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isTablet }) => (isTablet ? '100%' : '55%')};

  @media (min-width: 1024px) {
    align-items: end;
    flex-direction: row;
    padding: 32px 0px;
  }
`;

const TopWrapper = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px 0px 16px;

  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    padding: 0px 0px 0px 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 24px;

  @media (min-width: 1024px) {
    gap: 24px;
    margin-bottom: 50px;
    padding-bottom: 0;
  }
`;
