import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Types (props) {
   
    
    const typesPokemon = props.types.map((typesP) => (typesP.type.name))

  return (
    <div>
      <Stack direction="row" spacing={2}>
        {props.types.map((typesP) => {
        return (
            <Item key={typesP.type.name}>{typesP.type.name}</Item>
        )
        })}
      </Stack>
    </div>
  );
}

// const typesPokemon = types.map((typesP) => (typesP.type.name))
//     console.log(typesPokemon)