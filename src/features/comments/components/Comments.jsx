import React, { useState, useEffect } from 'react';
import Post from '../../../components/Post';
import { useSearchParams, useNavigate } from 'react-router-dom';
import repositoryFactory from '../../../repositories/repository-factory';
import CommentsList from './CommentsList';

export function Comments() {
  const [postData, setPostData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const postId = searchParams.get('id');

  if (!postId) {
    navigate('/blogs');
  }

  async function fetchPostData() {
    const postRepository = repositoryFactory.get('posts');
    setPostData(await postRepository.getPostAsync(postId));
  }

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <>
      <p>Comments Component</p>
      <Post title={postData.title} body={postData.body} userId={postData.userId} />
      <CommentsList postId={postId} />
    </>
  );
}
