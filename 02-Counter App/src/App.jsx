/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  // let count = 10;

  let [counter, setCounter] = useState(10);

  function addValue() {
    setCounter(counter + 1);
  }

  function removeValue() {
    setCounter(counter > 0 ? counter - 1 : 0);
  }

  // counter is updating the value but that is not visible on our UI, so here react controls that using USE STATE HOOK
  // ASSIGNMENT QUESTION IS THAT THE VALUE CAN'T GO IN NEGATIVE WHEN WE ARE DECREASING THE VALUE

  return (
    <>
      <h1>Counter:{counter}</h1>
      <h2>Counter Value:{counter}</h2>
      <div>
        <button onClick={addValue}>Increase Value:{counter}</button>
        <br /> <br />
        <button onClick={removeValue}>Decrease Value:{counter}</button>
      </div>
    </>
  );
}

export default App;
