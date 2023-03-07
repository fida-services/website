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

import '../index.css';

const LandingPage = () => {
  return (
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
  );
};

export default LandingPage;
