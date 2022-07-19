import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
        return <p key={index}>{tipo.type.name}</p>
    })}</>) : (<p>Tipo não indentificado</p>)
    return (
        <div>
            {render}
        </div>
    )
}

export default TipoPokemon