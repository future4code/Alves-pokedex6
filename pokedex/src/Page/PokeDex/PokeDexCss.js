import styled, { css } from "styled-components";
import PokeBola from "../../IMG/pngwing2.png";

export const Card = styled.div`
  width: 440px;
  height: 210px;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  justify-content: space-around;
  background-color: #729f92;
  background-image: url(${PokeBola});
  background-repeat: no-repeat;
  background-position: right;
  ${({ color }) => {
    switch (color) {
      case "grass":
        return css`
          background-color: #729f92;
        `;
      case "fire":
        return css`
          background-color: #eaab7d;
        `;
      case "water":
        return css`
          background-color: #71c3ff;
        `;
      case "bug":
        return css`
          background-color: #76a866;
        `;
      case "poison":
        return css`
          background-color: #ad61ae;
        `;
      case "flying":
        return css`
          background-color: #6892b0;
        `;
      case "normal":
        return css`
          background-color: #bf9762;
        `;
    }
  }}
`;

export const TituloPagina = styled.h1`
  background-color: #5e5e5e;
  margin: 0;
  padding: 10px 50px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
`;

export const Titulo = styled.h2`
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CardMain = styled.div`
  margin: 30px 10px;
  border-radius: 12px;
`;

export const Conainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #5e5e5e;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Imagem = styled.img`
  width: 193px;
  margin-top: -50px;
`;

export const NomeTipo = styled.p`
  display: inline;
  margin-left: 10px;
`;

export const ConteudoTipo = styled.div`
  display: flex;
  border: 1px solid;
  border-style: dotted;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  ${({ color }) => {
    switch (color) {
      case "grass":
        return css`
          background-color: #70b873;
        `;
      case "fire":
        return css`
          background-color: #f44900;
        `;
      case "water":
        return css`
          background-color: #33a4f5;
        `;
      case "bug":
        return css`
          background-color: #316520;
        `;
      case "poison":
        return css`
          background-color: #ad61ae;
        `;
      case "flying":
        return css`
          background-color: #6892b0;
        `;
      case "normal":
        return css`
          background-color: #8a8a8a;
        `;
    }
  }}
`;

export const PegaPokemon = styled.button`
  width: 146px;
  height: 38px;
  padding: 4px 10px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid white;
`;

export const BlocoBotao = styled.div`
  background-color: #729f92;
  border-radius: 0px 0px 12px 12px;
  display: flex;
  justify-content: space-around;
  ${({ color }) => {
    switch (color) {
      case "grass":
        return css`
          background-color: #729f92;
        `;
      case "fire":
        return css`
          background-color: #eaab7d;
        `;
      case "water":
        return css`
          background-color: #71c3ff;
        `;
      case "bug":
        return css`
          background-color: #76a866;
        `;
      case "poison":
        return css`
          background-color: #ad61ae;
        `;
      case "flying":
        return css`
          background-color: #6892b0;
        `;
      case "normal":
        return css`
          background-color: #bf9762;
        `;
    }
  }}
`;

export const Detalhe = styled.a`
  color: white;
  padding: 10px;
  margin-top: 10px;
`;

export const TipoImagem = styled.img`
  margin-left: 5px;
`;
