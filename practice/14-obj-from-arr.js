const axios = require('axios').default;

async function getPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data } = await axios.get(url);

  // // return array from array
  // const result = data.slice(0, 10).map(item => {
  //   const { userId, id , title } = item;
  //   return { userId, id, title };
  // });

  // return object from array
  const result = data.slice(0, 10).reduce((acc, cur)=>{
    const { userId, id, title } = cur;
    acc[id] = { userId, id, title };
    return acc;
  },{});

  return result;
};

getPosts().then(data => console.log(data)).catch(e=>console.log(e));