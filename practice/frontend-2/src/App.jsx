import Button from './components/button/Button';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <h1>Hello world</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          voluptate perspiciatis inventore perferendis atque assumenda
          temporibus necessitatibus at ratione. Cumque et maxime magni iusto
          labore a nulla inventore, perferendis aliquam.
        </p>
        <Button variant='primary' size='medium' text='call to action' />
      </Layout>
      <Layout>
        <h1>Submit a Form</h1>
        <input type='text' />
        <input type='text' />
        <Button variant='primary' size='medium' text='submit' />
      </Layout>
      <Layout>
        <h1>Hello Component</h1>
      </Layout>
    </div>
  );
}

export default App;
