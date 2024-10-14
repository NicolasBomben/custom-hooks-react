//estado inicial
const initialState = [
  {
    id: 1,
    todo: "Recolectas la piedra del alma",
    done: false,
  },
];

//funcion del reducer siempre recibe un state y un action como argumento.
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

//nuevo todo a agregar
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del infinito",
  dole: false,
};

//se debe crear la accion para añadir ese todo nuevo, siempre lleva un type y un payload.
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
