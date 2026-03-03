import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Index = lazy(() => import('../pages/Index'));
const FounderCards = lazy(() => import('../pages/FounderCards'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/founders-card" element={<FounderCards />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
