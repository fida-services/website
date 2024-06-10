import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';

const App = () => (
  <ViewportWrapper>
    <MainWrapper>
      <Header />
    </MainWrapper>
  </ViewportWrapper>
);

const ViewportWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MainWrapper = styled.div`
  color: white;
  margin: 0 auto;
`;

export default App;
