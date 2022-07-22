import React from "react";

export const listPokemon = (navigate) => {
  navigate("/");
};
export const detalhe = (navigate, name) => {
  navigate(`/detalhe/${name}`);
};
export const pokeDex = (navigate) => {
  navigate("pokedex");
};
