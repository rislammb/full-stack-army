const axios = require('axios').default;
const baseUrl = 'https://jsonplaceholder.typicode.com';

// // ###### 1
// async function* countdown(from, delay = 1000) {
//   let nextVal = from;
//   while (nextVal > 0) {
//     await setTimeout(() => { }, delay);
//     yield nextVal--
//   }
// }

// const countdownIt = countdown(3);
// (async () => {
//   await countdownIt.next()
//   console.log(await countdownIt.next())
// })()


// // ###### 2
// const asyncIte = {
//   async*[Symbol.asyncIterator]() {
//     yield "hello!";
//     yield Promise.resolve('async');
//     yield "world";
//   }
// };

// (async () => {
//   for await (const val of asyncIte) {
//     console.log(val);
//   }
// })();


// ###### 3
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
    // for await (const posts of getPostsByUser(users)) {
    //   console.log(posts.map(post => post.title));
    // }
    const postsIterator = await getPostsByUser(users);
    await postsIterator.next();
    await postsIterator.next();
    console.log((await postsIterator.next()).value)
  })
  .catch(() => console.log('Somethings went wrong'))