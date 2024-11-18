import { useContext } from "react";
import { StringContext } from "./GrandParent";

const Child = () => {
  const { string, handleString } = useContext(StringContext); //! Destructing the data 
  return (
    <>
      <h1 style={{ paddingTop: "4rem" }}>{string}</h1>
      <button onClick={handleString}>Change Text</button>
    </>
  );
};

export default Child;
