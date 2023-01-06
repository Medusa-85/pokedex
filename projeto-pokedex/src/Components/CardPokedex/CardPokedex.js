import * as React from 'react';
import {useContext} from "react"
import Card from '@mui/material/Card';
import {useNavigate} from "react-router-dom"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { goToDetailPage } from '../../Routes/Coordinator';
import { PokemonContext } from "../../Contexts/PokemonContext.js";
import Types from "../../Components/PokemonCard/TypeStack.js";
import { CoPresentOutlined } from '@mui/icons-material';
import DeleteButton from '../DeleteButton';

export default function CardPokedex(props) {

  const navigate = useNavigate()

  const context = useContext(PokemonContext)
  const {pokedex, setPokedex, setPokemons, pokemons} = context

  const UpperCaseFirstLetter = ([ first, ...rest ]) =>
    first === undefined ? '' : first.toUpperCase() + rest.join('')
  

  const deletePokemon = (name) => {
    const listPokedex = [...pokedex]
        
    const verify = listPokedex.find((pokemon) => pokemon.data.name === name)

    const listPokemon = [...pokemons, verify]
    props.setPokemons(listPokemon)
    
    const newListPokedex = [...pokedex]
    const indexPokemon = newListPokedex.findIndex((pokemon) => pokemon.data.name === name)
    newListPokedex.splice(indexPokemon,1)
    props.setPokedex(newListPokedex)
    
    
  }
  
  
  return (
    <Card sx={{ width: "100%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h7" component="div">
                #{props.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {UpperCaseFirstLetter(props.name)}
            </Typography>
              <Types types={props.types}/>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variante="text" size="small" onClick={()=>goToDetailPage(navigate)} >
          Detalhes
        </Button>
      </CardActions>
      <CardActions>
        {/* <DeleteButton/> */}
        <Button onClick={()=>deletePokemon(props.name)} size="medium" color="primary" sx={{height: "3em", width: "9em" , backgroundColor: "blue"}}>
          Excluir
        </Button>
      </CardActions>
    </Card>
  );
}