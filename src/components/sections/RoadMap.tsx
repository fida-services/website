import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { maxWidth840 } from 'components/rwd/detectMobile';
import { BaseTextWithDescription } from '../_common/BaseTextWithDescription';
import { Container } from '../_common/Container';

const texts = {
  title: 'The Roadmap',
  description: 'Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative.'
};

export const RoadMap = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });


  return (
    <Container>
      <BaseTextWithDescription description={texts.description} title={texts.title} />
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
