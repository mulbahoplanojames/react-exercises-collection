import { createContext, useState } from "react";
import Child from "./Child";
import GrandParent from "./GrandParent";

export const CounterContext = createContext(null); //!A context to pass down a counter and a string data through the tree

const Parent = () => {
  //! Creating a state variable to hold values
  const [counter, setCounter] = useState(0);
  const [string, setString] = useState("Subscribe");

  //!A function to update the counter state to a new number
  const handleCount = () => {
    setCounter((preCount) => preCount + 1);
  };

  //!An object to store the values of the date to be share
  const ContextValues = {
    counter,
    handleCount,
    string,
    setString,
  };

  return (
    <>
      <CounterContext.Provider value={ContextValues}>
        <Child />
        <GrandParent />
      </CounterContext.Provider>
    </>
  );
};

export default Parent;
