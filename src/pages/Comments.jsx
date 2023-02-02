import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import { useSearchParams, useNavigate } from 'react-router-dom';
import repositoryFactory from '../repositories/repository-factory';

export function Comments() {
  const [commentData, setCommentData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const postId = searchParams.get('id');

  if (!postId) {
    navigate('/blogs');
  }

  async function fetchCommentData() {
    const commentRepository = repositoryFactory.get('comments');
    setCommentData(await commentRepository.customRequestAsync('GET', { postId: postId }));
  }

  async function fetchPostData() {
    const postRepository = repositoryFactory.get('posts');
    setPostData(await postRepository.getPostAsync(postId));
  }

  useEffect(() => {
    fetchPostData();
    fetchCommentData();
  }, []);

  return (
    <>
      <Post
        title = { postData.title }
        body = { postData.body }
        userId = { postData.userId }
      />
      <Accordion alwaysOpen>
        {commentData.map((comment) => {
          return (
            <>
              <Accordion.Item key={comment.id} eventKey={comment.id}>
                <Accordion.Header>
                  comment id: {comment.id} - {comment.name}
                </Accordion.Header>
                <Accordion.Body>{comment.body}</Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </>
  );
}
