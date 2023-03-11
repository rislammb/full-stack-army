import Button from './components/button/Button';
import InputGroup from './components/input-group/InputGroup';

function App() {
  return (
    <div
      style={{
        maxWidth: '540px',
        margin: '2rem auto',
        backgroundColor: '#fff',
        padding: '2rem',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <h3 style={{ fontFamily: 'Arial', fontSize: '2rem', color: '#222' }}>
          Sign up
        </h3>
        <p style={{ fontFamily: 'Arial', fontSize: '1rem', color: '#666' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <form>
        <InputGroup label='What is your Name' type='text' />
        <InputGroup label='What is your Email' type='email' />
        <InputGroup label='What is your Password' type='password' />

        <div>
          <Button text='Cancel' type='text' variant='error' size='small' />
          <Button text='Reset' type='reset' variant='warning' size='medium' />
          <Button text='Submit' type='submit' variant='primary' size='large' />
        </div>
      </form>
    </div>
  );
}

export default App;

/**
 * When should we decide creating a new component?
 * *** When we need to write duplicate code
 * *** Whice data are different
 */
