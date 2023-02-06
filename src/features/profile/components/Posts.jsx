import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Posts() {
  return (
    <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <ListGroup variant='flush'>
        <ListGroup.Item>hello</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
