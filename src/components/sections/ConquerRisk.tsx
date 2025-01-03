import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import arrowPointer from 'assets/icons/arrow-pointer.svg';
import opportunities from 'assets/images/opportunities.svg';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { BaseTextWithDescription } from 'components/_common/BaseTextWithDescription';
import { conquerRiskTexts, howItWorks } from 'data/texts';
import { maxWidth840 } from '../rwd/detectMobile';

const ConquerRisk = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <>
      <BaseTextWithDescription
        description={howItWorks.description}
        id="howItWorks"
        title={howItWorks.title}
        link={howItWorks.link}
      />
      <StyledConquerRisk id="marketplace">
        <TopSection>
          <Text
            color={colors.textPrimaryOnBrand}
            fontWeight={400}
            label={conquerRiskTexts.title}
            size={isTablet ? 1.875 : 4.5}
            isRoseText
            lineHeight={isTablet ? 38 : 90}
            toUpperCase
          />
          <Text
            color={colors.textTertiary600}
            fontFamily="Inter"
            fontWeight={500}
            label={conquerRiskTexts.description}
            lineHeight={isTablet ? 20 : 32}
            size={isTablet ? 0.875 : 1.5}
          />
          {conquerRiskTexts?.points?.map(item => (
            <PointerWrapper key={item}>
              <ArrowPointer src={arrowPointer} alt="arrow-pointer" loading="lazy" />
              <Text
                color={colors.textTertiary600}
                fontFamily="Inter"
                fontWeight={500}
                label={item}
                lineHeight={isTablet ? 20 : 32}
                size={isTablet ? 0.875 : 1.5}
              />
            </PointerWrapper>
          ))}
        </TopSection>
        <ImageWrapper src={opportunities} alt="opportunities" loading="lazy" />
      </StyledConquerRisk>
    </>
  );
};

export default ConquerRisk;

const StyledConquerRisk = styled.div`
  display: grid;
  margin-bottom: 16px;
  padding: 48px 0px;
  
  @media (min-width: 1024px) {
    align-items: center;
    grid-template-columns: 50% 50%;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 40% 60%;
  }
`;

const ImageWrapper = styled.img`
  width: 100%;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 56px 0px;

  @media (min-width: 1024px) {
    margin-right: 24px;
  }
`;

const ArrowPointer = styled.img`
  height: 14px;
  width: 14px;
`;

const PointerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
