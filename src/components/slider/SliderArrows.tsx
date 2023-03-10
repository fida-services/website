import React, { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'theme';
import { ReactComponent as RightArrorCircle } from 'assets/icons/arrowCircle2.svg';

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
      <StyledButton onClick={() => arrowClick('back')} disabled={isTheSlideFirst}>
        <StyledRightArrowCircle disabled={isTheSlideFirst} />
      </StyledButton>
      <StyledButton onClick={() => arrowClick('ahead')} disabled={isTheSlideLast}>
        <StyledRightArrowCircle disabled={isTheSlideLast} />
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
`;

const StyledButton = styled.button`
  all: unset;

  &:nth-of-type(1) {
    transform: rotate(180deg);
    margin-bottom: 13px;
  }

  &:disabled {
    color: ${colors.lowOpaGrey};
    cursor: unset;
  }

`;

const StyledRightArrowCircle = styled(RightArrorCircle)<{ disabled: boolean }>`
  width: 80px;
  height: 80px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.6;

    ${({ disabled }) => disabled
    && css`
      opacity: 0.3;
      cursor: default;
    `}
  }

  ${({ disabled }) => disabled && 'opacity: 0.3;'}
`;
