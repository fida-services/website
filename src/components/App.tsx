import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';

import JoinNetworkForm from 'components/join-network-form/JoinNetworkForm';
import MainTemplate from 'components/MainTemplate';
import LandingPage from 'components/LandingPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainTemplate />}>
          <Route index element={<LandingPage />} />
          <Route path="form" element={<JoinNetworkForm />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
