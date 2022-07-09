// ### 1 - asynchronous programming
function main() {
  // set timeout is asynchronous
  setTimeout(() => {
    console.log('Inside set time out and log last');
  }, 10)

  setTimeout(() => {
    console.log('Inside set time out and log frist');
  }, 0)
  test()
}

function test() {
  console.log('Inside test function');
}

// main();


// ### 2 - callback - receive function as arguments and call inside
function get(path, cb) {
  const data = { path }; // here process path and return data
  cb(data);
}

// callback hell - example for get user from comment
function getUserNameFromComment(username) {
  get(`/users?username=${username}`, (user) => {
    get(`/posts?user_id=${user.id}`, (posts) => {
      get(`/comments?post_id=${posts[0].id}`, (comments) => {
        get(`/users?username=${comments[0].username}`, (user) => {
          console.log(user);
        })
      })
    })
  })
}
// getUserNameFromComment('user');

// ### 3 - promise
const isResolved = true;
const promise = new Promise((resolve, reject) => {
  if (isResolved) {
    resolve('completed')
  } else {
    reject('Somethings went wrong!')
  }
})

promise.catch(e => {
  // console.log('Rejected for', e);
}).then(result => {
  // console.log(result)
})

// promise example
function wait(ms) {
  const promise = new Promise(resolve => {
    setTimeout(resolve, ms);
  })
  return promise;
}
// wait(700).then(() => console.log('Done in 700ms'));
// wait(2500).then(() => console.log('Done in 2500ms'));
// wait(1500).then(() => console.log('Done in 1500ms'));

// promise example for get user from comment
const getPromise = url => Promise.resolve(); // process url and return data

getPromise(`/users?username=user`)
  .then(user => {
    const userId = user.id;
    return getPromise(`/posts?user_id=${userId}`);
  })
  .then(posts => {
    const postId = posts[0].id;
    return getPromise(`/comments?post_id=${postId}`);
  })
  .then(comments => {
    const fristCommentUser = comments[0].username;
    return getPromise(`/users?username=${fristCommentUser}`)
  })
  .then(user => console.log(user))
  .catch(() => console.log('Error from promise'))

// ### 4 - async-await
async function getUserName(username) {
  try {
    const mainUser = await getPromise(`/users?username=${username}`);
    const posts = await getPromise(`/posts?user_id=${mainUser.id}`);
    const comments = await getPromise(`/comments?post_id=${posts[0].id}`);
    const user = await getPromise(`/users?username=${comments[0].username}`)
    console.log(user);
  } catch (err) {
    console.log('Error from async-await');
  }
}
getUserName('user');

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
    console.log('Error found!', e.message);
  }
}

getComments('Samantha');