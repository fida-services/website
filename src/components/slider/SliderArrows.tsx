import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import arrowCircle from 'assets/icons/arrowCircle.svg';
import { colors } from 'theme';

type ArrowClickType = 'ahead' | 'back';
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
  sliderData: SliderDataType[];
  currentSlide: CurrentSlideType;
  setCurrentSlide: Dispatch<SetStateAction<CurrentSlideType>>
}

export const SliderArrows = (props: Props) => {
  const { sliderData, currentSlide: { index }, setCurrentSlide } = props;
  const isTheSlideLast = sliderData.length - 1 === index;
  const isTheSlideFirst = index === 0;

  const arrowClick = (direction: ArrowClickType) => {
    if (direction === 'ahead' && !isTheSlideLast) {
      setCurrentSlide({ data: sliderData[index + 1], index: index + 1 });
    }
    if (direction === 'back' && !isTheSlideFirst) {
      setCurrentSlide({ data: sliderData[index - 1], index: index - 1 });
    }
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={() => arrowClick('ahead')} disabled={isTheSlideLast} className="mb-2">
        <img style={{ fill: isTheSlideLast ? colors.lowOpaGrey : colors.white }} src={arrowCircle} alt="arrow pointing right" />
      </StyledButton>
      <StyledFlippedButton onClick={() => arrowClick('back')} disabled={isTheSlideFirst}>
        <img style={{ fill: isTheSlideFirst ? colors.lowOpaGrey : colors.white }} src={arrowCircle} alt="arrow pointing right" />
      </StyledFlippedButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 75px;
`;

const StyledButton = styled.button`
  background-color: ${colors.mainBlack};
  cursor: pointer;
  border-radius: 25px;
  border: none
`;

const StyledFlippedButton = styled.button`
  background-color: ${colors.mainBlack};
  cursor: pointer;
  transform: rotate(180deg);
  border-radius: 25px;
  border: none
`;
