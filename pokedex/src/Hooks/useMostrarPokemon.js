import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Components/BaseUrl";

export const useMostrarPokemon = (path) => {

    const [dados, setDados] = useState()

    useEffect(() => {
        axios.get(`${BASE_URL}${path}`)
            .then((response) => {
                setDados(response.data)
            }).catch((erro) => {
                console.log(erro.message)
            })
    }, [path])
    return { dados }
}