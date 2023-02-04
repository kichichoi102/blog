import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import repositoryFactory from '../../../repositories/repository-factory';
import ViewCommentButton from './ViewCommentButton';

export default function BlogList(blogId = null) {
  const [blogData, setBlogData] = useState([]);

  const navigate = useNavigate();
  const blogRepository = repositoryFactory.get('posts');

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
    setBlogData(data);
  }

  useEffect(() => {
    fetchBlogData(blogId.blogId);
  }, []);

  return (
    <>
      <Accordion alwaysOpen>
        {blogData.map((post) => {
          return (
            <>
              <Accordion.Item key={post.id} eventKey={post.id}>
                <Accordion.Header>
                  Post ID: {post.id} - {post.title}
                </Accordion.Header>
                <Accordion.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  {post.body}
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ViewCommentButton postId={post.id} />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </>
  );
}
