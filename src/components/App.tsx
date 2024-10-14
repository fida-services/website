import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Index } from '../pages/Index';
import { FounderSale } from '../pages/FounderSale';
import { NotFoundPage } from '../pages/NotFoundPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/founder-sale" element={<FounderSale />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
