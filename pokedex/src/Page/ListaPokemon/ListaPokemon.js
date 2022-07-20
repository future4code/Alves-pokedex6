import React, { useContext } from "react";
import ImagemPokemon from "../../Components/ImagemPokemon";
import TipoPokemon from "../../Components/TipoPokemon";
import { useMostrarPokemon } from "../../Hooks/useMostrarPokemon";
import { Card, Conainer } from "./ListaCss";
import { useNavigate } from "react-router-dom";
import { pokeDex } from "../../Router/Coordinator";
import { GlobalContext } from "../../Global/GlobalContext";

function ListaPokemon() {
  const navigate = useNavigate();
  const { dados } = useMostrarPokemon("pokemon/?offset=0&limit=20");
  const recebeDados = dados?.results;
  const { adiciona, setAdiciona } = useContext(GlobalContext);

  const adicionaPokemon = (nome, url) => {
    const item = {
      name: nome,
      url: url,
    };
    const pegaItem = [...adiciona, item];
    setAdiciona(pegaItem);
  };

  const reder = recebeDados ? (
    <>
      {recebeDados.map((item, index) => {
        return (
          <Card key={index}>
            <p>{item.name}</p>
            <ImagemPokemon url={item.url} />
            <TipoPokemon url={item.url} />
            <button onClick={() => adicionaPokemon(item.name, item.url)}>
              Pega Pokemon
            </button>
          </Card>
        );
      })}
    </>
  ) : (
    <p>Carregando</p>
  );

  return (
    <Conainer>
      <button onClick={() => pokeDex(navigate)}>PokeDex</button>
      {reder}
    </Conainer>
  );
}

export default ListaPokemon;
