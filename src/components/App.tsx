import React from 'react';
import styled from 'styled-components';

import { Welcome } from './Welcome';
import { Description } from './Description';
import { StickyOverlappingSections } from './StickyOverlappingSections';
import { JoinCommunity } from './JoinCommunity';
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
    <JoinCommunity />
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
`;

export default App;
