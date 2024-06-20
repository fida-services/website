import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';

import { Header } from './Header';
import { Welcome } from './sections/Welcome';
import { maxWidth640 } from './rwd/detectMobile';
import { OurMission } from './sections/OurMission';
import { ConquerRisk } from './sections/ConquerRisk';
import { FidaMarketplace } from './sections/FidaMarketplace';
import { SeemlessAI } from './sections/SeemlessAI';
import { RoadMap } from './sections/RoadMap';
import { JoinNetwork } from './sections/JoinNetwork';
import { Footer } from './sections/Footer';

const App = () => {
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
      <SeemlessAI />
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

export default App;
