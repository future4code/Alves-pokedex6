import React, { useContext, useEffect } from "react";
import ImagemPokemon from "../../Components/ImagemPokemon";
import TipoPokemon from "../../Components/TipoPokemon";
import { Card, Conainer, CardMain, Titulo, PegaPokemon, BlocoBotao, Detalhe } from "./ListaCss";
import { useNavigate } from "react-router-dom";
import { pokeDex } from "../../Router/Coordinator";
import { GlobalContext } from "../../Global/GlobalContext";

function ListaPokemon() {
    const navigate = useNavigate();
    const { adiciona, setAdiciona, listaPokemon, setListaPokemon, teste, tipoPokemon, setTipoPokemon } = useContext(GlobalContext);

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
                    <CardMain key={index}>
                        <Card color={tipoPokemon}>
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
    );
}

export default ListaPokemon;
