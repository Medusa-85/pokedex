import React, {useState, useEffect} from "react"
import {Router} from "./Routes/Router.js"
import Header from "./Components/Header/Header.js"
import { PokemonContext } from "./Contexts/PokemonContext.js"
import axios from "axios";
import {Stack, Progress} from '@chakra-ui/react'



function App() {
    const [newHome, setNewHome] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState()

    useEffect(()=>{
      getPokemons()
    }, [])

    useEffect(()=>{
      if(!pokemonDetail){
        setPokemonDetail(pokemons[0])
      }
    }, [pokemons])

    const getPokemons = () => {
        let endpoints = []
        for (let i=1; i<=50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((endpoint)=> axios.get(endpoint))).then((res) => setPokemons(res))
    }
    

  const context = {
    pokemons: pokemons,
    setPokemons: setPokemons,
    pokedex: pokedex,
    setPokedex: setPokedex,
    newHome: newHome,
    setNewHome: setNewHome,
    pokemonDetail: pokemonDetail,
    setPokemonDetail: setPokemonDetail
  }

  return (
    <PokemonContext.Provider value={context}>
      <Router/>
    </PokemonContext.Provider>
  );
}

export default App;
