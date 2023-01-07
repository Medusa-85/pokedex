import * as React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonP from '../Button';
import { StyleHeader } from './HeaderStyle';
import { goToPokedex, goToListPage } from '../../Routes/Coordinator';
import DeleteButton from '../DeleteButton';
import Typography from '@mui/material/Typography';
import { StyleDetail } from '../../Pages/DetailPage/DetailStyle';
import { Stack, Text, Button } from '@chakra-ui/react'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  

  const verifyLocation = () => {
    switch (location.pathname) {
      case "/":
        return (<ButtonP onClick={()=>goToPokedex(navigate)} size="medium" color="primary" sx={{height: "3em", width: "9em" , backgroundColor: "blue"}}>
          Pokedex
        </ButtonP>);
      case "/detalhes":
        return (<><DeleteButton/></>);
      default: 
        return (<div></div>)
    }
  }

  const verifyLocation2 = () => {
    switch (location.pathname) {
      case "/pokedex":
        return (
          <Typography sx={{color: 'black'}} onClick={()=>goToListPage(navigate)}>Todos os Pokemons</Typography>
        );
      case "/detalhes":
        return (
          <>
          <Typography sx={{color: 'black'}} onClick={()=>goToListPage(navigate)}>Todos os Pokemons</Typography>
          </>
        ); 
        default: 
        return (  
          <div></div>
        )
    }
  }
      
    
  return (
    <Box sx={{ flexGrow: 1 , marginBottom: "2em" }}>
      <AppBar position="static" sx={{backgroundColor:"white"}}>
        <Toolbar>
            <StyleHeader>
                {verifyLocation2()}
                <Box component="img" src="/assets/Logo_Pokemon.png" width="307px" height="113px" marginTop='21px'/>
                {verifyLocation()}
            </StyleHeader>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
