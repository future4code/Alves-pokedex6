import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Imagem, BlocoImagem, ConteudoTipo, Status, Fundo, FundoStatus, StatusNumero, Separacao, Progresso, Nome, TipoNome, Ataques, FundoAtaque, ImagemPokemon, TituloDetalhe } from './DetalheCss'
import ImagemTipo from '../../Components/ImagemTipo'

function Detalhe() {
  const navigate = useNavigate();
  const params = useParams();

  const [detalhes, setDetalhes] = useState({});

  const pegarDetalhes = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => {
        setDetalhes(response.data);
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    pegarDetalhes();
  }, []);

  console.log(detalhes?.name);

  const listaStats = detalhes.stats?.map((stats, index) => {
    return (
      <div key={index}>
        <Status>{stats?.stat.name}</Status>
        <StatusNumero>{stats?.base_stat}</StatusNumero>
        <Progresso value={stats?.base_stat} max={100} />
        <Separacao></Separacao>
      </div>
    );
  });

  const primeirosMoves = detalhes.moves?.slice(0, 4);

  const listaMoves = primeirosMoves?.map((move, index) => {
    return (
      <div key={index}>
        <Ataques>{move?.move.name}</Ataques>
      </div>
    );
  });

  const tipo = detalhes.types?.map((item, index) => {
    console.log(item)
    return <>
      <dConteudoTipoiv>
        <TipoNome color={item.type.name}> <img src={ImagemTipo(item.type.name)} alt={item.type.name} />{item.type.name}</TipoNome>
      </dConteudoTipoiv>
    </>
  })

  return (
    <Fundo>
      <TituloDetalhe>Detalhe</TituloDetalhe>
      <Container>
        <BlocoImagem>
          <div>
            <Imagem src={detalhes.sprites?.front_default} />
          </div>
          <div>
            <Imagem src={detalhes.sprites?.back_default} />
          </div>
        </BlocoImagem>
        <FundoStatus>
          <h2>Base Status</h2>
          <p>{listaStats}</p>
        </FundoStatus>
        <div>
          <Nome>{detalhes?.name}</Nome>
          {tipo}
          <FundoAtaque>
            <h1>Moves:</h1>
            {listaMoves}
          </FundoAtaque>
        </div>
        <ImagemPokemon src={detalhes.sprites?.other["official-artwork"].front_default} />
      </Container>
    </Fundo>
  );
}

export default Detalhe;
