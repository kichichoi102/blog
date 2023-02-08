import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import repositoryFactory from '../../../repositories/repository-factory';

export default function CommentsList(props) {
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
    fetchCommentData(props.postId);
  }, []);

  return (
    <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Card.Header>Comments</Card.Header>
      <Accordion alwaysOpen>
        {commentData.map((comment) => {
          return (
            <Accordion.Item key={comment.id} eventKey={comment.id} style={{ paddingBottom: '1rem' }}>
              <Accordion.Header>
                comment id: {comment.id} - {comment.name}
              </Accordion.Header>
              <Accordion.Body>{comment.body}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Card>
  );
}
