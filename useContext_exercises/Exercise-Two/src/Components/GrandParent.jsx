import { createContext, useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

export const NumberContext = createContext(null); //!A context to pass down a number data through the tree
export const StringContext = createContext(null); //!A context to pass down a text data through the tree

const GrandParent = () => {
  //! Creating a state variable to hold values
  const [randomNumber, setRandomNumber] = useState(0);
  const [string, setString] = useState("Log in");

  //!A function to update the random Number state to a random number
  const handleRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 101));
  };

  //!A function to update the string state to a new string
  const handleString = () => {
    setString("Welcome back! We missed you a lot");
  };
  //!An object to store the values of the number date to be share
  const NumberValues = {
    randomNumber,
    handleRandomNumber,
  };

  //!An object to store the values of the string date to be share
  const StringValues = {
    string,
    handleString,
  };

  return (
    <>
      {/*Nested Context Provider   */}
      <NumberContext.Provider value={NumberValues}>
        <Parent />

        <StringContext.Provider value={StringValues}>
          <Child />
        </StringContext.Provider>
      </NumberContext.Provider>
    </>
  );
};

export default GrandParent;
