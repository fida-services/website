// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';

import styled from 'styled-components';
import sliderData from 'components/slider/sliderData.json';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

import { SwiperItem } from './SwiperItem';

export const MobileSwiper = () => (
  <StyledWrapper>
    <swiper-container class="my-thumbs" spaceBetween="10" slides-per-view="1.5">
      {sliderData.map(({ title }) => (
        <ThumbTitle class="thumb-slide" slides thumbsContainerClass key={title}>
          <div className="thumb-wrapper">
            <span>{title}</span>
          </div>
        </ThumbTitle>
      ))}

    </swiper-container>
    <swiper-container
      thumbs-swiper=".my-thumbs"
    >
      {sliderData.map(({ title, description }) => (
        <SwiperItem title={title} key={title} description={description} />
      ))}
    </swiper-container>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
const ThumbTitle = styled('swiper-slide')`
`;
