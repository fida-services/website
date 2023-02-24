// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

import appPhone from 'assets/images/sliderPic.svg';
import sliderData from 'components/slider/sliderData.json';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Text } from 'components/_common/Text';

const MobileSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={sliderData.length}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {sliderData.map(({ title }) => (
          <SwiperSlide key={title}>
            <PaginationWrapper>
              <PaginationBullet />
            </PaginationWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={1}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {sliderData.map(({ title, description }) => (
          <SwiperSlide key={title}>
            <StyledWrapper>
              <ImageWrapper>
                <img height="300" src={appPhone} alt="phone with applications" />
              </ImageWrapper>
              <div className="flex flex-column gap-3">
                <Text label={title} size={2} />
                <Text label={description} size={1} fontWeight={400} />
              </div>
            </StyledWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MobileSlider;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20px;
  width: 100%;
  z-index: -2
  transition: 0.5s;
  cursor: pointer;

    &:hover {
    opacity: 0.7;
    }
`;

const PaginationBullet = styled.div`
  height: 5px;
  border-radius: 3px;
  background-color: gray;
  width: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 35px 40px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
