import { useContext } from "react";
import { NumberContext } from "./GrandParent";

const Parent = () => {
  const { randomNumber, handleRandomNumber } = useContext(NumberContext); //! Destructing the data

  return (
    <>
      <h1>{randomNumber}</h1>
      <button onClick={handleRandomNumber}>Generate Random Number</button>
    </>
  );
};

export default Parent;
