import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element[] | JSX.Element
  style?: React.CSSProperties
}

export const Container = ({ children, style }: ContainerProps) => (
  <StyledContainer style={style}>
    {children}
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
`;
