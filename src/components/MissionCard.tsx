import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import ourMissionOverlay from 'assets/overlays/mission-overlay.svg';
import { colors, radius } from 'theme';
import { transformVariant, transition } from 'constants/motionConfig';
import { maxWidth840 } from './rwd/detectMobile';
import { ReadMore } from './ReadMore';
import { AnimatedText } from './_common/AnimatedText';

interface MissionCardProps {
  description: string;
  imageSrc: string;
  isReversed?: boolean
  isRoseText?: boolean
  subtitle?: string
  title: string;
}

const MAX_DESCRIPTION_LENGTH = 150;

export const MissionCard = (props: MissionCardProps) => {
  const { description, imageSrc, title, subtitle, isReversed, isRoseText } = props;

  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <MainContainer>
      <Card isReversed={isReversed}>
        <LinesBg
          alt="mission-overlay"
          src={ourMissionOverlay}
          loading="lazy"
        />
        <ImageWrapper
          alt="risk"
          initial="hidden"
          isReversed={isReversed}
          src={imageSrc}
          variants={transformVariant}
          whileInView="visible"
          transition={transition}
        />
        <InnerCard
          initial="hidden"
          transition={transition}
          variants={transformVariant}
          whileInView="visible"
        >
          <AnimatedText
            color={colors.textPrimaryOnBrand}
            fontFamily="Inter"
            fontWeight={400}
            isRoseText={isRoseText}
            label={title}
            lineHeight={isTablet ? 38 : 72}
            size={isTablet ? 1.875 : 3.75}
          />
          {subtitle ? (
            <AnimatedText
              color={colors.rose}
              fontFamily="Inter"
              fontWeight={500}
              label={subtitle}
              lineHeight={isTablet ? 32 : 44}
              size={isTablet ? 1.5 : 2.25}
            />
          ) : (
            null
          )}
          {description?.length >= MAX_DESCRIPTION_LENGTH && isTablet ? (
            <ReadMore text={description} limit={MAX_DESCRIPTION_LENGTH} />
          ) : (
            <AnimatedText
              color={colors.buttonTertiaryColorFg}
              fontFamily="Inter"
              fontWeight={500}
              label={description}
              lineHeight={isTablet ? 20 : 28}
              size={isTablet ? 0.875 : 1.125}
            />
          )}
        </InnerCard>
      </Card>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: ${colors.mainBlack};
  border-radius: ${radius['4xl']};

  @media (min-width: 1024px) {
    margin: 80px 0px;
  }
`;

const Card = styled.div<{ isReversed?: boolean }>`
  align-items: center;
  background: ${colors.greyBackgroundGradient};
  border-radius: ${radius['4xl']};
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: ${({ isReversed }) => (isReversed ? '60% 40%;' : '40% 60%')};
    justify-content: space-between;
    padding: 0px 32px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: ${({ isReversed }) => (isReversed ? '60% 30%;' : '30% 60%')};
  }
`;

const LinesBg = styled.img`
  left: 50%;
  position: absolute;
  transform: translate(-30%, -5%);
  z-index: -1;

  @media (max-width: 840px) {
    display: none;
  }

  @media (min-width: 1440px) {
    transform: translate(-30%, 5%);
  }
`;

const ImageWrapper = styled(motion.img)<{ isReversed?: boolean }>`
  width: 100%;

  @media (min-width: 1024px) {
    margin: ${({ isReversed }) => (isReversed ? '0px' : '24px 0px')};
    order: ${({ isReversed }) => (isReversed ? 1 : 0)};
  }
`;

const InnerCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  margin-bottom: 32px;
  margin-top: 14px;

  @media (min-width: 1024px) {
    margin-left: 24px;
    gap: 40px;
    padding: 100px 0px;
  }
`;
