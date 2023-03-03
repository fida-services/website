/* eslint-disable no-nested-ternary */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Animator, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky } from 'react-scroll-motion';

import { StickySection } from 'styledParts/StickySection';
import { TextSticky } from 'components/_common/TextSticky';

import laptop from 'assets/images/laptop.svg';
import screen from 'assets/images/screen.svg';
import phone from 'assets/images/phone.svg';

import { maxWidth1140, maxHeight700, maxHeight750, maxHeight800, maxHeight850, maxHeight900 } from './rwd/detectMobile';

const texts = {
  setOne: {
    highlightIndex: 1,
    titleTexts: ['Great ', 'investment', ' opportunities decorrelated from capital markets.']
  },
  setTwo: {
    highlightIndex: 1,
    titleTexts: ['Fully regulated specialist ', 'insurance', ' companies underwrite, price the risk and take a lead investment line.'],
    // descriptionText: 'These deals are then listed on the marketplace so participants get the exact same premium as top insurance companies with decades of experience.'
  },
  setThree: {
    highlightIndex: 0,
    titleTexts: ['Investors', ' can build diversified investment portfolios to increase capital efficiency and generate leverage as insurance companies do.']
  }
};

interface Props {
  isLast?: boolean;
  isLaptop?: boolean;
  isPhone?: boolean;
  isScreen?: boolean;
}

export const StickyOverlappingSections = ({ isLast, isLaptop, isPhone, isScreen }: Props) => {
  const isTablet = useMediaQuery({
    query: maxWidth1140,
  });

  const isMaxHeight900 = useMediaQuery({
    query: maxHeight900,
  });

  const isMaxHeight850 = useMediaQuery({
    query: maxHeight850,
  });

  const isMaxHeight800 = useMediaQuery({
    query: maxHeight800,
  });

  const isMaxHeight750 = useMediaQuery({
    query: maxHeight750,
  });

  const isMaxHeight700 = useMediaQuery({
    query: maxHeight700,
  });

  const CustomZoom = () => ({
    in: {
      style: {
        transform: p => `scale(calc(0.95 + 0.05 * ${p}))`,
      },
    },
  } as Animation);

  const moveInAnimationValue = isMaxHeight750 ? 700 : isMaxHeight800 ? 630 : isMaxHeight850 ? 520 : isMaxHeight900 ? 430 : 250;

  return (
    <Wrapper>
      {!isTablet && !isMaxHeight700
        ? (
          <ScrollPage>
            <Animator animation={!isLast ? batch(CustomZoom(), Fade(), MoveIn(0, moveInAnimationValue), Sticky(50, 50), MoveOut(0, -100),) : batch(CustomZoom(), Fade(), MoveIn(0, 1000), Sticky(50, 50), MoveOut(0, -300))} style={{ width: '80vw', transformOrigin: '0% 0%' }}>
              <StickySection>
                <ImageWrapper>
                  {isLaptop && <img src={laptop} style={{ width: '100%' }} alt="laptop" />}
                  {isPhone && <img src={phone} style={{ width: '100%' }} alt="phone" />}
                  {isScreen && <img src={screen} style={{ width: '100%' }} alt="screen" />}
                </ImageWrapper>
                {isLaptop && <TextSticky textData={texts.setOne} />}
                {isPhone && <TextSticky textData={texts.setTwo} />}
                {isScreen && <TextSticky textData={texts.setThree} />}
              </StickySection>
            </Animator>
          </ScrollPage>
        )
        : (
          <StickySection>
            {isLaptop && <img src={laptop} style={{ width: '60%' }} alt="laptop" />}
            {isPhone && <img src={phone} style={{ width: '40%', margin: '-30px 0' }} alt="phone" />}
            {isScreen && <img src={screen} style={{ width: '50%' }} alt="screen" />}
            {isLaptop && <TextSticky textData={texts.setOne} />}
            {isPhone && <TextSticky textData={texts.setTwo} />}
            {isScreen && <TextSticky textData={texts.setThree} />}
          </StickySection>
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1470px;

  @media (max-width: 1140px) {
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 50px;
    }

`;

const ImageWrapper = styled.div`
    padding: 0 8px;

    @media (max-width: 840px) {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 10px;
  }
`;
