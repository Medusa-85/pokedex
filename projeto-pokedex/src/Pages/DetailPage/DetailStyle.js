import styled from "styled-components";

export const StyleDetail = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;                                                                   
    justify-items: center; 
    align-items: center;
    height: 60px;
    

    button{
        border: solid salmon 1px;
        border-radius: 5px;
        background-color: salmon;
        height: 40px;
        color: white
    }
    button:hover{
        background-color: darkred;
        border: solid darkred 1px;
    }

`