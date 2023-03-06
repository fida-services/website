import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { Text } from 'components/_common/Text';

import { colors } from 'theme';

import { maxWidth960 } from 'components/rwd/detectMobile';

import photo0 from 'assets/images/slider/photo0.svg';
import photo1 from 'assets/images/slider/photo1.svg';
import photo2 from 'assets/images/slider/photo2.svg';
import photo3 from 'assets/images/slider/photo3.svg';
import photo4 from 'assets/images/slider/photo4.svg';
import photo5 from 'assets/images/slider/photo5.svg';
import photo6 from 'assets/images/slider/photo6.svg';
import photo7 from 'assets/images/slider/photo7.svg';

import MobileSlider from 'components/rwd/MobileSlider';
import sliderData from './sliderData.json';
import { Slide } from './Slide';
import { SliderText } from './SliderText';
import { SliderArrows } from './SliderArrows';

const text = {
  title: {
    titleOne: 'how it ',
    titleTwo: 'works'
  }
};

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState({ data: sliderData[0], index: 0 });

  const isTablet = useMediaQuery({
    query: maxWidth960,
  });

  const pickMobileSliderPhoto = (index: number) => {
    switch (index) {
      case 0:
        return photo0;
      case 1:
        return photo1;
      case 2:
        return photo2;
      case 3:
        return photo3;
      case 4:
        return photo0;
      case 5:
        return photo1;
      case 6:
        return photo2;
      case 7:
        return photo3;
      case 8:
        return photo1;
      default:
        return photo0;
    }
  };

  return (
    <Container marginBottom={0} marginTop={110}>
      {isTablet ? (
        <>
          <MobileTextWrapper>
            <Text size={3} label={text.title.titleOne} toUpperCase fontWeight={700} noTextWrap />
            <Text size={3} label={text.title.titleTwo} color={colors.textGradient} toUpperCase fontWeight={700} linearGradient />
          </MobileTextWrapper>
          <MobileSlider />
        </>
      ) : (
        <>
          <TextWrapper>
            <Text size={5} label={text.title.titleOne} toUpperCase fontWeight={700} />
            <Text size={5} label={text.title.titleTwo} color={colors.textGradient} toUpperCase fontWeight={700} linearGradient />
          </TextWrapper>
          <SliderWrapper>
            <SliderMenuWrapper>
              {sliderData.map((slide, index) => <Slide key={slide.id} slideData={slide} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} index={index} />)}
            </SliderMenuWrapper>
            <img src={pickMobileSliderPhoto(currentSlide.index)} alt="phone with applications" />
            <SliderText currentSlideData={currentSlide.data} />
            <SliderArrows sliderData={sliderData} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
          </SliderWrapper>
        </>
      )}
    </Container>
  );
};

const Container = styled(StyledGenericWrapper)`
  @media (max-width: 840px) {
    padding: 0 20px;
  }`;

const MobileTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;

  @media (max-width: 411px) {
    flex-direction: column;
    gap: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 27px;
`;

const SliderWrapper = styled.div`
  margin-top: 100px;
  display: flex;
`;

const SliderMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
`;
