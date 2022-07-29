import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NomeTipo, ConteudoTipo, Card } from '../Page/ListaPokemon/ListaCss'
import ImagemTipo from './ImagemTipo'


function TipoPokemon(props) {

    const [recebeDados, setRecebeDados] = useState()

    useEffect(() => {
        pegaTipo()
    }, [props.url])

    const pegaTipo = () => {
        axios.get(`${props.url}`)
            .then((response) => {
                setRecebeDados(response.data.types)
            }).catch((erro) => {
                console.log(erro.message)
            })
    }

    const render = recebeDados ? (<>{recebeDados.map((tipo, index) => {
        return <ConteudoTipo key={index} color={tipo.type.name}>
            <img src={ImagemTipo(tipo.type.name)} alt={tipo.type.name} />
            <NomeTipo>{tipo.type.name}</NomeTipo>
        </ConteudoTipo>

    })}</>) : (<p>Carregando</p>)

    return (
        <div>
            {render}
        </div>
    )
}

export default TipoPokemon