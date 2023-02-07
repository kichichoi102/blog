import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

export default function Post({ title, body, userId }) {
  return (
    <Card style={{ paddingBottom: '1rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Card.Header>
        Title: {title}
      </Card.Header>
      <Card.Body>
        <Card.Text>Body: {body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
