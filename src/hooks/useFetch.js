import { useState, useEffect } from "react";

export const useFetch = ( url ) => {

  //estado inicial.  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });


  useEffect(() => {
    getFetch();
    //cuando el url cambia vuelvo a hacer la peticion http.
  }, [url]);

  //esta funcion la ejecuto antes del fetch para que cuando el url cambie, establecemos el valor.
  const setLoadingState = () => {
    setState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })
  }

  const getFetch = async() => {

    setLoadingState();

    const resp = await fetch( url );


    //simulo un sleep
    await new Promise( resolve => setTimeout( resolve, 1500 ));

    //si el fetch da error se devuelve el nuevo estado, con el return para que solo se ejecute una sola vez y no prosiga ejecuntando.
    if( !resp.ok ){
        setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
                code: resp.status,
                message: resp.statusText,
            }
        });
        return;
    }
    // si todo esta ok se actualiza el estado con la data.
    const data = await resp.json();
    setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
    })

    
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
