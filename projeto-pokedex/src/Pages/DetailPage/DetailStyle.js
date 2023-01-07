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

export const StyleDetailCard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 613px;
    margin-left: 40px;
        
    div{
        display: flex;
        justify-content: center;     
        align-items: center;
        border-radius: 8px;
        width: 282px;
        height: 282px;
       
    }
    img{
        width: 70%;
    } 
`
export const BarBaseStats = styled.span`
    height: 10px;
    border-radius: 8px;

`