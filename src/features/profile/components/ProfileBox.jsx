import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import repositoryFactory from '../../../repositories/repository-factory';

export default function UserBox() {
  const [contactData, setContactData] = useState([]);

  async function getContactData() {
    const contactRepo = repositoryFactory.get('users');
    setContactData(await contactRepo.getPostAsync(1));
  }

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <p>Profile Box Component</p>
          <Card.Title>{contactData.username}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{contactData.email}</Card.Subtitle>
          {/* <Card.Link href='#'>Card Link</Card.Link>
          <Card.Link href='#'>Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </>
  );
}
