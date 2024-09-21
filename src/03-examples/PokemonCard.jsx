import { useState, useLayoutEffect, useRef } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  });

  const divRef = useRef();


  useLayoutEffect( ()=> {
    const { width, height } = divRef.current.getBoundingClientRect();
    setBoxSize({ width, height});
  }, [sprites]);


  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        {" "}
        #{id} - {name}{" "}
      </h2>

      <div ref={ divRef }>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name}/>
        ))}
      </div>

      <code>
        {JSON.stringify(boxSize)}
      </code>
    </section>
  );
};
