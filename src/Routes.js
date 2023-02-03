import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacts, NotFound } from './pages';
import { Comments } from './features/comments';
import { Blogs } from './features/blogs';
import React from 'react';

/**
 * @return {Routes}
 */
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Blogs />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='comments' element={<Comments />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
