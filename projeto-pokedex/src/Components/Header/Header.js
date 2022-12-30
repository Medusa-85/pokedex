import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonP from '../Button';
import { StyleHeader } from './HeaderStyle';

export default function Header() {
    
  return (
    <Box sx={{ flexGrow: 1 , marginBottom: "2em" }}>
      <AppBar position="static" sx={{backgroundColor:"white"}}>
        <Toolbar>
            <StyleHeader>
                <div></div>
                <Box component="img" src="/assets/Pokemon-Logo-500x313.png" height="4em"/>
                <ButtonP>Pokédex</ButtonP>
            </StyleHeader>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
