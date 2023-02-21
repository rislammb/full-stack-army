import React from 'react';

function Button() {
  return <button>I am a button</button>;
}

function Title() {
  return <h1>Hello React</h1>;
}

function Body() {
  return <p>React is awesome</p>;
}

function App() {
  return (
    <div>
      <Title />
      <Body />
      <p>React is all about JavaScript</p>
      <Button />
    </div>
  );
}

export default App;
