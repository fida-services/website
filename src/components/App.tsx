import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Index = lazy(() => import('../pages/Index'));
const FounderSale = lazy(() => import('../pages/FounderSale'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/founder-sale" element={<FounderSale />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
