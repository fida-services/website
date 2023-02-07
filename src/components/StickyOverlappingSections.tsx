import React from 'react';

import { StickySection } from 'styledParts/StickySection';
import { TextSticky } from 'components/_common/TextSticky';

import laptop from 'assets/images/laptop.png';
import screen from 'assets/images/screen.png';
import phone from 'assets/images/phone.png';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { isMobile } from './rwd/detectMobile';

const texts = {
  setOne: {
    highlightIndex: 1,
    titleTexts: ['Great ', 'investment', ' opportunities decorrelated from capital markets.']
  },
  setTwo: {
    highlightIndex: 1,
    titleTexts: ['Fully regulated specialist ', 'insurance', ' companies underwrite, price the risk and take a lead investment line;'],
    descriptionText: 'these deals are then listed on the marketplace so participants get the exact same premium as top insurance companies with decades of experience.'
  },
  setThree: {
    highlightIndex: 0,
    titleTexts: ['Investors', ' can build diversified investment portfolios to increase capital efficiency and generate leverage as insurance companies do.']
  }

};

export const StickyOverlappingSections = () => (
  <StyledGenericWrapper marginBottom={150} marginTop={110}>
    <StickySection>
      <div className="py-5 px-2">
        <img src={laptop} style={{ width: isMobile ? '85%' : '558px' }} alt="laptop" />
      </div>
      <TextSticky textData={texts.setOne} />
    </StickySection>
    <StickySection>
      <div className="px-2">
        <img src={phone} style={{ width: isMobile ? '75%' : '369' }} alt="phone" />
      </div>
      <TextSticky textData={texts.setTwo} />
    </StickySection>
    <StickySection>
      <div className="px-2">
        <img src={screen} style={{ width: isMobile ? '85%' : '464' }} alt="screen" />
      </div>
      <TextSticky textData={texts.setThree} />
    </StickySection>
  </StyledGenericWrapper>
);
