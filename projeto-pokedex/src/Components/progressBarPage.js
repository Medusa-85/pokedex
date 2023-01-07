import LinearProgress from '@mui/material/LinearProgress';
import React from "react";

export default function ProgressBar(){

    return(
        
        <LinearProgress variant="determinate" value={70} />
    )
}