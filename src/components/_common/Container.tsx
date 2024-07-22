import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element[] | JSX.Element
  id?: string
  style?: React.CSSProperties
}

export const Container = ({ children, id, style }: ContainerProps) => (
  <StyledContainer style={style} id={id}>
    {children}
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
`;
