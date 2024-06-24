import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import gradientLaptopMobile from 'assets/images/gradient-laptop-mobile.png';
import gradientPhones from 'assets/images/gradient-mobile-phones.png';
import gradientLaptop from 'assets/images/gradient-laptop.png';
import { FidaMarketplaceCard } from 'components/FidaMarketplaceCard';
import { maxWidth840 } from 'components/rwd/detectMobile';
import { BaseTextWithDescription } from '../_common/BaseTextWithDescription';
import { Container } from '../_common/Container';

const texts = {
  title: 'The Fida Marketplace',
  description: 'Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative.'
};

export const FidaMarketplace = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const fidaItems = [
    {
      description: 'Investors can build diversified investment portfolios to increase capital efficiency and generate leverage as insurance companies do.',
      imageSrc: isTablet ? gradientLaptopMobile : gradientLaptop,
      title: 'Increase efficiency',
    },
    {
      description: 'Investors can build diversified investment portfolios to increase capital efficiency and generate leverage as insurance companies do.',
      imageSrc: gradientPhones,
      isReversed: true,
      title: 'Increase efficiency',
    }
  ];

  return (
    <Container id="marketplace">
      <BaseTextWithDescription description={texts.description} title={texts.title} />
      <CardsWrapper>
        {fidaItems?.map(item => (
          <FidaMarketplaceCard {...item} />
        ))}
      </CardsWrapper>
    </Container>
  );
};

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  @media (min-width: 1024px) {
    gap: 0px;
  }
`;
