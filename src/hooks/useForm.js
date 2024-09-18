import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);


  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //funcion para resetear formulario.
  const onResetForm = () => {
    setFormState ( initialForm );
  };

  return {
    //uso el operador spread para retonar una copia del formState.
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};
