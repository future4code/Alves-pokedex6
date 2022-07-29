import React, { useState } from "react";
import { GlobalContext } from './GlobalContext'
import axios from "axios"
import { BASE_URL } from "../Components/BaseUrl";


export default function GlobalState(props) {
    const [adiciona, setAdiciona] = useState([])
    const [listaPokemon, setListaPokemon] = useState([])

    const getPokemons = async () => {
        const resp = await axios.get(`${BASE_URL}pokemon/`)
        const newArr = []
        for (let i = 0; i < resp.data.results.length; i++) {
            if (i == 0 && listaPokemon.length != 0) {
                return;
            }
            const tempResp = await axios.get(resp.data.results[i].url)
            newArr.push(tempResp.data)
        }
        await setListaPokemon(newArr)
    }

    console.log(listaPokemon)
    const values = {
        adiciona,
        setAdiciona,
        listaPokemon,
        setListaPokemon,
        getPokemons
    }

    const Provider = GlobalContext.Provider

    return <Provider value={values}>{props.children}</Provider>
}