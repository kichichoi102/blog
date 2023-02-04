import React from 'react';
import BlogList from './BlogList';
import { PageNumberBar } from '../../../components';
import { useSearchParams } from 'react-router-dom';

export function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const blogId = searchParams.get('id');

  return (
    <>
      <p>Blogs Component</p>
      <BlogList blogId={blogId} />
      <PageNumberBar params={{ totalItems: 200, itemsPerPage: 20 }} />
    </>
  );
}
