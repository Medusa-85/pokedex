import * as React from 'react';
import {goToPokedex} from "../Routes/Coordinator.js"
import {useNavigate} from "react-router-dom"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export default function ButtonP() {
    const navigate = useNavigate()

  return (
    <Stack spacing={2} direction="row" alignItems="center">
        <Button 
        variant="contained" 
        onClick={()=>goToPokedex(navigate)} 
        sx={{height: "3em", width: "9em" , backgroundColor: "#33A4F5"}}
        >   
          Pokédex     
        </Button>
    </Stack>
  );
}
