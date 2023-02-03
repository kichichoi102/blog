import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

export default function Post({ title, body, userId }) {
  return (
    <Card>
      <Card.Header>
        Title: {title}
        {/* <div className='circle'>
          <UserIcon />
        </div> */}
      </Card.Header>
      <Card.Body>
        {/* <Card.Title>{{ data.title }}</Card.Title> */}
        <Card.Text>Body: {body}</Card.Text>
        {/* <Button variant='primary'>Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
