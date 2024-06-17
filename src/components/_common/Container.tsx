import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element[] | JSX.Element
}

export const Container = ({ children }: ContainerProps) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
`;
