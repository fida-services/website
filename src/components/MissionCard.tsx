import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import ourMissionOverlay from 'assets/overlays/mission-overlay.svg';
import { Text } from 'components/_common/Text';
import { colors, radius } from 'theme';
import { maxWidth840 } from './rwd/detectMobile';
import { ReadMore } from './ReadMore';

interface CardProps {
  isReversed?: boolean
}

interface ImageWrapperProps {
  isReversed?: boolean
}

interface MissionCardProps extends CardProps {
  description: string;
  imageSrc: string;
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
        {!isTablet ? (
          <LinesBg
            alt="mission-overlay"
            src={ourMissionOverlay}
          />
        ) : (
          null
        )}
        <ImageWrapper isReversed={isReversed} src={imageSrc} alt="risk" />
        <InnerCard>
          <Text
            color={colors.text_primary_on_brand}
            fontFamily="Inter"
            fontWeight={400}
            isRoseText={isRoseText}
            label={title}
            lineHeight={isTablet ? 38 : 72}
            size={isTablet ? 1.875 : 3.75}
          />
          {subtitle ? (
            <Text
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
            <Text
              color={colors.button_tertiary_color_fg}
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

const Card = styled.div<CardProps>`
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

  @media (min-width: 1440px) {
    transform: translate(-30%, 5%);
  }
`;

const ImageWrapper = styled.img<ImageWrapperProps>`
  width: 100%;

  @media (min-width: 1024px) {
    margin: ${({ isReversed }) => (isReversed ? '0px' : '24px 0px')};
    order: ${({ isReversed }) => (isReversed ? 1 : 0)};
  }
`;

const InnerCard = styled.div`
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
