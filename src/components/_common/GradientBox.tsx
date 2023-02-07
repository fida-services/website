import React from 'react';
import styled from 'styled-components';
import { StyledGradientBackground } from 'styledParts/StyledGradientBackground';
import { Text } from 'components/_common/Text';
import { isMobile } from 'components/rwd/detectMobile';

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
        <div className={`flex mb-4 justify-content-center ${isMobile ? 'flex-column justify-content-start' : 'align-items-center'}`}>
          <div className="pb-2">
            <img className="mr-3" height="90" src={image} alt={title} />
          </div>
          <Text size={isMobile ? 1.5 : 2} label={title} textPlacing={isMobile ? 'left' : 'center'} />
        </div>
        <div>
          <Text size={isMobile ? 1 : 1.5} label={description} />
        </div>
      </StyledWrapper>
    </StyledGradientBackground>
  );
};

const StyledWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 45px 40px;
    @media (max-width: 840px) {
      margin-bottom: 50px;
      box-sizing: border-box;
    }
`;
