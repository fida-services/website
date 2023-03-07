import React from 'react';
import styled from 'styled-components';
import { ScrollContainer } from 'react-scroll-motion';

import { Welcome } from './Welcome';
import { Description } from './Description';
import { StickyOverlappingSections } from './StickyOverlappingSections';
import { JoinNetwork } from './JoinNetwork';
import { SignUpBelow } from './SignUpBelow';
import { Slider } from './slider/Slider';
import { KeepingSecure } from './KeepingSecure';
import { SafetyInfo } from './SafetyInfo';
import { Security } from './Security';
import { Footer } from './Footer';
import { Partners } from './Partners';

const App = () => (
  <ViewportWrapper>
    <MainWrapper>
      <ScrollContainer>
        <Welcome />
        <Description />
        <StickyOverlappingSections isLaptop />
        <StickyOverlappingSections isPhone />
        <StickyOverlappingSections isScreen isLast />
        <JoinNetwork />
        <SignUpBelow />
        <Slider />
        <KeepingSecure />
        <SafetyInfo />
        {/* <Security /> */}
        {/* <Partners /> */}
        <Footer />
      </ScrollContainer>
    </MainWrapper>
  </ViewportWrapper>
);

const ViewportWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MainWrapper = styled.div`
  color: white;
  max-width: 1440px;
  margin: 0 auto;
`;

export default App;
