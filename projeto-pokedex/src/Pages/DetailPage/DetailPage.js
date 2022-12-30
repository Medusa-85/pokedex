import React from "react";
import { StyleDetail } from "./DetailStyle";
import { goToListPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import DetailBox from "./DetailBox"


export default function Detail() {
    const navigate = useNavigate()
    const excluir = () => {

    }

    return(
        <>
            <StyleDetail >
                <button onClick={()=>goToListPage(navigate)}>Todos os Pokémons</button>
                <button onClick={()=>excluir}>Excluir da Pokédex</button>  
            </StyleDetail>
            <DetailBox/>
        </>
    )
}