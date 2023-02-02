import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import { useSearchParams } from 'react-router-dom';
import repositoryFactory from '../repositories/repository-factory';

export function Comments() {
  const [commentData, setCommentData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postId = searchParams.get('id');

  async function fetchCommentData() {
    const commentRepository = repositoryFactory.get('comments');
    setCommentData(await commentRepository.customRequestAsync('GET', { postId: postId }));
  }

  useEffect(() => {
    fetchCommentData();
  }, []);

  return (
    <>
      <TopNavBar />
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
