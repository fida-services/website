import React from 'react';

import { StickySection } from 'styledParts/StickySection';
import { TextSticky } from 'components/_common/TextSticky';

import laptop from 'assets/images/laptop.png';
import screen from 'assets/images/screen.png';
import phone from 'assets/images/phone.png';
import { StyledGradientBackground } from 'styledParts/StyledGradientBackground';
import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';

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
  <StyledGenericWrapper marginBottom={100}>
    <StickySection>
      <div>
        <img src={laptop} height="496" alt="laptop" />
      </div>
      <TextSticky textData={texts.setOne} />
    </StickySection>
    <StickySection>
      <div>
        <img src={phone} height="546" alt="phone" />
      </div>
      <TextSticky textData={texts.setTwo} />
    </StickySection>
    <StickySection>
      <div>
        <img src={screen} height="438" alt="screen" />
      </div>
      <TextSticky textData={texts.setThree} />
    </StickySection>
  </StyledGenericWrapper>
);
