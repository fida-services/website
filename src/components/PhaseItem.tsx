import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { colors, radius } from 'theme';
import { usePhaseSize } from 'hooks/usePhaseSize';
import { Text } from './_common/Text';
import { maxWidth640 } from './rwd/detectMobile';

interface ContainerProps {
  rightPosition?: boolean
  top?: number
}

interface MainContainerProps {
  isActive?: boolean
  rightPosition?: boolean
}

interface LineProps {
  size?: number
  rightPosition?: boolean
}

interface PhaseItemProps {
  dots: string[]
  height: number
  index: number
  isActive?: boolean
  width: number
  rightPosition?: boolean
}

export const PhaseItem = (props: PhaseItemProps) => {
  const { height, index, isActive, rightPosition, dots, width } = props;
  const { phaseWidth, top } = usePhaseSize({ height, width, phaseIndex: index });

  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <MainContainer isActive={isActive} rightPosition={rightPosition}>
      <Container rightPosition={rightPosition} top={top}>
        <Line rightPosition={rightPosition} size={phaseWidth}>
          <LineDot rightPosition={rightPosition} />
        </Line>
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
  display: flex;
  justify-content: ${({ rightPosition }) => (rightPosition ? 'end' : 'start')};;
  left: ${({ rightPosition }) => (rightPosition ? 'auto' : '0px')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0.2')};
  right: ${({ rightPosition }) => (rightPosition ? '0px' : 'auto')};
`;

const Container = styled.div<ContainerProps>`
  background-color: ${colors.utilityGray};
  border-bottom: solid ${colors.blue} 5px;
  border-left: none;
  border-radius: ${({ rightPosition }) => (rightPosition ? '64px 0px 64px 0px' : '0px 64px 0px 64px')};
  height: fit-content;
  margin-top: ${({ rightPosition, top }) => (rightPosition ? `${top}px` : '0px')};
  padding: 32px 42px;
  position: relative;
  width: 330px;

  @media (min-width: 1440px) {
    width: 425px;
  }
`;

const Line = styled.div<LineProps>`
  border-top-left-radius: 8px;
  border-left: solid ${colors.blue} 5px;
  border-top: solid ${colors.blue} 5px;
  position: absolute;
  width: ${({ size }) => `${size}vw`};
  bottom: -5px;
  left: ${({ rightPosition }) => (rightPosition ? 'auto' : '60px')};
  right: ${({ rightPosition }) => (rightPosition ? '60px' : 'auto')};
`;

const LineDot = styled.div<{ rightPosition?: boolean }>`
  background-color: ${colors.blue};
  border-radius: ${radius.full};
  height: 15px;
  position: absolute;
  left: ${({ rightPosition }) => (rightPosition ? '-5px' : 'auto')};
  right: ${({ rightPosition }) => (rightPosition ? 'auto' : '-4px')};
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
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 32px;

  ::marker {
    color: ${colors.roseDot};
  }
`;
