import { useContext } from "react";
import { CounterContext } from "./Parent";

const GrandParent = () => {
  const { string, setString } = useContext(CounterContext); //! Destructing the data
  return (
    <>
      <h1>{string}</h1>
      <button onClick={() => setString("Thanks for subscribing to my chanel")}>
        Subscribe
      </button>
    </>
  );
};

export default GrandParent;
