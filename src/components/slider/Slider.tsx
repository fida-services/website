import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledGenericWrapper } from 'styledParts/StyledGenericWrapper';
import { Text } from 'components/_common/Text';

import { colors } from 'theme';

import sliderData from './sliderData.json';
import { Slide } from './Slide';
import { PhoneRadiantBackground } from './PhoneRadiantBackground';
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
  return (
    <StyledGenericWrapper marginBottom={155}>
      <div>
        <Text size={80} label={text.title.titleOne} toUpperCase fontWeight={700} />
        <Text size={80} label={text.title.titleTwo} color={colors.textGradient} toUpperCase fontWeight={700} linearGradient />
      </div>

      <SliderWrapper>
        <SliderMenuWrapper>
          {sliderData.map((slide, index) => <Slide key={slide.id} slideData={slide} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} index={index} />)}
        </SliderMenuWrapper>

        <PhoneRadiantBackground />

        <SliderText currentSlideData={currentSlide.data} />

        <SliderArrows sliderData={sliderData} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      </SliderWrapper>
    </StyledGenericWrapper>
  );
};

const SliderWrapper = styled.div`
    margin-top: 100px;
    display: flex;
`;

const SliderMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
`;
