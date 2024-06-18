import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import seemlessAIMobile from 'assets/images/seemless-AI-mobile.svg';
import seemlessAIDesktop from 'assets/images/seemless-AI-desktop.svg';
import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { Title } from 'components/_common/Title';
import { maxWidth840 } from '../rwd/detectMobile';

const texts = {
  title: 'Seemless AI',
  description: "Behind the scenes we bring immutable verified AI training data on-chain. Transparent confirmation of Risk prediction. risk diversification score that powers protocol stability. AI assistant on Fida Card trades. Fida is built on Ai and blockchain, but you wouldn't notice. It just works."
};

export const SeemlessAI = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <Container>
      {isTablet && <ImageWrapper src={seemlessAIMobile} alt="seemless-AI" />}
      <TopSection>
        <Title label={texts.title} />
        <Text
          color={colors.textTertiary600}
          fontFamily="Inter"
          fontWeight={500}
          label={texts.description}
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
    background-image: url(${seemlessAIDesktop});
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
