import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';

import { Header } from '../components/Header';
import { Welcome } from '../components/sections/Welcome';
import { maxWidth640 } from '../components/rwd/detectMobile';
import { OurMission } from '../components/sections/OurMission';
import { ConquerRisk } from '../components/sections/ConquerRisk';
import { FidaMarketplace } from '../components/sections/FidaMarketplace';
import { SeamlessAI } from '../components/sections/SeamlessAI';
import { RoadMap } from '../components/sections/RoadMap';
import { JoinNetwork } from '../components/sections/JoinNetwork';
import { Footer } from '../components/sections/Footer';

export const Index = () => {
  const isTablet = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <div>
      <Header />
      <Container isTablet={isTablet}>
        <Welcome />
        <OurMission />
        <ConquerRisk />
        <FidaMarketplace />
      </Container>
      <SeamlessAI />
      <Container isTablet={isTablet}>
        <RoadMap />
        <JoinNetwork />
        <Footer />
      </Container>
    </div>
  );
};

const Container = styled.div<{ isTablet: boolean }>`
  margin: 0 auto;
  margin: ${({ isTablet }) => (isTablet ? '0 16px' : '0 48px')};
`;

export default Index;
