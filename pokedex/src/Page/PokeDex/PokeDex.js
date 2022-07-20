import React, { useContext } from "react";
import ImagemPokemon from "../../Components/ImagemPokemon";
import TipoPokemon from "../../Components/TipoPokemon";
import { useNavigate } from "react-router-dom";
import { listaPokemon } from "../../Router/Coordinator";
import { GlobalContext } from "../../Global/GlobalContext";

function PokeDex() {
  const navigate = useNavigate();
  const { adiciona, setAdiciona } = useContext(GlobalContext);

  const removerPokemon = (item) => {
    const index = adiciona.findIndex((i) => i.name === item.name);
    const novaLista = [...adiciona];
    novaLista.splice(index, 1);
    setAdiciona(novaLista);
  };

  const renderPokedex = adiciona.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.name}</p>
        <ImagemPokemon url={item.url} />
        <TipoPokemon url={item.url} />
        <button onClick={removerPokemon}>Excluir</button>
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
