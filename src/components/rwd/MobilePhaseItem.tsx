import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import arrowRight from 'assets/icons/arrowRight.svg';
import arrowLeft from 'assets/icons/arrowLeft.svg';
import { colors, radius } from 'theme';
import { usePhaseSizeMobile } from 'hooks/usePhaseSizeMobile';
import { Text } from '../_common/Text';
import { maxWidth640 } from './detectMobile';

interface LineProps {
  size: number
  width: number
}

interface MobilePhaseItemProps {
  dots: string[]
  height: number
  index: number
  onClickLeft: () => void
  onClickRight: () => void
  width: number
}

export const MobilePhaseItem = (props: MobilePhaseItemProps) => {
  const { height, index, dots, width, onClickLeft, onClickRight } = props;
  const { phaseHeight, phaseWidth, top } = usePhaseSizeMobile({ height, width, phaseIndex: index });

  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <MainContainer top={top}>
      <Line size={phaseHeight} width={phaseWidth}>
        <LineDot />
      </Line>
      <Container>
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
        <Row>
          {index > 1 ? <Image src={arrowLeft} alt="arrow-left" onClick={onClickLeft} /> : <div />}
          {index < 6 ? <Image src={arrowRight} alt="arrow-right" onClick={onClickRight} /> : <div />}
        </Row>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div<{ top: number }>`
  margin-top: ${({ top }) => `-${top}px`};
`;

const Container = styled.div`
  background-color: ${colors.utilityGray};
  border-left: solid ${colors.blue} 5px;
  border-radius: 0px 64px 0px 64px;
  padding: 24px 32px;
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
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  margin-top: 16px;
`;

const Image = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
`;
