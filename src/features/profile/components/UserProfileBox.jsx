import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import repositoryFactory from '../../../repositories/repository-factory';

export default function UserProfileBox() {
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
      <Card style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', paddingBottom: '4rem' }}>
        <Card.Body style={{ margin: 'auto', width: '90%' }}>
          <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt='Avatar' style={{ borderRadius: '50%', width: '7rem', margin: 'auto' }}></img>
          <Card.Title style={{ textAlign: 'center', paddingTop: '1rem' }}>{contactData.name}</Card.Title>
          <Card.Subtitle style={{ textAlign: 'center' }} className='mb-2 text-muted'>u/{contactData.username}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}
