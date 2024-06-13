import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Header } from './Header';
import { Welcome } from './Welcome';
import { maxWidth640 } from './rwd/detectMobile';
import { OurMission } from './OurMission';
import { ConquerRisk } from './ConquerRisk';

const App = () => {
  const isTablet = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <ViewportWrapper>
      <MainWrapper>
        <Header />
        <Container isTablet={isTablet}>
          <Welcome />
          <OurMission />
          <ConquerRisk />
        </Container>
      </MainWrapper>
    </ViewportWrapper>
  );
};

const ViewportWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MainWrapper = styled.div`
  color: white;
  margin: 0 auto;
`;

const Container = styled.div<{ isTablet: boolean }>`
  color: white;
  margin: 0 auto;
  margin: ${({ isTablet }) => (isTablet ? '0 16px' : '0 48px')};
`;

export default App;
