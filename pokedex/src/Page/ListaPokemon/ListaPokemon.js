import React, { useContext, useEffect } from "react";
import ImagemPokemon from "../../Components/ImagemPokemon";
import TipoPokemon from "../../Components/TipoPokemon";
import { Card, Conainer } from "./ListaCss";
import { useNavigate } from "react-router-dom";
import { pokeDex } from "../../Router/Coordinator";
import { GlobalContext } from "../../Global/GlobalContext";

function ListaPokemon() {
    const navigate = useNavigate();
    const { adiciona, setAdiciona, listaPokemon, setListaPokemon, teste } = useContext(GlobalContext);

    useEffect(() => { teste() }, [])

    const adicionaPokemon = (nome, url) => {
        const item = {
            name: nome,
            url: url,
        };
        const pegaItem = [...adiciona, item];
        setAdiciona(pegaItem);

        setListaPokemon(listaPokemon.filter((item) => {
            return item.name !== nome
        }))
    };

    return (
        <Conainer>
            <button onClick={() => pokeDex(navigate)}>PokeDex</button>
            {listaPokemon.map((item, index) => {
                return (
                    <Card key={index}>
                        <p>{item.name}</p>
                        <ImagemPokemon url={item.url} />
                        <TipoPokemon url={item.url} />
                        <button onClick={() => adicionaPokemon(item.name, item.url)}>Pega Pokemon</button>
                    </Card>
                );
            })}
        </Conainer>
    );
}

export default ListaPokemon;
