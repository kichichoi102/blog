import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Blogs, Contacts } from './pages';
import React from 'react';

/**
 * @return {Routes}
 */
function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='Blogs' element={<Blogs />} />
        <Route path='Contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
