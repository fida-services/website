import React from 'react';
import styled from 'styled-components';
import { StyledGradientBackground } from 'styledParts/StyledGradientBackground';
import { Text } from 'components/_common/Text';

interface Props {
  boxData: {
    title: string;
    description: string
    image: string
  };
}

export const GradientBox = ({ boxData }: Props) => {
  const { title, description, image } = boxData;

  return (
    <StyledGradientBackground height={380} width={500} marginX={20}>
      <StyledWrapper>
        <div className="flex mb-4 justify-content-center align-items-center">
          <img className="mr-3" src={image} alt={title} />
          <Text size={32} label={title} textPlacing="center" />
        </div>
        <div>
          <Text size={24} label={description} />
        </div>
      </StyledWrapper>
    </StyledGradientBackground>
  );
};

const StyledWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 45px 40px
`;
