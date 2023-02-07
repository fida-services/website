import React from 'react';
import styled from 'styled-components';

import { Welcome } from './Welcome';
import { Description } from './Description';
import { StickyOverlappingSections } from './StickyOverlappingSections';
import { JoinNetwork } from './JoinNetwork';
import { SignUpBelow } from './SignUpBelow';
import { Slider } from './slider/Slider';
import { KeepingSecure } from './KeepingSecure';
import { SafetyInfo } from './SafetyInfo';
import { SecurityProtocol } from './SecurityProtocol';
import { Footer } from './Footer';

const App = () => (
  <MainWrapper>
    <Welcome />
    <Description />
    <StickyOverlappingSections />
    <JoinNetwork />
    <SignUpBelow />
    <Slider />
    <KeepingSecure />
    <SafetyInfo />
    <SecurityProtocol />
    <Footer />
  </MainWrapper>
);

const MainWrapper = styled.div`
  color: white;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 840px) {
    overflow-x: hidden; 
  }
`;

export default App;
