function Button({ text }) {
  return (
    <button
      style={{
        padding: '0.5rem 1rem',
        border: 'none',
        background: 'black',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '0.25rem',
        marginRight: '0.25rem',
      }}
    >
      {text}
    </button>
  );
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {/* <button
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          background: 'black',
          color: 'yellow',
          cursor: 'pointer',
          borderRadius: '0.25rem',
        }}
      >
        Button A
      </button>
      <button
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          background: 'black',
          color: 'yellow',
          cursor: 'pointer',
          borderRadius: '0.25rem',
        }}
      >
        Button B
      </button>
      <button
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          background: 'black',
          color: 'yellow',
          cursor: 'pointer',
          borderRadius: '0.25rem',
        }}
      >
        Button C
      </button> */}

      <Button text='Button A' />
      <Button text='Button B' />
      <Button text='Button C' />
    </div>
  );
}

export default App;
