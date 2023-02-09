// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import styled from 'styled-components';

import appPhone from 'assets/images/appPhone.png';
import { Text } from 'components/_common/Text';

interface Props {
  title: string;
  description: string;
}

export const SwiperItem = (props: Props) => {
  const { title, description } = props;

  return (
    <swiper-slide>
      <StyledWrapper>
        <ImageWrapper>
          <img height="300" src={appPhone} alt="phone with applications" />
        </ImageWrapper>
        <div className="flex flex-column gap-3">
          <Text label={title} size={2} />
          <Text label={description} size={1} fontWeight={400} />
        </div>
      </StyledWrapper>
    </swiper-slide>
  );
};
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
`;
const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;
