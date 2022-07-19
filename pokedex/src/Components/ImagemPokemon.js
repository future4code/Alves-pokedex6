import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ImagemPokemon(props) {
    const [recebeDados, setRecebeDados] = useState()

    useEffect(() => {
        pegaImagem()
    }, [props.url])

    const pegaImagem = () => {
        axios.get(`${props.url}`)
            .then((response) => {
                setRecebeDados(response.data.sprites)
            }).catch((erro) => {
                console.log(erro.message)
            })
    }

    const render = recebeDados ? (<img src={recebeDados.front_default}/>) : (<p>Imagem não encontrada</p>)
    return (
        <div>
            {render}
        </div>
    )
}

export default ImagemPokemon