import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Header from "../../Components/Header/Header.js";
import PokeCard from "../../Components/PokemonCard/PokemonCard.js";
import ButtonP from "../../Components/Button.js";


export default function PokeList() {
    const [novaHome, setNovaHome] = useState()

    const navigate = useNavigate()

    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        getPokemons()
    }, [])

    const getPokemons = () => {
        let endpoints = []
        for (let i=1; i<=50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((endpoint)=> axios.get(endpoint))).then((res) => setPokemons(res))
    }

    


    return(
        <>
            <Header/>
            <Container maxWidth="false" >
                <Grid container spacing={3}>
                    {pokemons.map((pokemon, key) => (
                    <Grid item xs={3} key={key}> 
                        <PokeCard 
                        name={pokemon.data.name} 
                        image={pokemon.data.sprites.other['official-artwork'].front_default}
                        id={pokemon.data.id}
                        /> 
                    </Grid>
                    ))}
                </Grid>
            </Container>

        </>

    )
}

// image={pokemon.data.sprites.other.official-artwork.front_default}