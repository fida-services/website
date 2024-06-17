import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import mobileCards from 'assets/images/mobile-cards.svg';
import laptopCards from 'assets/images/laptop-cards.svg';
import lineChart from 'assets/images/line-chart.svg';
import lineChartDesktop from 'assets/images/line-chart-desktop.svg';
import { Text } from 'components/_common/Text';
import { colors, radius } from 'theme';
import { maxWidth840 } from './rwd/detectMobile';
import { MenuButton } from './MenuButton';

const texts = {
  card1: {
    buttonLabel: 'Learn more',
    buttonLink: '',
    description: 'Follow insurence experts. Make the same investments they do.',
    title: 'Expand your investors portfolio'
  },
  card2: {
    description: 'Insurance gap',
    title: '67%'
  },
  card3: {
    description: 'Market value',
    title: '$120 bln'
  }
};

interface InnerCardProps {
  isSmallerCard?: boolean
}

export const WelcomeCards = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <Container>
      <Card>
        <InnerCard>
          <Text
            color={colors.text_primary_on_brand}
            fontWeight={400}
            label={texts.card1.title}
            lineHeight={isTablet ? 32 : 44}
            size={isTablet ? 1.5 : 2.25}
          />
          <Text
            color={colors.text_tertiary_600}
            fontFamily="Inter"
            fontWeight={500}
            label={texts.card1.description}
            lineHeight={isTablet ? 24 : 30}
            size={isTablet ? 1 : 1.25}
          />
          <MenuButton
            color={colors.button_tertiary_color_fg}
            label={texts.card1.buttonLabel}
            link={texts.card1.buttonLink}
            padding="0px"
          />
        </InnerCard>
        <CardImage src={isTablet ? mobileCards : laptopCards} alt="cards" />
      </Card>
      <CardsWrapper>
        <Card isSmallerCard style={{ position: 'relative' }}>
          <InnerCard isSmallerCard>
            <Text
              color={colors.text_primary_on_brand}
              fontWeight={400}
              label={texts.card2.title}
              lineHeight={isTablet ? 32 : 60}
              size={isTablet ? 1.5 : 3}
              textPlacing="center"
            />
            <Text
              color={colors.text_primary_on_brand}
              fontWeight={700}
              label={texts.card2.description}
              size={isTablet ? 0.875 : 1}
              textPlacing="center"
            />
          </InnerCard>
          <LineChart src={isTablet ? lineChart : lineChartDesktop} alt="line-chart" />
        </Card>
        <Card isSmallerCard>
          <InnerCard isSmallerCard>
            <Text
              color={colors.text_primary_on_brand}
              fontWeight={400}
              label={texts.card3.title}
              lineHeight={isTablet ? 32 : 60}
              size={isTablet ? 1.5 : 3}
              textPlacing="center"
            />
            <Text
              color={colors.text_primary_on_brand}
              fontWeight={700}
              label={texts.card3.description}
              size={isTablet ? 0.875 : 1}
              textPlacing="center"
            />
          </InnerCard>
        </Card>
      </CardsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 16px;

  @media (min-width: 1024px) {
    gap: 0px;
    grid-template-columns: 1fr 1fr;
    margin-top: 24px;
  }
`;

const Card = styled.div<{ isSmallerCard?: boolean }>`
  background-color: ${colors.utility_gray};
  border-radius: ${radius['4xl']};
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
  padding: ${({ isSmallerCard }) => (isSmallerCard ? '80px 30px' : '40px 16px')};
  position: relative;

  @media (min-width: 1024px) {
    align-items: center;
    margin-right: ${({ isSmallerCard }) => (isSmallerCard ? '0px' : '24px')};
    padding: ${({ isSmallerCard }) => (isSmallerCard ? '80px 30px' : '40px 32px')};
  }

  @media (min-width: 1440px) {
    justify-content: ${({ isSmallerCard }) => (isSmallerCard ? 'center' : 'flex-start')};
    padding: ${({ isSmallerCard }) => (isSmallerCard ? '80px 60px' : '40px 32px')};
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;

  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

const CardImage = styled.img`
  @media (min-width: 1024px) {
    position: absolute;
    width: 100%;
  }

  @media (min-width: 1440px) {
    position: absolute;
    right: 0;
    width: auto;
  }
`;

const InnerCard = styled.div<InnerCardProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ isSmallerCard }) => (isSmallerCard ? '9px' : '32px')};
  justify-content: center;
  z-index: 2;

  @media (min-width: 1440px) {
    width: ${({ isSmallerCard }) => (isSmallerCard ? '100%' : '50%')};
  }
`;

const LineChart = styled.img`
  bottom: 0;
  position: absolute;
  width: 100%;

  @media (min-width: 1024px) {
    height: 100%;
  }

  @media (min-width: 1440px) {
    left: 0;
  }
`;
