import React from "react";
import {useNavigate} from "react-router-dom"
import {goToListPage} from "../../Routes/Coordinator.js"
import axios from "axios";
import Header from "../../Components/Header/Header.js";

export default function Pokedex() {
    const navigate = useNavigate()
    

    return(
        <>
            <Header/>
            <h1>Pokedex</h1>
            <button onClick={()=>goToListPage(navigate)}>Página Inicial</button>

        </>
    )
}