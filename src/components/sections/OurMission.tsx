/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { missionCards, ourMissionTexts } from 'data/texts';
import { Slider } from 'components/slider/Slider';
import { maxWidth1440, maxWidth840 } from '../rwd/detectMobile';
import { MissionCard } from '../MissionCard';
import { BaseTextWithDescription } from '../_common/BaseTextWithDescription';
import { Container } from '../_common/Container';

export const OurMission = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const isDesktop = useMediaQuery({
    query: maxWidth1440,
  });

  return (
    <Container>
      <BaseTextWithDescription description={ourMissionTexts.description} title={ourMissionTexts.title} />
      <BottomSection>
        {ourMissionTexts?.values?.map(item => (
          <TextWrapper key={item?.label}>
            <Text
              color={colors.textPrimaryOnBrand}
              fontWeight={isTablet ? 700 : 400}
              label={item?.value}
              size={isTablet ? 1.25 : isDesktop ? 2.2 : 3}
              textPlacing="center"
            />
            <Text
              color={colors.textTertiary600}
              fontWeight={700}
              label={item?.label}
              size={isTablet ? 0.75 : 1.125}
              textPlacing="center"
            />
          </TextWrapper>
        ))}
      </BottomSection>
      <CardsWrapper>
        {missionCards?.map(item => (
          <MissionCard key={item?.title} {...item} />
        ))}
      </CardsWrapper>
      <Slider />
    </Container>
  );
};

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    gap: 0px;
  }
`;

const BottomSection = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr;
  margin-top: 16px;
  padding: 48px 0px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1440px) {
    gap: 64px;
    padding: 100px 80px;
  }
`;

const TextWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
