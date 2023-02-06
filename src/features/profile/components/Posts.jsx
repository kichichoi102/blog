import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Posts() {
  return (
    <Card style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <ListGroup variant='flush'>
        {Object.entries(socials).map(([key, value]) => {
          return (
            <ListGroup.Item key={key} className='d-flex justify-content-between align-items-start'>
              <div className='ms-2 me-auto' href={value.url}>
                <img src={value.icon} href={value.url} style={{ height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
              </div>
              <div href={value.url}>{value.alternate ? value.alternate : value.url}</div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
}
