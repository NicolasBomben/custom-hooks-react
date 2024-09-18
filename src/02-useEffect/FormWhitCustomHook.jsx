import { useForm } from "../hooks/useForm";

export const FormWhitCustomHook = () => {
  const { formState, onInputChange, username, password, email, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //const { username, email, password } = formState;

  return (
    <>
      <h1>Form whit custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="nicolas@algo.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="12345"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
    </>
  );
};
