/* eslint-disable react/no-array-index-key */
import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import roadMap from 'assets/images/road-map.svg';
import { maxWidth840 } from 'components/rwd/detectMobile';
import { PhaseItem } from 'components/PhaseItem';
import { PhasesSwiper } from 'components/rwd/PhasesSwiper';
import { useScrollspy } from 'hooks/useScrollSpy';
import { BaseTextWithDescription } from '../_common/BaseTextWithDescription';
import { Container } from '../_common/Container';

const texts = {
  title: 'The Roadmap',
  description: 'Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative.',
  phases: [
    ['CLI', 'Core risk transfer protocol'],
    ['On-chain contract audits', 'Webapp'],
    ['Voting', 'Multi coin support', 'Staking'],
    ['Card transfer', 'Marketplace', 'Oracle integration'],
    ['Transparent fiat integration', 'Portfolio diversity score', 'Protocol solvency audit'],
    ['Multi chain support', 'Fund pools', 'Under collateralization support'],
  ]
};

export const RoadMap = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const ids = ['phase-item-1', 'phase-item-2', 'phase-item-3', 'phase-item-4', 'phase-item-5', 'phase-item-6'];
  const activeId = useScrollspy(ids, 500);

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
        <BaseTextWithDescription description={texts.description} title={texts.title} />
        <div style={{ position: 'relative' }}>
          <ImageWrapper>
            <Image onLoad={onImageLoad} src={roadMap} alt="road-map" />
          </ImageWrapper>
          {isTablet ? <PhasesSwiper height={imageHeight} /> : (
            <PhasesContainer>
              {texts?.phases?.map((phase, index) => (
                <PhaseItem
                  dots={phase}
                  height={imageHeight}
                  index={index + 1}
                  isActive={index + 1 === +activeId[activeId.length - 1]}
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
  height: 100vh;
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
