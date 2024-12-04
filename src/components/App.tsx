import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy loading with preloading
const Index = lazy(() => import('../pages/Index'));
const FounderSale = lazy(() => import('../pages/FounderSale'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Preloading critical routes
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    import('../pages/Index');
  });
} else {
  setTimeout(() => {
    import('../pages/Index');
  }, 2000);
}

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
