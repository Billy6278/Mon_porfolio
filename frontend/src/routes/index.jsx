import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Portfolio from '../pages/Portfolio';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
