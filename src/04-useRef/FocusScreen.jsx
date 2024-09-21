import { useRef } from "react"


export const FocusScreen = () => {


    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

  return (
    <div className="d-flex justify-content-center flex-column">
        <h1 className="text-center">FocusScreen</h1>
        <hr />

        <input
            ref={ inputRef }
            type="text" 
            name="" id="" 
            placeholder="ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
             onClick={onClick}
        >
            Set Focus
        </button>
    
    </div>
  )
}
