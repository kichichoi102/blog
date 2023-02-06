import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import repositoryFactory from '../../../repositories/repository-factory';

export default function ProfileDetails() {
  const [contactData, setContactData] = useState([]);
  const [address, setAddress] = useState('');

  function getAddress(contactData) {
    console.log(contactData);
    const addressString = contactData.address.street + ', ' + contactData.address.suite + ', ' + contactData.address.city + ', ' + contactData.address.zipcode;
    setAddress(addressString);
  }

  useEffect(() => {
    async function getContactData() {
      const contactRepo = repositoryFactory.get('users');
      const contact = await contactRepo.getPostAsync(1);
      getAddress(contact);
      setContactData(contact);
    }
    getContactData();
  }, []);

  return (
    <Card>
      <ListGroup variant='flush' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <ListGroup.Item>Full Name: {contactData.name}</ListGroup.Item>
        <ListGroup.Item>Email: {contactData.email}</ListGroup.Item>
        <ListGroup.Item>Phone: {contactData.phone}</ListGroup.Item>
        <ListGroup.Item>Address: {address}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
