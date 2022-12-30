import * as React from 'react';
import Card from '@mui/material/Card';
import {useNavigate} from "react-router-dom"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { goToDetailPage } from '../../Routes/Coordinator';

export default function PokeCard({name, image, id}) {

    const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
        <Typography gutterBottom variant="h7" component="div">
            #{id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variante="text" size="small" onClick={()=>goToDetailPage(navigate)} >
          Detalhes
        </Button>
      </CardActions>
      <CardActions>
        <Button size="medium" color="primary" sx={{height: "3em", width: "9em" , backgroundColor: "blue"}}>
          Capturar
        </Button>
      </CardActions>
    </Card>
  );
}