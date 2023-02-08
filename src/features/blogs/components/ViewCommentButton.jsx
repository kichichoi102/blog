import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ViewCommentButton(props) {
  const navigate = useNavigate();
  const [id, setId] = useState();

  function viewComments(postId) {
    navigate(`/comments?id=${postId}`);
  }

  useEffect(() => {
    setId(props.postId);
  });

  return (
    <Button variant='primary' onClick={() => viewComments(id)} style={{ maxWidth: '10em' }}>
      View Comment
    </Button>
  );
}
