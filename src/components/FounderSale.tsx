import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { colors } from 'theme';

import { useMediaQuery } from 'react-responsive';
import { Header } from './Header';
import { Footer } from './sections/Footer';
import { Title } from './_common/Title';
import { Text } from './_common/Text';
import { Container } from './_common/Container';
import { Counter } from './founder-sale/Counter';
import { NFTButton } from './founder-sale/NFTButton';

import backgroundImage from '../assets/images/background-pattern.png';
import { NFTSlider } from './founder-sale/NFTSlider';
import { NFTInformations } from './founder-sale/NFTInformations';
import { maxWidth840 } from './rwd/detectMobile';

export const FounderSale = () => {
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
    <Container>
      <Header />
      <FounderContainer>
        <TitleContainer>
          <Title label="Fida Founder&apos;s NFT Collection Mint" />
          <Text style={{ width: isTablet ? '80%' : '60%', textAlign: 'center' }} size={isTablet ? 1.15 : 1.5} color={colors.textTertiary600} label="Mint a Founder&apos;s NFT to gain early adopter&apos;s access to the decentralized insurance marketplace." />
        </TitleContainer>
        <Counter value={value} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleChange={handleChange} />
        <NFTButton value={value} />
        <NFTSlider />
        <NFTInformations />
      </FounderContainer>
      <Footer />
    </Container>
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
  background-position: right 0 bottom 0;
  background-repeat: no-repeat;
  padding: 24px;
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  text-align: center;
`;
