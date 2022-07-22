import React, { useContext, useEffect } from "react";
import { Card, Conainer, CardMain, Titulo, PegaPokemon, BlocoBotao, Detalhe, TituloPagina, NomeTipo, ConteudoTipo, Imagem, TipoImagem, } from "./ListaCss";
import { GlobalContext } from "../../Global/GlobalContext";
import ImagemTipo from "../../Components/ImagemTipo";
import { detalhe } from "../../Router/Coordinator";
import { useNavigate } from "react-router-dom";

function ListaPokemon() {
  const navigate = useNavigate();
  const { adiciona, setAdiciona, listaPokemon, setListaPokemon, getPokemons } = useContext(GlobalContext);

  useEffect(() => {
    getPokemons();
  }, []);

  const adicionaPokemon = (nome, sprites, types) => {
    const item = {
      name: nome,
      sprites: sprites,
      types: types,
    };
    const pegaItem = [...adiciona, item];
    setAdiciona(pegaItem);


    return (
        <div>
            <TituloPagina>Todos Pokémons</TituloPagina>
            <Conainer>
                {listaPokemon.map((item, index) => {
                    return (
                        <CardMain key={index}>
                            <Card color={item.types[0].type.name}>
                                <div>
                                    <h3>#{index + 1}</h3>
                                    <Titulo>{item.name}</Titulo>
                                    <ConteudoTipo color={item.types[0].type.name}>
                                        <TipoImagem src={ImagemTipo(item.types[0].type.name)} alt={item.types.map(item => item.type.name)} />
                                        <NomeTipo>{item.types[0].type.name}</NomeTipo>
                                        <TipoImagem src={ImagemTipo(item.types[1] && item.types[1].type.name)} />
                                        <NomeTipo>{item.types[1] ? (`${item.types[1].type.name}`) : (``)}</NomeTipo>
                                    </ConteudoTipo>
                                </div>
                                <Imagem src={item.sprites.other["official-artwork"].front_default} />
                            </Card>
                            <BlocoBotao color={item.types[0].type.name}>
                                <Detalhe href="#" alt='uiii'>Detalhe</Detalhe>
                                <PegaPokemon onClick={() => adicionaPokemon(item.name, item.url)}>Capturar!</PegaPokemon>
                            </BlocoBotao>
                        </CardMain>
                    );
                })}
            </Conainer>
        </div>

    setListaPokemon(
      listaPokemon.filter((item) => {
        return item.name !== nome;
      })

    );
  };

  return (
    <div>
      <TituloPagina>Todos Pokémons</TituloPagina>
      <Conainer>
        {listaPokemon.map((item, index) => {
          return (
            <CardMain key={index}>
              <Card color={item.types[0].type.name}>
                <div>
                  <Titulo>#{index + 1}</Titulo>
                  <Titulo>{item.name}</Titulo>
                  <ConteudoTipo color={item.types[0].type.name}>
                    <div>
                      <TipoImagem src={ImagemTipo(item.types[0].type.name)} alt={item.types.map((item) => item.type.name)} />
                      <NomeTipo>{item.types[0].type.name}</NomeTipo>
                    </div>
                    <div>
                      <TipoImagem src={ImagemTipo(item.types[1] && item.types[1].type.name)} />
                      <NomeTipo>{item.types[1] ? `${item.types[1].type.name}` : ``}</NomeTipo>
                    </div>
                  </ConteudoTipo>
                </div>
                <Imagem src={item.sprites.other["official-artwork"].front_default} />
              </Card>
              <BlocoBotao color={item.types[0].type.name}>
                <Detalhe onClick={() => detalhe(navigate, item.name)}>
                  Detalhe
                </Detalhe>
                <PegaPokemon
                  onClick={() =>
                    adicionaPokemon(item.name, item.sprites, item.types)
                  }
                >
                  Capturar!
                </PegaPokemon>

              </BlocoBotao>
            </CardMain>
          );
        })}
      </Conainer>
    </div>
  );
}

export default ListaPokemon;
