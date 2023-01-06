import * as React from 'react';
import Card from '@mui/material/Card';
import {useNavigate} from "react-router-dom"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { goToDetailPage } from '../../Routes/Coordinator';
import Types from './TypeStack';
import { Text } from '@chakra-ui/react';
import { StyleButtons } from './PokemonCardStyle';
import { PokemonContext } from '../../Contexts/PokemonContext';

export default function PokeCard(props) {

  const navigate = useNavigate()
  const context = React.useContext(PokemonContext)
  const {pokemons, pokemonDetail, setPokemonDetail} = context
  
  const UpperCaseFirstLetter = ([ first, ...rest ]) =>
  first === undefined ? '' : first.toUpperCase() + rest.join('')

  const capture = (name) => {
    const listPokemon = [...props.pokemons]
    const verify = listPokemon.find((pokemon) => pokemon.data.name === name)
    const listPokedex = [...props.pokedex , verify]
    props.setPokedex(listPokedex)
    const newListPokemon = [...props.pokemons]
    const indexPokemon = newListPokemon.findIndex((pokemon) => pokemon.data.name === name)
    newListPokemon.splice(indexPokemon,1)
    props.setPokemons(newListPokemon)
  }

  const clickDetail = (name) => {
    const pokemon = pokemons.find((pokemon) => pokemon.data.name === name)
    setPokemonDetail(pokemon)
    goToDetailPage(navigate)
  } 

  return (
    <Card sx={{ width: "100%"}}>
      <CardActionArea>
        <CardMedia
          border="2px solid black"
          component="img"
          height="100px"
          width="100px"
          image={props.image}
          alt={props.name}
        /> 
      </CardActionArea>
      <CardContent>
            <Typography gutterBottom variant="h7" component="div">
                #{props.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {UpperCaseFirstLetter(props.name)}
            </Typography>
              <Types types={props.types}/>
        </CardContent>
      <StyleButtons>
        <section>
          <Text as='u' variante="text" size="small" onClick={()=>clickDetail(props.name)} >
            Detalhes
          </Text>
          <Button 
          onClick={()=>capture(props.name)}
          size="medium" 
          color="primary" 
          sx={{height: "3em", width: "9em", backgroundColor: "#FFFFFF", color: "#0F0F0F", borderRadius: "8px"}}>
            Capturar
          </Button>
        </section>
      </StyleButtons>
      
    </Card>
  );
}
