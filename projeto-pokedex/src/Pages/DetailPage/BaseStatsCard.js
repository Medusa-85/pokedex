import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LinearProgress} from '@mui/material';
import { PokemonContext } from '../../Contexts/PokemonContext';


export default function BaseStatsCard() {
  const context = React.useContext(PokemonContext)
  const {pokemons, pokemonDetail} = context

  const UpperCaseFirstLetter = ([ first, ...rest ]) =>
  first === undefined ? '' : first.toUpperCase() + rest.join('')

  const baseStats = pokemonDetail.data.stats.map((statsP) => {
    return (
        <span key={statsP.stat.name}>
            <h5 > {statsP.stat.name.toUpperCase()} </h5>
            <h5 > {statsP.base_stat} </h5>
            <LinearProgress variant="determinate" value={statsP.base_stat} />
        </span>
    )
  })

  return (
    <Card sx={{ minWidth: 275, height:613, width: 343, borderRadius: '12px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="#000000" gutterBottom>
          Base Stats
        </Typography>
        <Typography variant="body2">
          {baseStats}
        </Typography>
      </CardContent>
    </Card>
  );
}