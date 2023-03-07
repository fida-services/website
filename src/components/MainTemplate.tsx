import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';

import { colors } from 'theme';

const MainTemplate = () => {
  const location = useLocation();

  return (
    <ViewportWrapper isWhiteBg={location.pathname === '/form'}>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </ViewportWrapper>
  );
};

export default MainTemplate;

const ViewportWrapper = styled.div<{ isWhiteBg: boolean }>`
  overflow: hidden;
  width: 100%;
  background-color: ${({ isWhiteBg }) => (isWhiteBg ? colors.white : colors.mainBlack)};
`;

const MainWrapper = styled.div`
  color: white;
  margin: 0 auto;
  max-width: 1440px;
`;
