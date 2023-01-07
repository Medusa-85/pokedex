import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PokemonContext } from '../../Contexts/PokemonContext';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


export default function MovesCard() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#ECECEC',
        border: '1px dashed rgba(0, 0, 0, 0.14)',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

  const context = React.useContext(PokemonContext)
  const {pokemons, pokemonDetail} = context

  /*const FiveFristsMoves = () => {
    for (let i=1; i=5 ; i++){
        
    }
  }*/ 

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="#000000" gutterBottom>
          Moves:
        </Typography>
        <div>
            <Stack direction="row" spacing={2}>
                {pokemonDetail.data.types.map((typesP) => {
                    return (
                        <Item 
                        maxWidth='100%' 
                        h='31px' 
                        bg='#ECECEC' 
                        border= '1px dashed rgba(0, 0, 0, 0.14)'
                        borderRadius='12px'
                        key={typesP.type.name}
                        width= '102px'
                        height= '37px'
                        >
                            {typesP.type.name}
                        </Item>
                    )
                })}
            </Stack>
        </div>
        
        
      </CardContent>
    </Card>
  );
}