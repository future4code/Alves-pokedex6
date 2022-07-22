import { useNavigate } from "react-router-dom";
import { pokeDex, listPokemon } from "../../Router/Coordinator";
import { Container, BotaoPokedex, BotaoHome, Imagem } from "./HeaderCss";
import Logo from "../../IMG/logo_pokemon.png";
import React from "react";

function Header() {
  const navigate = useNavigate();

  const botaoHeader = () => {
    if (window.location.pathname === `/`) {
      return (
        <BotaoPokedex onClick={() => pokeDex(navigate)}>Pokédex</BotaoPokedex>
      );
    } else if (window.location.pathname === `/pokedex`) {
      return (
        <BotaoHome onClick={() => listPokemon(navigate)}>
          {" "}
          Todos Pokémons
        </BotaoHome>
      );
    } else {
      return (
        <div>
          <BotaoHome onClick={() => listPokemon(navigate)}>
            {" "}
            Todos Pokémons
          </BotaoHome>
          <BotaoPokedex onClick={() => pokeDex(navigate)}>
            {" "}
            Pokédex
          </BotaoPokedex>
        </div>
      );
    }
  };

  return (
    <Container>
      <Imagem>
        <img src={Logo} alt="Logo Pokedex" />
      </Imagem>
      ;{botaoHeader()}
    </Container>
  );
}

export default Header;
