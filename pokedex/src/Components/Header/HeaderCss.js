import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

export const Imagem = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 307px;
  height: 113px;
  img {
    width: 19.188rem;
    height: 7.06rem;
  }
`;

export const BotaoPokedex = styled.button`
  font-family: "Poppins", sans-serif;
  background-color: #33a4f5;
  font-style: normal;
  color: #ffffff;
  width: 17.938rem;
  height: 4.625rem;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-left: 75%;
`;

export const BotaoHome = styled.button`
  color: #1a1a1a;
  background-color: white;
  cursor: pointer;
  border: none;
  height: 36px;
  left: 100px;
  position: absolute;
  width: 210px;
  height: 36px;
  left: 100px;
  font-family: "Poppins";
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-decoration-line: underline;
`;
