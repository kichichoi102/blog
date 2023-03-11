import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile } from './features/profile';
import { Comments } from './features/comments';
import { Blogs } from './features/blogs';
import { NotFound, Authorize } from './features/misc';
import { LoginButton } from './features/login';
import React from 'react';

/**
 * @return {Routes}
 */
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Blogs />} />
        <Route path='login' element={<LoginButton />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='authorize' element={<Authorize />} />
        <Route path='profile' element={<Profile />} />
        <Route path='comments' element={<Comments />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
