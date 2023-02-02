import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import { useSearchParams, useNavigate } from 'react-router-dom';
import repositoryFactory from '../repositories/repository-factory';

/**
 * @return {jsx}
 */
export function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const postId = searchParams.get('id');
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

  function viewComments(postId) {
    navigate(`/comments?id=${postId}`);
  }

  useEffect(() => {
    fetchBlogData(postId);
  }, []);

  return (
    <>
      <TopNavBar />

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
                    <Button variant='primary' onClick={() => viewComments(post.id)} style={{ maxWidth: '10em' }}>
                      View Comment
                    </Button>
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
