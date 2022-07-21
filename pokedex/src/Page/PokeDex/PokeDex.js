import React, { useContext } from "react";
import ImagemPokemon from "../../Components/ImagemPokemon";
import TipoPokemon from "../../Components/TipoPokemon";
import { useNavigate } from "react-router-dom";
import { listPokemon } from "../../Router/Coordinator";
import { GlobalContext } from "../../Global/GlobalContext";

function PokeDex() {
  const navigate = useNavigate();
  const { adiciona, setAdiciona, listaPokemon, setListaPokemon } = useContext(GlobalContext);

  const removerPokemon = (poke) => {
    setAdiciona(adiciona.filter((item) => poke.name !== item.name));
    listaPokemon.push(poke)
  };

  const renderPokedex = adiciona.map((item, index) => {
    console.log(adiciona)
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
    </div>
  );
}

export default PokeDex;
