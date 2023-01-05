import React, {useContext} from "react";
import {useNavigate} from "react-router-dom"
import {goToListPage} from "../../Routes/Coordinator.js"
import CardPokedex from "../../Components/CardPokedex/CardPokedex.js";
import { PokemonContext } from "../../Contexts/PokemonContext.js";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Header from "../../Components/Header/Header.js";

export default function Pokedex(props) {
    const navigate = useNavigate()
    const context = useContext(PokemonContext)
    const {pokedex, setPokedex, setPokemons, pokemons} = context
    
    
    return(
        <>
            <Header/>          
            <Container maxWidth="false" >
                <Grid container spacing={3}>
                    {pokedex.map((pokemon) => (
                    <Grid item xs={3} key={pokemon.data.name}> 
                        <CardPokedex 
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