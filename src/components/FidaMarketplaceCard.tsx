import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import diagramIcon from 'assets/icons/diagram.svg';
import fidaOverlay from 'assets/overlays/fida-overlay.svg';
import { Text } from 'components/_common/Text';
import { colors, radius } from 'theme';
import { maxWidth840 } from './rwd/detectMobile';

interface FidaMarketplaceCardProps {
  description: string;
  imageSrc: string;
  isReversed?: boolean
  title: string;
}

export const FidaMarketplaceCard = (props: FidaMarketplaceCardProps) => {
  const { description, imageSrc, title, isReversed } = props;

  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <Container isReversed={isReversed}>
      {!isTablet ? (
        <LinesBg
          alt="mission-overlay"
          src={fidaOverlay}
        />
      ) : (
        null
      )}
      <Image
        alt="device"
        isReversed={isReversed}
        src={imageSrc}
      />
      <TextContainer isReversed={isReversed}>
        <IconBox>
          <Icon src={diagramIcon} alt="diagram" />
        </IconBox>
        <Text
          color={colors.text_primary_on_brand}
          fontWeight={400}
          label={title}
          size={isTablet ? 1.875 : 3}
        />
        <Text
          color={colors.button_tertiary_color_fg}
          fontWeight={400}
          label={description}
          size={isTablet ? 0.875 : 1.875}
        />
      </TextContainer>
    </Container>
  );
};

const Container = styled.div<{ isReversed?: boolean }>`
  align-items: center;
  display: grid;
  gap: 16px;
  position: relative;

  @media (min-width: 1024px) {
    gap: 0px;
    grid-template-columns: ${({ isReversed }) => (isReversed ? '60% 40%;' : '40% 60%')};
    padding: 38px 0px;
  }
`;

const LinesBg = styled.img`
  left: 50%;
  position: absolute;
  height: 50%;
  transform: translate(-30%, -5%);
  width: 100%;
  z-index: -1;

  @media (min-width: 1440px) {
    transform: translate(-30%, 5%);
  }
`;

const Image = styled.img<{ isReversed?: boolean }>`
  border-radius: ${radius['4xl']};
  height: 100%;
  width: 100%;

  @media (min-width: 1024px) {
    object-fit: cover;
    order: ${({ isReversed }) => (isReversed ? 1 : 0)};
  }
`;

const TextContainer = styled.div<{ isReversed?: boolean }>`
  background-color: ${colors.utility_gray};
  border-radius: ${radius['4xl']};
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 50px 30px;

  @media (min-width: 1024px) {
    margin-left: ${({ isReversed }) => (isReversed ? '0px' : '24px')};
    margin-right: ${({ isReversed }) => (isReversed ? '24px' : '0px')};
    gap: 40px;
    padding: 50px;
    height: 500px;
  }

  @media (min-width: 1440px) {
    padding: 100px 60px;
  }
`;

const IconBox = styled.div`
  align-items: center;
  background: ${colors.iconGradient};
  border-radius: ${radius.md};
  height: 48px;
  justify-content: center;
  padding: 14px;
  width: 48px;

  @media (min-width: 1024px) {
    height: 84px;
    padding: 22px;
    width: 84px;
  }
`;

const Icon = styled.img`
  height: 22px;
  width: 22px;

  @media (min-width: 1024px) {
    height: 40px;
    width: 40px;
  }
`;
