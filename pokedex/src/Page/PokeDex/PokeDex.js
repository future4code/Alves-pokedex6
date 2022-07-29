import React, { useContext } from "react";
import ImagemPokemon from "../../Components/ImagemPokemon";
import TipoPokemon from "../../Components/TipoPokemon";
import { useNavigate } from "react-router-dom";
import { listPokemon } from "../../Router/Coordinator";
import { GlobalContext } from "../../Global/GlobalContext";
import {
  Card,
  Conainer,
  CardMain,
  Titulo,
  PegaPokemon,
  BlocoBotao,
  Detalhe,
  TituloPagina,
  NomeTipo,
  ConteudoTipo,
  Imagem,
  TipoImagem,
} from "./PokeDexCss";
import { detalhe } from "../../Router/Coordinator";
import ImagemTipo from "../../Components/ImagemTipo";

function PokeDex() {
  const navigate = useNavigate();
  const { adiciona, setAdiciona, listaPokemon, setListaPokemon } =
    useContext(GlobalContext);

  const removerPokemon = (poke) => {
    setAdiciona(adiciona.filter((item) => poke.name !== item.name));
    listaPokemon.push(poke);
  };
  console.log(adiciona);

  // const renderPokedex = adiciona.map((item, index) => {
  //   console.log(adiciona);
  //   return (
  //     <Conainer>
  //       <CardMain key={index}>
  //         <p>{item.name}</p>
  //         <div></div>
  //         <TipoPokemon url={item.url} />
  //         <button onClick={() => removerPokemon(item)}>Deletar</button>
  //       </CardMain>
  //     </Conainer>
  //   );
  // });

  const renderPokedex = adiciona?.map((item, index) => {
    return (
      <CardMain key={index}>
        <Card color={item.types[0].type.name}>
          <div>
            <Titulo>{item.name}</Titulo>
            <ConteudoTipo color={item.types[0].type.name}>
              <div>
                <TipoImagem
                  src={ImagemTipo(item.types[0].type.name)}
                  alt={item.types.map((item) => item.type.name)}
                />
                <NomeTipo>{item.types[0].type.name}</NomeTipo>
              </div>
              <div>
                <TipoImagem
                  src={ImagemTipo(item.types[1] && item.types[1].type.name)}
                />
                <NomeTipo>
                  {item.types[1] ? `${item.types[1].type.name}` : ``}
                </NomeTipo>
              </div>
            </ConteudoTipo>
          </div>
          <Imagem src={item.sprites.other["official-artwork"].front_default} />
        </Card>
        <BlocoBotao color={item.types[0].type.name}>
          <Detalhe onClick={() => detalhe(navigate, item.name)}>
            Detalhe
          </Detalhe>
          <PegaPokemon onClick={() => removerPokemon(item)}>
            Excluir!
          </PegaPokemon>
        </BlocoBotao>
      </CardMain>
    );
  });

  return (
    <div>
      <TituloPagina>Meus Pokémons</TituloPagina>
      <Conainer>{renderPokedex}</Conainer>
    </div>
  );
}

export default PokeDex;
