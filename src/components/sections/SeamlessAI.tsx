import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import seamlessAIMobile from 'assets/images/seamless-AI-mobile.svg';
import seamlessAIDesktop from 'assets/images/seamless-AI-desktop.svg';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { Title } from 'components/_common/Title';
import { seamlessAITexts } from 'data/texts';
import { maxWidth840 } from '../rwd/detectMobile';

export const SeamlessAI = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <Container>
      {isTablet && <ImageWrapper src={seamlessAIMobile} alt="seamless-AI" />}
      <TopSection>
        <Title label={seamlessAITexts.title} />
        <Text
          color={colors.textTertiary600}
          fontFamily="Inter"
          fontWeight={500}
          label={seamlessAITexts.description}
          lineHeight={isTablet ? 20 : 32}
          size={isTablet ? 0.875 : 1.5}
        />
      </TopSection>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: grid;
  margin-bottom: 16px;
  overflow: hidden;
  position: relative;
  
  @media (min-width: 1024px) {
    background-image: url(${seamlessAIDesktop});
    background-position: center;
    background-repeat: no-repeat;
    grid-template-columns: 50% 50%;
    height: 1375px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 40% 60%;
  }
`;

const ImageWrapper = styled.img`
  scale: 1.8;
  transform: translate(2%, 25%);
  width: 100%;
  z-index: -1;

  @media (min-width: 425px) {
    scale: 1.5;
    transform: translate(0%, 20%);
  }

  @media (min-width: 768px) {
    scale: 1;
    transform: translate(0%, 0%);
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: 16px;
  padding-top: 55px;

  @media (min-width: 768px) {
    padding-top: 0px;
  }

  @media (min-width: 1024px) {
    margin-left: 48px;
  }
`;
