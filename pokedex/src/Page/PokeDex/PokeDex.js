import React, { useContext, useEffect } from "react";
import ImagemPokemon from "../../Components/ImagemPokemon";
import TipoPokemon from "../../Components/TipoPokemon";
import { useNavigate } from "react-router-dom";
import { listaPokemon } from "../../Router/Coordinator";
import { GlobalContext } from "../../Global/GlobalContext";

function PokeDex() {
  const navigate = useNavigate();
  const { adiciona, setAdiciona } = useContext(GlobalContext);

  const removerPokemon = (poke) => {
    setAdiciona(adiciona.filter((item) => poke.name !== item.name));
  };

  const renderPokedex = adiciona.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.name}</p>
        <ImagemPokemon url={item.url} />
        <TipoPokemon url={item.url} />
        <button onClick={() => removerPokemon(item)}>Deletar</button>
      </div>
    );
  });

  return (
    <div>
      {renderPokedex}
      <button onClick={() => listaPokemon(navigate)}>Voltar</button>
    </div>
  );
}

export default PokeDex;
