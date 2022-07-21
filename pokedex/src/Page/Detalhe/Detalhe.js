import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardMain, Titulo } from "../ListaPokemon/ListaCss";
import { detalhe } from "../../Router/Coordinator";
import styled from "styled-components";

const DivImagens = styled.img`
  border: solid 1px black;
`;

const Container = styled.div`
  background-color: #729f92;
`;

const Border = styled.div`
  border: solid 1px black;
`;

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

  const listaStats = detalhes.stats?.map((stats) => {
    return (
      <div>
        <p>{stats?.base_stat}</p>
        <p>{stats?.stat.name}</p>
      </div>
    );
  });

  const primeirosMoves = detalhes.moves?.slice(0, 4);

  const listaMoves = primeirosMoves?.map((move) => {
    return (
      <div>
        <p>{move?.move.name}</p>
      </div>
    );
  });

  return (
    <Container>
      <DivImagens src={detalhes.sprites?.back_default} />
      <DivImagens src={detalhes.sprites?.front_default} />
      <p>{detalhes?.name}</p>
      {listaStats}
      {listaMoves}
    </Container>
  );
}

export default Detalhe;
