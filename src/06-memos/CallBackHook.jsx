import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    () => {
        setCounter( (value) => value + 1 );
    },
    [],
  );
  
  return (
    <>
      <h1> UseCallBackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={ increment }/>
    </>
  );
};
