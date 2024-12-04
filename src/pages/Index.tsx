import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import 'swiper/css';

import { Header } from '../components/Header';

// Lazy-loaded sections
const Welcome = lazy(() => import('../components/sections/Welcome'));
const OurMission = lazy(() => import('../components/sections/OurMission'));
const RoadMap = lazy(() => import('../components/sections/RoadMap'));
const JoinNetwork = lazy(() => import('../components/sections/JoinNetwork'));
const Footer = lazy(() => import('../components/sections/Footer'));
const ConquerRisk = lazy(() => import('../components/sections/ConquerRisk'));
const FidaMarketplace = lazy(() => import('../components/sections/FidaMarketplace'));
const SeamlessAI = lazy(() => import('../components/sections/SeamlessAI'));

export const Index = () => (
  <div>
    <Header />
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Welcome />
        <OurMission />
        <ConquerRisk />
        <FidaMarketplace />
      </Suspense>
    </Container>
    <Suspense fallback={<div>Loading...</div>}>
      <SeamlessAI />
    </Suspense>
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <RoadMap />
        <JoinNetwork />
        <Footer />
      </Suspense>
    </Container>
  </div>
);

const Container = styled.div`
  margin: 0 auto;

  @media (max-width: 640px) {
    margin: 0 16px;
  }

  @media (min-width: 641px) {
    margin: 0 48px;
  }
`;

export default Index;
