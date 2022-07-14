const axios = require('axios').default;

const baseUrl = 'https://jsonplaceholder.typicode.com';

// ###### 1
async function getUsers() {
  const { data: users } = await axios.get(`${baseUrl}/users`);
  return users;
}

async function* getPostsByUser(users) {
  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios.get(`${baseUrl}/posts?userId=${users[i].id}`);
    yield posts
  }
}

getUsers()
  .then(async (users) => {
    // const postsIterator = await getPostsByUser(users);
    // await postsIterator.next();
    // await postsIterator.next();
    // console.log((await postsIterator.next()).value);

    for await (const value of getPostsByUser(users)) {
      console.log(value.map(post => post.title));
    }
  })
  .catch(() => console.log('Somethings went wrong'))


// ###### 2
