import { useState } from 'react';

import Buttons from '../components/buttons/Buttons';
import DisplayCount from '../components/display-count/DisplayCount';
import Layout from '../components/layout/Layout';
import UpdateIncrementDecrement from '../components/update-count/UpdateIncrementDecrement';

function About() {
  const [count, setCount] = useState(100);
  const [incrementValue, setIncrementValue] = useState(10);
  const [decrementValue, setDecrementValue] = useState(5);

  function increment() {
    setCount(count + incrementValue);
  }
  function decrement() {
    setCount(count - decrementValue);
  }

  function handleIncrementChange(e) {
    setIncrementValue(parseInt(e.target.value));
  }
  function handleDecrementChange(e) {
    setDecrementValue(parseInt(e.target.value));
  }

  return (
    <Layout>
      <h1>Hello, I am About page</h1>
      <DisplayCount count={count} />
      <UpdateIncrementDecrement
        incrementValue={incrementValue}
        decrementValue={decrementValue}
        handleIncrementChange={handleIncrementChange}
        handleDecrementChange={handleDecrementChange}
      />
      <Buttons increment={increment} decrement={decrement} />
    </Layout>
  );
}

export default About;

/**
 * When a component rerenders?
 * - When Props Change
 * - When State Changes
 * - When Parent Rerender
 */
