import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import repositoryFactory from '../repositories/repository-factory';

export function Contacts() {
  // const [ isLoading, setIsLoading ] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function todo() {
      const blogs = repositoryFactory.get('users');
      const postData = await blogs.getAsync();
      setData(postData);
    }
    todo();
  }, []);

  return (
    <>
      <TopNavBar />
      <p>Contacts</p>
      <ul>
        {data.map((contact) => {
          return <li key={contact.id}>{contact.email}</li>;
        })}
      </ul>
    </>
  );
}
