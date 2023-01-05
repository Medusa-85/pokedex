import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header.js";
import PokeCard from "../../Components/PokemonCard/PokemonCard.js";
import { PokemonContext } from "../../Contexts/PokemonContext.js";


export default function PokeList() {
    
    const context = useContext(PokemonContext)
    const {pokemons, pokedex, setPokedex, setPokemons} = context


    return(
        <>
            <Header/>
            <Container maxWidth="false" >
                <Grid container spacing={3}>
                    {pokemons.map((pokemon) => (
                    <Grid item xs={3} key={pokemon.data.name}> 
                        <PokeCard 
                        name={pokemon.data.name} 
                        image={pokemon.data.sprites.other['official-artwork'].front_default}
                        id={pokemon.data.id}
                        types={pokemon.data.types} 
                        pokedex={pokedex}
                        setPokedex={setPokedex}
                        pokemons={pokemons}
                        setPokemons={setPokemons}
                        /> 
                    </Grid>
                    ))}
                </Grid>
            </Container>

        </>

    )
}



