import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

  const { counter, decrement, increment } = useCounter(1);
  //desestructuracion para traer lo que necesitamos del useFetch.
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
      <h1>MultipleCustomHooks</h1>

      
      { 
        isLoading 
        ? <LoadingMessage/>   
        : (
          <PokemonCard 
            name={data.name} 
            id={ counter } 
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny
            ]}
          />
        )
      }

      

      <button className="btn btn-primary mt-2"
              //si el counter es mayor a uno va a decrementar sino es null y no nos dejara decrementar.
              onClick={ () =>  counter > 1 ? decrement() : null }
      >
        Anteriores
      </button>
      <button className="btn btn-primary mt-2"
               onClick={ () => increment() }
      >
        Siguiente
      </button>
    </>
  );
};
