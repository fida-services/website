import styled from 'styled-components';

const NotFoundPage = () => (
  <StyledContainer>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </StyledContainer>
);

export default NotFoundPage;

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`;
