import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import fidaMacbook from 'assets/images/macbook.svg';
import fidaMacbookDesktop from 'assets/images/macbook-desktop.svg';
import { colors, radius } from 'theme';
import { maxWidth840, maxWidth640, minWidth1024 } from './rwd/detectMobile';
import { Text } from './_common/Text';
import { MenuButton } from './MenuButton';

const text = {
  titleOne: 'Fida Marketplace',
  titleTwo: 'Some text',
};

const button = {
  label: 'Launch',
  link: 'https://fida.finance/'
};

export const FidaMarketPlaceCard = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  const isDesktop = useMediaQuery({
    query: minWidth1024,
  });

  return (
    <Wrapper>
      <ContentWrapper>
        <TopWrapper>
          <TextWrapper>
            <Text fontFamily="Inter" size={isTablet ? 1.5 : 2.25} label={text.titleOne} fontWeight={500} color={colors.text_primary_on_brand} />
            <Text fontFamily="Inter" size={isTablet ? 1 : 1.25} label={text.titleTwo} fontWeight={500} color={colors.text_secondary_hover} />
          </TextWrapper>
          <MenuButton label={button.label} link={button.link} border padding={isTablet ? '8px 14px' : '16px 22px'} />
        </TopWrapper>
        <ImageWrapper>
          <Laptop src={isDesktop ? fidaMacbookDesktop : fidaMacbook} alt="marketplace" isMobile={isMobile} />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>

  );
};

const Wrapper = styled.div`
  background: ${colors.backgroundGradient};
  border-radius: ${radius['4xl']};
  display: flex;
  flex-direction: column;
  margin-top: 56px;

  @media (min-width: 1024px) {
    align-items: center;
    margin-top: 0px;
    flex-direction: row;
    overflow: hidden;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    align-items: end;
    flex-direction: row;
    padding: 32px 0px;
  }
`;

const Laptop = styled.img<{ isMobile: boolean }>`
  width: 100%;
  margin-top: ${({ isMobile }) => (isMobile ? '-40px' : '-100px')};

  @media (min-width: 1024px) {
    margin-top: 0px;
  }
`;

const ImageWrapper = styled.div`
  display: contents;
`;

const TopWrapper = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px 0px 16px;

  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding: 0px 0px 0px 24px;
    margin-bottom: 10px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1024px) {
    gap: 24px;
    margin-bottom: 50px;
  }
`;
