import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Blogs, Contacts, Comments, NotFound } from './pages';
import React from 'react';

/**
 * @return {Routes}
 */
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='comments' element={<Comments />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
