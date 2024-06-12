import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { missionItems } from 'data/missionItems';
import { maxWidth840 } from './rwd/detectMobile';
import { MissionCard } from './MissionCard';

const texts = {
  title: 'Our Mission',
  description: 'Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative.',
  values: [
    { value: '$ 120 bln', label: 'Market value' },
    { value: '$ 120 bln', label: 'Market value' },
    { value: '$ 120 bln', label: 'Market value' },
    { value: '$ 120 bln', label: 'Market value' }
  ]
};

export const OurMission = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <StyledOurMission>
      <TopSection>
        <Text
          color={colors.text_primary_on_brand}
          fontWeight={700}
          label={texts.title}
          size={isTablet ? 1.25 : 2.25}
          lineHeight={isTablet ? 30 : 44}
        />
        <Text
          color={colors.text_tertiary_600}
          fontFamily="Inter"
          fontWeight={500}
          label={texts.description}
          lineHeight={isTablet ? 24 : 30}
          size={isTablet ? 1 : 1.25}
          textPlacing="center"
        />
      </TopSection>
      <BottomSection>
        {texts?.values?.map(item => (
          <TextWrapper>
            <Text
              color={colors.text_primary_on_brand}
              fontWeight={isTablet ? 700 : 400}
              label={item?.value}
              size={isTablet ? 1.25 : 3}
            />
            <Text
              color={colors.text_tertiary_600}
              fontWeight={700}
              label={item?.label}
              size={isTablet ? 0.75 : 1.125}
            />
          </TextWrapper>
        ))}
      </BottomSection>
      <CardsWrapper>
        {missionItems?.map(item => (
          <MissionCard {...item} />
        ))}
      </CardsWrapper>
    </StyledOurMission>
  );
};

const StyledOurMission = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;

  @media (min-width: 1024px) {
    margin: 24px 0px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    gap: 0px;
  }
`;

const TopSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 48px 16px;
  padding: 48px 16px;

  @media (min-width: 1024px) {
    padding: 120px 220px;
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
