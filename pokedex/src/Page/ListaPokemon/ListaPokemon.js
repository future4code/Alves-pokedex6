import React, { useContext, useEffect } from "react";
import ImagemPokemon from "../../Components/ImagemPokemon";
import TipoPokemon from "../../Components/TipoPokemon";
import { Card, Conainer, CardMain, Titulo, PegaPokemon, BlocoBotao, Detalhe, TituloPagina } from "./ListaCss";
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
        <div>
            <TituloPagina>Todos Pokémons</TituloPagina>
            <Conainer>
                {listaPokemon.map((item, index, cor) => {
                    return (
                        <CardMain key={index}>
                            <Card color={cor}>
                                <div>
                                    <Titulo>{item.name}</Titulo>
                                    <TipoPokemon url={item.url} />
                                </div>
                                <ImagemPokemon url={item.url} />
                            </Card>
                            <BlocoBotao>
                                <Detalhe href="#" alt='uiii'>Detalhe</Detalhe>
                                <PegaPokemon onClick={() => adicionaPokemon(item.name, item.url)}>Pega Pokemon</PegaPokemon>
                            </BlocoBotao>
                        </CardMain>
                    );
                })}
            </Conainer>
        </div>
    );
}

export default ListaPokemon;
