import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import repositoryFactory from '../../../repositories/repository-factory';

export default function CommentsList(postId) {
  const [commentData, setCommentData] = useState([]);

  async function fetchCommentData() {
    const commentRepository = repositoryFactory.get('comments');
    setCommentData(await commentRepository.customRequestAsync('GET', { postId: postId.postId }));
  }

  useEffect(() => {
    fetchCommentData();
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