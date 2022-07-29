import styled, { css } from "styled-components";
import ImagemFundo from '../../IMG/pngwing1.png'

export const Container = styled.div`
    background-color: #729F92;
    background-image: url(${ImagemFundo});
    background-repeat: no-repeat;
    background-position: right;
    display: flex;
    height: 650px;
    border-radius: 37px;
    width: 1389px;
    margin-top: -20px;
`

export const Imagem = styled.img`
  border: solid 1px white;
  background-color: white;
  padding: 50px;
  margin: 10px;
  border-radius: 8px;
  width: 190px;
`

export const BlocoImagem = styled.div`
    margin: 10px;
    width: 282px;
    height: 282px;
`

export const Status = styled.p`
    display: inline;
    margin: 10px 10px 10px 50px;
    padding-top: 50px;
    color: #898989;
    font-size: 10px;
`

export const StatusNumero = styled.p`
    display: inline;
    color: #898989;
    font-size: 10px;
`

export const Separacao = styled.div`
    border-bottom: 1px solid #C3C3C3;
    margin: 5px 30px;
    border-radius: 10px;
`

export const TituloStatus = styled.h2`
    color: black;
`

export const Fundo = styled.div`
    background-color: #5E5E5E;
    height: 41vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Progresso = styled.progress`
    margin-left: 10px;
`

export const FundoStatus = styled.div`
    background-color: white;
    margin: 20px 50px;
    width: 343px;
    height: 613px;
    border-radius: 12px;

    h2{
        color: black;
        text-align: center;
    }
`

export const Nome = styled.h1`
    margin: 10px;
`
export const ConteudoTipo = styled.div`
    display: flex;
    
    `

export const TipoNome = styled.p`
border: 1px  dashed white;
border-radius: 10px;
    text-align: center;
    display: inline;
    padding: 10px;
    margin: 10px;
    ${({ color }) => {
        switch (color) {
            case 'grass':
                return css`
                background-color: #70B873;
        `
            case 'fire':
                return css`
                background-color: #F44900;
        `
            case 'water':
                return css`
                background-color: #33A4F5;
        `
            case 'bug':
                return css`
                background-color: #316520;
        `
            case 'poison':
                return css`
                background-color: #AD61AE;
        `
            case 'flying':
                return css`
                background-color: #6892B0;
        `
            case 'normal':
                return css`
                background-color: #8A8A8A;
        `
        }
    }}

    img{
        margin-right: 10px;
        margin-top: 5px;
    }
`

export const Ataques = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    padding: 10px;
    background-color: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    text-align: center;
    color: black;
    width: 114px;
    margin-left: 20px;
`
export const FundoAtaque = styled.div`
    background-color: white;
    width: 292px;
    height: 453px;
    border-radius: 8px;
    h1 {
        color: black;
        margin-left: 20px;
    }
`

export const ImagemPokemon = styled.img`
    width: 270px;
    height: 270px;
    margin-top: -130px;
`

export const TituloDetalhe = styled.h1`  
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
`