import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaPokemon from '../Page/ListaPokemon/ListaPokemon'
import Detalhe from '../Page/Detalhe/Detalhe'
import PokeDex from '../Page/PokeDex/PokeDex'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListaPokemon />} />
        <Route path="detalhe" element={<Detalhe />} />
        <Route path="pokedex" element={<PokeDex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router