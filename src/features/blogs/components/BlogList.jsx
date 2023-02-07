import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import repositoryFactory from '../../../repositories/repository-factory';
import ViewCommentButton from './ViewCommentButton';

export default function BlogList(blogId = null) {
  const [blogData, setBlogData] = useState([]);

  const navigate = useNavigate();
  const blogRepository = repositoryFactory.get('posts');
  const contactRepo = repositoryFactory.get('users');

  async function fetchBlogData(id = null) {
    let data = [];
    if (id) {
      const blogData = await blogRepository.getPostAsync(id);
      if (blogData == 404) {
        navigate('/NotFound');
      }
      data.push(blogData);
    } else {
      data = await blogRepository.getAsync();
    }
    return data;
  }

  async function getUserName(data) {
    data.forEach(async (dict, i) => {
      const user = await contactRepo.getPostAsync(dict.userId);
      data[i].username = user.username;
    });
    setBlogData(data);
  }

  useEffect(() => {
    fetchBlogData(blogId.blogId)
        .then((data) => {
          getUserName(data);
        });
  }, []);

  return (
    <>
      <Card style={{ width: '90%', margin: 'auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <Accordion alwaysOpen>
          {blogData.map((post) => {
            return (
              <>
                <Accordion.Item key={post.id} eventKey={post.id}>
                  <Accordion.Header>
                    Post ID: {post.id} - {post.title}
                  </Accordion.Header>
                  <Accordion.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <div style={{ color: 'gray', paddingBottom: '0.1rem', fontSize: '0.75rem' }}>Posted By u/{post.username}</div>
                    {post.body}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem' }}>
                      <ViewCommentButton postId={post.id} />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </>
            );
          })}
        </Accordion>
      </Card>
    </>
  );
}
