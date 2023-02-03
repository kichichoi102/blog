import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import repositoryFactory from '../../../repositories/repository-factory';

export default function CommentsList(postId) {
  const [commentData, setCommentData] = useState([]);
  const navigate = useNavigate();
  const commentRepository = repositoryFactory.get('comments');

  async function fetchCommentData(id) {
    const comment = await commentRepository.customRequestAsync('GET', { postId: id });
    if (comment.length == 0) {
      navigate('/NotFound');
    }
    setCommentData(comment);
  }

  useEffect(() => {
    fetchCommentData(postId.postId);
  }, []);

  return (
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
  );
}
