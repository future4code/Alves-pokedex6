import React, { useState } from "react";
import { GlobalContext } from './GlobalContext'
import axios from "axios"
import { BASE_URL } from "../Components/BaseUrl";


export default function GlobalState(props) {
    const [adiciona, setAdiciona] = useState([])
    const [listaPokemon, setListaPokemon] = useState([])


    const teste = () => {
        if (listaPokemon.length > 0) {
            return
        } else {
            axios.get(`${BASE_URL}pokemon/?offset=0&limit=20`)
                .then((response) => {
                    setListaPokemon(response.data.results)
                }).catch((erro) => {
                    console.log(erro.message)
                })
        }
    }

    const values = {
        adiciona,
        setAdiciona,
        listaPokemon,
        setListaPokemon,
        teste
    }

    const Provider = GlobalContext.Provider

    return <Provider value={values}>{props.children}</Provider>
}