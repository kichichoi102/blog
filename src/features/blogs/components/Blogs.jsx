import React from 'react';
import BlogList from './BlogList';
import { useSearchParams } from 'react-router-dom';

export default function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const blogId = searchParams.get('id');

  return (
    <>
      <p>Blogs Component</p>
      <BlogList blogId={blogId} />
    </>
  );
}
