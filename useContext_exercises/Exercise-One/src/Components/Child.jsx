import { useContext } from "react";
import { CounterContext } from "./Parent";

const Child = () => {
  const { counter, handleCount } = useContext(CounterContext); //! Destructing the data
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleCount}>Increase</button>
    </>
  );
};

export default Child;
