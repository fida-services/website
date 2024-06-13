import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import arrowPointer from 'assets/icons/arrow-pointer.svg';
import opportunities from 'assets/images/opportunities.svg';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { maxWidth840 } from './rwd/detectMobile';

const texts = {
  title: 'Divide and <rose>conquer risk!</rose>',
  description: 'Our revolutionary protocol offers unique benefits:',
  points: ['Proof of Reserves', 'Liquid Assets (ILS NFTs)', 'Capital Efficiency']
};

export const ConquerRisk = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <StyledConquerRisk>
      <TopSection>
        <Text
          color={colors.text_primary_on_brand}
          fontWeight={400}
          label={texts.title}
          size={isTablet ? 1.875 : 4.5}
          isRoseText
          lineHeight={isTablet ? 38 : 90}
          toUpperCase
        />
        <Text
          color={colors.text_tertiary_600}
          fontFamily="Inter"
          fontWeight={500}
          label={texts.description}
          lineHeight={isTablet ? 20 : 32}
          size={isTablet ? 0.875 : 1.5}
        />
        {texts?.points?.map(item => (
          <PointerWrapper>
            <ArrowPointer src={arrowPointer} alt="arrow-pointer" />
            <Text
              color={colors.text_tertiary_600}
              fontFamily="Inter"
              fontWeight={500}
              label={item}
              lineHeight={isTablet ? 20 : 32}
              size={isTablet ? 0.875 : 1.5}
            />
          </PointerWrapper>
        ))}
      </TopSection>
      <ImageWrapper src={opportunities} alt="opportunities" />
    </StyledConquerRisk>
  );
};

const StyledConquerRisk = styled.div`
  display: grid;
  margin-bottom: 16px;
  
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
