import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PokemonContext } from '../../Contexts/PokemonContext';


export default function PhotosCard() {
    const context = React.useContext(PokemonContext)
    const {pokemons, pokemonDetail} = context

  return (
    <Card sx={{ height:'613px', width: '343px', borderRadius: '8px'}}>
      <CardContent >
        <span>
            <img 
            src={pokemonDetail.data.sprites.front_default}
            alt={pokemonDetail.data.name}
            width={"250em"}
            height={"250em"}
            />
        </span>
      </CardContent>
      <CardContent>
        <span>
            <img 
            src={pokemonDetail.data.sprites.back_default}
            alt={pokemonDetail.data.name}
            width={"250em"}
            height={"250em"}
            />
        </span>
      </CardContent>
    </Card>
  );
}

