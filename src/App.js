import './styles/styles.scss';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AdminPage from './pages/AdminPage';

const Home = React.lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/admin" exact element={<AdminPage />} />
          <Route path="*" exact component={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
