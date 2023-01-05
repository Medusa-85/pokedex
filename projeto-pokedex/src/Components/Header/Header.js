import * as React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonP from '../Button';
import { StyleHeader } from './HeaderStyle';
import { goToPokedex, goToListPage } from '../../Routes/Coordinator';

export default function Header() {

  const location = useLocation()
  const navigate = useNavigate()

  const verifyLocation = () => {
    switch (location.pathname) {
      case "/":
        return (<ButtonP onClick={()=>goToPokedex(navigate)} size="medium" color="primary" sx={{height: "3em", width: "9em" , backgroundColor: "blue"}}>
          Pokedex
        </ButtonP>);
      case "/pokedex":
        return (<button onClick={()=>goToListPage(navigate)}>
          Home
        </button>);
      default: 
        return (
          <div>
            <button onClick={()=>goToListPage(navigate)}>
            Home
            </button>
            <ButtonP onClick={()=>goToPokedex(navigate)} size="medium" color="primary" sx={{height: "3em", width: "9em" , backgroundColor: "blue"}}>
            Pokedex
            </ButtonP>
          </div>
        )
    }
  }
    
  return (
    <Box sx={{ flexGrow: 1 , marginBottom: "2em" }}>
      <AppBar position="static" sx={{backgroundColor:"white"}}>
        <Toolbar>
            <StyleHeader>
                <div></div>
                <Box component="img" src="/assets/Logo_Pokemon.png" width="307px" height="113px"/>
                {verifyLocation()}
            </StyleHeader>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
