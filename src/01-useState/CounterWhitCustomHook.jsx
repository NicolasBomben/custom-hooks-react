import { useCounter } from '../hooks/useCounter';

export const CounterWhitCustomHook = () => {
  const { counter, increment, decrement, resetCounter} = useCounter();


  return (
    <>
      <h1>Counter Whit Custom Hook: {counter}</h1>

      <hr />

      <button onClick={ increment } className="btn btn-primary p-3">+1</button>
      <button onClick={ resetCounter }className="btn btn-primary p-3">Reset</button>
      <button onClick={ decrement } className="btn btn-primary p-3">-1</button>
    </>
  );
};
