import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import ourMissionOverlay from 'assets/overlays/mission-overlay.svg';
import { Text } from 'components/_common/Text';
import { colors, radius } from 'theme';
import { maxWidth840 } from '../rwd/detectMobile';
import { sliderData } from './sliderData';

interface SliderCardProps {
  description: string;
  currentIndex: number
  imageSrc: string;
  isRoseText?: boolean
  subtitle?: string
  title: string;
}

export const SliderCard = (props: SliderCardProps) => {
  const { description, imageSrc, currentIndex, title, subtitle, isRoseText } = props;

  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <MainContainer>
      <Card>
        {!isTablet ? (
          <LinesBg
            alt="mission-overlay"
            src={ourMissionOverlay}
          />
        ) : (
          null
        )}
        <ImageWrapper src={imageSrc} alt="risk" />
        <InnerCard>
          <Text
            color={colors.textPrimaryOnBrand}
            fontFamily="Inter"
            fontWeight={400}
            isRoseText={isRoseText}
            label={title}
            lineHeight={isTablet ? 38 : 72}
            size={isTablet ? 1.875 : 3.75}
          />
          <BottomTextWrapper>
            {subtitle ? (
              <Text
                color={colors.textPrimaryOnBrand}
                fontWeight={700}
                label={subtitle}
                lineHeight={isTablet ? 32 : 38}
                size={isTablet ? 1.5 : 1.875}
              />
            ) : (
              null
            )}
            <Text
              color={colors.buttonTertiaryColorFg}
              fontFamily="Inter"
              fontWeight={500}
              label={description}
              lineHeight={isTablet ? 20 : 28}
              size={isTablet ? 0.875 : 1.125}
            />
          </BottomTextWrapper>
          {!isTablet ? (
            <StepperContainer>
              <Text
                color={colors.buttonTertiaryColorFg}
                fontFamily="Inter"
                fontWeight={500}
                label={`${currentIndex} / ${sliderData.length}`}
                lineHeight={28}
                size={1.125}
              />
              <StepperWrapper>
                {sliderData?.map((_, index) => (
                  <Step isColored={currentIndex - 1 >= index} />
                ))}
              </StepperWrapper>
            </StepperContainer>
          ) : (
            null
          )}
        </InnerCard>
      </Card>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: ${colors.mainBlack};
  border-radius: ${radius['4xl']};
`;

const Card = styled.div`
  align-items: center;
  background: ${colors.greyBackgroundGradient};
  border-radius: ${radius['4xl']};
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
  width: calc(100vw - 32px);

  @media (min-width: 768px) {
    width: calc(100vw - 96px);
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 60% 30%;
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

const ImageWrapper = styled.img`
  width: 100%;
  order: 0;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    order: 1;
    width: 100%;
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

const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  margin-top: 14px;
`;

const Step = styled.div<{ isColored?: boolean }>`
  background: ${({ isColored }) => (isColored ? colors.backgroundGradient : 'transparent')};
  border-radius: ${radius['4xl']};
  border: 1px solid ${colors.borderStep};
  height: 16px;
  width: 90px;
`;

const StepperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const BottomTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
