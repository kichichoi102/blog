import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile } from './features/profile';
import { Comments } from './features/comments';
import { Blogs } from './features/blogs';
import { NotFound } from './features/misc';
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
        <Route path='profile' element={<Profile />} />
        <Route path='comments' element={<Comments />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
