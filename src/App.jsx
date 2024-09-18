import { CounterWhitCustomHook } from "./01-useState/CounterWhitCustomHook";
import { FormWhitCustomHook } from "./02-useEffect/FormWhitCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";

export const App = () => {
  return (
    <>
      <CounterWhitCustomHook />
      <SimpleForm />
      <FormWhitCustomHook/>
    </>
  );
};
