const axios = require('axios').default;

const url = 'https://jsonplaceholder.typicode.com';

async function getComments(username) {
  try {
    const { data: user } = await axios.get(`${url}/users/?username=${username}`);
    const { data: posts } = await axios.get(`${url}/posts/?userId=${user[0].id}`);
    const { data: comments } = await axios.get(`${url}/comments/?postId=${posts[0].id}`);
    const { data: commentedUser } = await axios.get(`${url}/users/?email=${comments[0].email}`);
    console.log(commentedUser);
  } catch (e) {
    console.log(e.toJSON());
  }
}

getComments('Samantha');