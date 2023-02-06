import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import repositoryFactory from '../../../repositories/repository-factory';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  async function getUsersPosts() {
    const posts = repositoryFactory.get('posts');
    const postData = await posts.customRequestAsync('GET', { userId: 1 });
    setPosts(postData);
  }

  useEffect(() => {
    getUsersPosts();
  }, []);

  return (
    <Card style={{ height: '15rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Card.Header>Posts</Card.Header>
      <ListGroup variant='flush' style={{ overflow: 'auto' }}>
        {posts.map((post) => {
          return (
            <ListGroup.Item key={post.id} className='d-flex justify-content-between align-items-start'>
              <div className='ms-2 me-auto'>
                <img src='https://cdn-icons-png.flaticon.com/512/5028/5028066.png' style={{ margin: '0', position: 'absolute', height: '30px' }} />
              </div>
              <div>{post.body}</div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
}
