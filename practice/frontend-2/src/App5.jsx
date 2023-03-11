import Button from './components/button/Button2';
import Button2 from './components/button2/Button';

import './App.css';

function App() {
  return (
    <div className='app'>
      <nav>
        <div>
          <h3>Brand Name</h3>
        </div>
        <div>
          <ul>
            <li>Link one</li>
            <li>Link two</li>
            <li>Link three</li>
          </ul>
        </div>
      </nav>

      <main>
        <h1>This is body title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          deserunt voluptas ab iste officia enim voluptatem explicabo nisi
          impedit ducimus non, atque reiciendis! Placeat eum beatae deleniti est
          laudantium nemo?
        </p>
      </main>

      <footer>
        <h3>Footer</h3>
        <ul>
          <li>Footer link one</li>
          <li>Footer link two</li>
          <li>Footer link three</li>
        </ul>
        <Button variant='primary' size='medium' text='hello world' />
        <Button2 variant='primary' size='medium' text='Button 2' />
      </footer>
    </div>
  );
}

export default App;
