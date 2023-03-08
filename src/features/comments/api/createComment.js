import { axios } from '@/lib/axios';

const data = {
  postId: 1,
  userId: 1,
  name: 'comment name',
  body: 'body of comment',
};
console.log(axios.post('/comments', data));
