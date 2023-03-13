import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';

function Help() {
  const [state, setState] = useState({ name: '' });

  useEffect(() => {
    setTimeout(() => {
      setState({ name: 'HM Nayem' });
    }, 3 * 1000);
  }, []);

  console.log('Rendering...');

  const data = [
    {
      name: 'Abdullah Turky',
      email: 'turky@email.com',
    },
    {
      name: 'Arjun Roy',
      email: 'arjun@email.com',
    },
    {
      name: 'Fahim Faisal',
      email: 'fahim@email.com',
    },
    // {
    //   name: 'Faruk Ahmed',
    //   email: 'faruk@email.com',
    // },
    // {
    //   name: 'Firoz Khan',
    //   email: 'firoz@email.com',
    // },
  ];

  return (
    <Layout>
      {/* {name && <h1>Hello {name}, I am Help page</h1>}
      {!name && <h1>Hello Guest, I am Help page</h1>} */}

      {state.name ? (
        <h1>Hello {state.name}, I am Help page</h1>
      ) : (
        <h1>Hello Guest, I am Help page</h1>
      )}

      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li>
              {item.name}, ({item.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no data!</p>
      )}
    </Layout>
  );
}

export default Help;
