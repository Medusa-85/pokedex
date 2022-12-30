import React from "react"
import Pokedex from "../Pages/PokedexPage/PokedexPage.js"
import Detail from "../Pages/DetailPage/DetailPage.js"
import PokeList from "../Pages/ListPage/ListPage.js"
import Error from "../Pages/ErrorPage.js"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ButtonP from "../Components/Button.js"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokeList/>}/>
                <Route path="pokedex" element={<Pokedex/>}/>
                <Route path="detalhes" element={<Detail/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter> 


    )
}