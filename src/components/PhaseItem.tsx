import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { colors, radius } from 'theme';
import { usePhaseSize } from 'hooks/usePhaseSize';
import { Text } from './_common/Text';
import { maxWidth640 } from './rwd/detectMobile';

interface ContainerProps {
  index?: number
  rightPosition?: boolean
}

interface MainContainerProps {
  index?: number
  isActive?: boolean
  top: number
}

interface LineProps {
  size: number
  index: number
  width: number
}

interface PhaseItemProps extends ContainerProps {
  dots: string[]
  height: number
  index: number
  isActive?: boolean
  width: number
}

export const PhaseItem = (props: PhaseItemProps) => {
  const { height, index, isActive, rightPosition, dots, width } = props;
  const { phaseHeight, phaseWidth, top } = usePhaseSize({ height, width, phaseIndex: index });

  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <MainContainer index={index} isActive={isActive} top={top}>
      <Line index={index} size={phaseHeight} width={phaseWidth}>
        <LineDot />
      </Line>
      <Container rightPosition={rightPosition}>
        <Text
          color={colors.textPrimaryOnBrand}
          fontWeight="700"
          label={`Phase ${index}`}
          lineHeight={isMobile ? 32 : 38}
          size={isMobile ? 1.5 : 1.875}
        />
        <ListWrapper>
          {dots?.map(dot => (
            <ListItem>
              {dot}
            </ListItem>
          ))}
        </ListWrapper>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div<MainContainerProps>`
  // opacity: 0;
  // opacity: ${({ isActive }) => (isActive ? '1' : '0.2')};
  margin-top: ${({ top }) => `-${top}px`};
  position: absolute;
`;

const Container = styled.div<ContainerProps>`
  background-color: ${colors.utilityGray};
  border-left: solid ${colors.blue} 5px;
  border-radius: ${({ rightPosition }) => (rightPosition ? '64px 0px 64px 0px' : '0px 64px 0px 64px')};
  padding: 24px 32px;

  @media (min-width: 1024px) {
    border-bottom: solid ${colors.blue} 5px;
    border-left: none;
    padding: 32px 42px;
  }
`;

const Line = styled.div<LineProps>`
  border-top-left-radius: 8px;
  border-left: solid ${colors.blue} 5px;
  border-top: solid ${colors.blue} 5px;
  height: ${({ size }) => `${size}px`};
  position: relative;
  width: ${({ width }) => `${width}px`};
`;

const LineDot = styled.div`
  background-color: ${colors.blue};
  border-radius: ${radius.full};
  height: 15px;
  position: absolute;
  right: -4px;
  top: -9px;
  width: 15px;
`;

const ListWrapper = styled.ul`
  list-style-position: inside;
  padding-top: 16px;
`;

const ListItem = styled.li`
  color: ${colors.buttonTertiaryColorFg};
  font-family: 'Inter';
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 30px;
  list-style-position: outside;

  ::marker {
    color: ${colors.roseDot};
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    line-height: 32px;
  }
`;
