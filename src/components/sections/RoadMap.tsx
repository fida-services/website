/* eslint-disable react/no-array-index-key */
import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';

import roadMap from 'assets/images/road-map.svg';
import { PhaseItem } from 'components/PhaseItem';
import { BaseTextWithDescription } from '../_common/BaseTextWithDescription';
import { Container } from '../_common/Container';

const texts = {
  title: 'The Roadmap',
  description: 'Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative.',
  phases: [
    {
      dots: ['CLI', 'Core risk transfer protocol'],
    },
    {
      dots: ['On-chain contract audits', 'Webapp'],
    },
    {
      dots: ['Voting', 'Multi coin support', 'Staking'],
    },
    {
      dots: ['Card transfer', 'Marketplace', 'Oracle integration'],
    },
    {
      dots: ['Transparent fiat integration', 'Portfolio diversity score', 'Protocol solvency audit'],
    },
    {
      dots: ['Multi chain support', 'Fund pools', 'Under collateralization support'],
    }
  ]
};

export const RoadMap = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const onImageLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const imageElement = e.currentTarget;
    setImageHeight(imageElement.offsetHeight);
    setImageWidth(imageElement.offsetWidth);
  };

  return (
    <Container>
      <ContentWrapper>
        <BaseTextWithDescription description={texts.description} title={texts.title} />
        <Image onLoad={onImageLoad} src={roadMap} alt="road-map" />
        <PhasesContainer>
          <PhaseItem height={imageHeight} width={imageWidth} index={1} isActive dots={texts?.phases[0].dots} />
          {/* TODO: prepare for animations */}
          {/* {texts?.phases?.map((phase, index) => (
            <PhaseItem height={imageHeight} width={imageWidth} key={index} index={index} isActive dots={phase?.dots} />
          ))} */}
        </PhasesContainer>
      </ContentWrapper>
    </Container>
  );
};

const ContentWrapper = styled.div`
  position: relative;
`;

const PhasesContainer = styled.div`
  position: relative;
  height: 200px;
`;

const Image = styled.img`
  width: 100%;
`;
