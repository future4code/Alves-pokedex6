import React from 'react'
import ImagemPokemon from '../../Components/ImagemPokemon'
import TipoPokemon from '../../Components/TipoPokemon'
import { useMostrarPokemon } from '../../Hooks/useMostrarPokemon'
import { Card, Conainer } from './ListaCss'


function ListaPokemon() {

    const {dados} = useMostrarPokemon('pokemon/?offset=0&limit=20')
    const recebeDados = dados?.results

    const reder = recebeDados ? (<>{recebeDados.map((item, index) => {
        return <Card key={index}>
            <p>{item.name}</p>
            <ImagemPokemon url={item.url}/>
            <TipoPokemon url={item.url}/>
        </Card>
    })}</>) : (<p>Carregando</p>)


    return (
        <Conainer>
            {reder}
        </Conainer>
    )
}

export default ListaPokemon