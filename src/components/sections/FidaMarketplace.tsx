import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import gradientLaptopMobile from 'assets/images/gradient-laptop-mobile.png';
import gradientPhones from 'assets/images/gradient-mobile-phones.png';
import gradientLaptop from 'assets/images/gradient-laptop.png';
import { FidaMarketplaceCard } from 'components/FidaMarketplaceCard';
import { fidaMarketplaceTexts } from 'data/texts';
import { maxWidth840 } from 'components/rwd/detectMobile';
import { BaseTextWithDescription } from '../_common/BaseTextWithDescription';
import { Container } from '../_common/Container';

export const FidaMarketplace = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const fidaItems = [
    {
      description: "Fida is built from the ground up to be easy to use, understanding where you're coming from and what is available for you to do, eliminating unnecessary guess work.",
      imageSrc: isTablet ? gradientLaptopMobile : gradientLaptop,
      title: 'Intuitive User Experience',
    },
    {
      description: 'Investors can build diversified investment portfolios to increase capital efficiency and generate leverage as insurance companies do.',
      imageSrc: gradientPhones,
      isReversed: true,
      title: 'Increase efficiency',
    }
  ];

  return (
    <Container>
      <BaseTextWithDescription description={fidaMarketplaceTexts.description} title={fidaMarketplaceTexts.title} />
      <CardsWrapper>
        {fidaItems?.map(item => (
          <FidaMarketplaceCard key={item?.title} {...item} />
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
