import * as React from 'react';
import { useContext } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { PokemonContext } from '../Contexts/PokemonContext';


export default function DeleteButton() {
  const context = useContext(PokemonContext)
  const {pokedex, setPokedex, setPokemons, pokemons} = context

  const deletePokemon = (name) => {
    const listPokedex = [...pokedex]
        
    const verify = listPokedex.find((pokemon) => pokemon.data.name === name)

    const listPokemon = [...pokemons, verify]
    setPokemons(listPokemon)
    
    const newListPokedex = [...pokedex]
    const indexPokemon = newListPokedex.findIndex((pokemon) => pokemon.data.name === name)
    newListPokedex.splice(indexPokemon,1)
    setPokedex(newListPokedex)
  }

  return (
    <Button 
      onClick={()=>deletePokemon()}
      bg='#FF6262'
      borderRadius='8px'
      border='none'
      color='#FFFFFF'
      w='226px'
      h='57px'
      marginTop='51px'
      marginRight='40px'
      >Excluir da Pokédex</Button>
  );
}