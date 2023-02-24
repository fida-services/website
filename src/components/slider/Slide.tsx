import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { Text } from 'components/_common/Text';

import vector from 'assets/icons/vector.png';
import { colors } from 'theme';

interface SliderDataType {
  id: number;
  title: string;
  description: string;
}

interface CurrentSlideType {
  data: SliderDataType;
  index: number
}

interface Props {
  slideData: SliderDataType;
  currentSlide: CurrentSlideType;
  setCurrentSlide: Dispatch<SetStateAction<CurrentSlideType>>
  index: number;
}

export const Slide = (props: Props) => {
  const { slideData, currentSlide, setCurrentSlide, index } = props;
  const isCurrent = currentSlide.index === index;
  return (
    <SlideWrapper>

      {isCurrent && (
      <ImageWrapper>
        <img className="mr-2" src={vector} alt="vector" />
      </ImageWrapper>
      )}

      <StyledButton type="button" onClick={() => setCurrentSlide({ data: slideData, index })}>
        <Text size={1} label={slideData.title} color={isCurrent ? colors.white : colors.grey} fontWeight={700} hoverTransition />
      </StyledButton>
    </SlideWrapper>
  );
};

const SlideWrapper = styled.div`
  display: flex;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  transform: translate(-115%, 35%);
`;

const StyledButton = styled.button`
  background-color: ${colors.mainBlack};
  cursor: pointer;
  padding: 8px 5px;
  max-width: 180px;
  text-align: left;
  border: none
`;
