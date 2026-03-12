import { useState } from "react";
import "./App.css"

function App() {
  const [counter, setCounter] = useState(10);

  // What will happen when we do like this ?DOes it increases 5 at once or not the answer is no to make this happen we use [prev function in our set function]

  // function increaseValue() {
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  // }

  // function decreaseValue() {
  //   setCounter(counter - 1);
  //   setCounter(counter - 1);
  //   setCounter(counter - 1);
  //   setCounter(counter - 1);
  //   setCounter(counter - 1);
  // }

  // What will happen when we do like this ?DOes it increases 5 at once or not the answer is no to make this happen we use [prev function in our set function]

  function increaseValue() {
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  }

  function decreaseValue() {
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);

  }
  return (
    <>
      <h1>Interview Question:{counter}</h1>
      <h2>Counter Value:{counter}</h2>
      <div>
        <button onClick={increaseValue}>Incraese Value: {counter}</button>
        <br />
        <button onClick={decreaseValue}>Decrease Value: {counter}</button>
      </div>
    </>
  );
}

export default App;
