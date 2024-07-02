/* eslint-disable react/no-array-index-key */
import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import roadMap from 'assets/images/road-map.svg';
import { roadMapTexts } from 'data/texts';
import { maxWidth840 } from 'components/rwd/detectMobile';
import { PhaseItem } from 'components/PhaseItem';
import { PhasesCarousel } from 'components/rwd/PhasesCarousel';
import { BaseTextWithDescription } from '../_common/BaseTextWithDescription';
import { Container } from '../_common/Container';

export const RoadMap = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const onImageLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const imageElement = e.currentTarget;
    setImageHeight(imageElement.offsetHeight);
    setImageWidth(imageElement.offsetWidth);
  };

  return (
    <Container>
      <ContentWrapper>
        <BaseTextWithDescription description={roadMapTexts.description} title={roadMapTexts.title} />
        <div style={{ position: 'relative' }}>
          <ImageWrapper>
            <Image onLoad={onImageLoad} src={roadMap} alt="road-map" />
          </ImageWrapper>
          {isTablet ? <PhasesCarousel height={imageHeight} width={imageWidth} /> : (
            <PhasesContainer>
              {roadMapTexts?.phases?.map((phase, index) => (
                <PhaseItem
                  dots={phase}
                  index={index + 1}
                  key={index}
                  rightPosition={index % 2 !== 0}
                  width={imageWidth}
                />
              ))}
            </PhasesContainer>
          )}
        </div>
      </ContentWrapper>
    </Container>
  );
};

const ContentWrapper = styled.div`
  height: 105vh;
  position: relative;

  @media (min-width: 1024px) {
    height: auto;
  }
`;

const PhasesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  position: absolute;
  top: -40px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;

  @media (min-width: 640px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: auto;
  }
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
