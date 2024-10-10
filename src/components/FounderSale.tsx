import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from 'theme';

import { useMediaQuery } from 'react-responsive';
import { Header } from './Header';
import { Footer } from './sections/Footer';
import { Text } from './_common/Text';
import { Container } from './_common/Container';
import { Counter } from './founder-sale/Counter';
import { NFTButton } from './founder-sale/NFTButton';

import backgroundImage from '../assets/images/background-pattern.png';
import { NFTSlider } from './founder-sale/NFTSlider';
import { NFTDetails } from './founder-sale/NFTDetails';
import { maxWidth840 } from './rwd/detectMobile';
import { FounderModal } from './founder-sale/modal/FounderModal';

export const FounderSale = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  useEffect(() => { setTimeout(() => setIsFounderModalOpen(true), 5000); }, []);

  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const [value, setValue] = useState<number>(1);

  const handleIncrement = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= 1 && newValue <= 5) {
      setValue(newValue);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <FounderContainer>
          <TitleContainer>
            <Title>{'Fida Founder\'s NFT Collection Mint'.toUpperCase()}</Title>
            <Text style={{ width: isTablet ? '100%' : '60%', textAlign: 'center' }} size={isTablet ? 1.15 : 1.5} color={colors.textTertiary600} label="Mint a Founder&apos;s NFT to gain early adopter&apos;s access to the decentralized insurance marketplace." />
          </TitleContainer>
          <Counter value={value} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleChange={handleChange} />
          <NFTButton value={value} />
          <NFTSlider />
          <NFTDetails />
        </FounderContainer>
        <Footer />
      </Container>
      {/* <FounderModal isOpen={isFounderModalOpen} handleClose={() => setIsFounderModalOpen(false)}>
        <div>dupa</div>
      </FounderModal> */}
      <FounderModal isOpen={isFounderModalOpen} handleClose={() => setIsFounderModalOpen(false)} />
    </>
  );
};

export default FounderSale;

const FounderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  position: relative;
  background-image: url("${backgroundImage}");
  background-size: 100%;
  background-position: right 0 bottom 50%;
  background-repeat: no-repeat;
  padding: 24px 0;

  @media (max-width: 840px) {
        padding: 0;
        gap: 24px;
    }
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  text-align: center;
  padding: 0;

  @media (max-width: 840px) {
        padding: 0 12px;
        gap: 24px;
    }
`;

const Title = styled.p`
color: ${colors.textPrimaryOnBrand};
font-size: 2rem;
font-weight: 400;
line-height: 44px;

white-space: pre-line;

transition: 0.5s;

@media (min-width: 1024px) {
  line-height: 90px;
  font-size: 4.5rem;
}
`;
