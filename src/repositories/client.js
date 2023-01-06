import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';
/**
 * create client
 * @return {client}
 */
export default function createClient() {
  const client = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'If-None-Match': null,
      'Access-Control-Allow-Origin': true,
    },
  });
  return client;
}

