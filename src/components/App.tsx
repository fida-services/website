import React from 'react';
import styled from 'styled-components';

import { Description } from './Description';
import { Footer } from './Footer';
import { Header } from './Header';
import { JoinCommunity } from './JoinCommunity';
import { KeepingSecure } from './KeepingSecure';
import { Partners } from './Partners';
import { SafetyInfo } from './SafetyInfo';
import { SecurityProtocol } from './SecurityProtocol';
import { SignUpBelow } from './SignUpBelow';
import { Slider } from './slider/Slider';
import { StickyOverlappingSections } from './StickyOverlappingSections';
import { WelcomeDiv } from './WelcomeDiv';

const App = () => {
  const a = 1;
  return (
    <MainWrapper>
      <Header />
      <WelcomeDiv />
      <Description />
      <StickyOverlappingSections />
      <JoinCommunity />
      <SignUpBelow />
      <Slider />
      <KeepingSecure />
      <SafetyInfo />
      <SecurityProtocol />
      <Partners />
      <Footer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: #141414;
  color: white;
`;

export default App;
