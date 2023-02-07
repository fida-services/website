import { Text } from 'components/_common/Text';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme';

interface SlideData {
  title: string;
  description: string;
}
interface Props {
  currentSlideData: SlideData;
}

export const SliderText = (props: Props) => {
  const { currentSlideData: { title, description } } = props;
  return (
    <StyledWrapper>
      <TitleWrapper>
        <Text size={2} label={title} fontWeight={700} />
      </TitleWrapper>
      <div>
        <Text size={1} label={description} fontWeight={400} color={colors.greyWhite} />
      </div>
    </StyledWrapper>
  );
};

const TitleWrapper = styled.div`
    line-height: 40px;
    margin-bottom: 12px;
`;
const StyledWrapper = styled.div`
    max-width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
