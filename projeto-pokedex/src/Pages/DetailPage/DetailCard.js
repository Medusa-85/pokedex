import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Button,
    HStack,
    Link,
    Progress,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { LinearProgress} from '@mui/material';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import { PokemonContext } from '../../Contexts/PokemonContext';
import { goToDetailPage } from '../../Routes/Coordinator';
import BaseStatsCard from './BaseStatsCard';
import { BarBaseStats } from './DetailStyle';
import MovesCard from './MovesCard';
import PhotosCard from './PhotosCard';
  
export default function DetailCard(props) {
const navigate = useNavigate()
const context = useContext(PokemonContext)
const {pokemons, pokemonDetail} = context

const UpperCaseFirstLetter = ([ first, ...rest ]) =>
first === undefined ? '' : first.toUpperCase() + rest.join('')
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ECECEC',
    border: '1px solid rgba(0, 0, 0, 0.14)',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

return (
    
    <Center py={6}>
        <Box 
        display={'flex'}
        justifyContent={'center'}
        w={'1389.14px'}
        h={'663px'}
        bg={'lightgray'}
        borderRadius={'37.8857px'}
        >
            
            <PhotosCard/>
            <BaseStatsCard/>
            <section>
                <h3>{`#${pokemonDetail.data.id}`}</h3>
                <h2>{UpperCaseFirstLetter(pokemonDetail.data.name)}</h2>
                <HStack spacing='24px'>
                    <div>
                        <Stack direction="row" spacing="7px">
                            {pokemonDetail.data.types.map((typesP) => {
                            return (
                                <Item>{typesP.type.name}</Item>
                                // <Box 
                                // maxWidth='100%' 
                                // h='31px' 
                                // bg='tomato' 
                                // key={typesP.type.name}
                                // >
                                //     {typesP.type.name}
                                // </Box>
                            )
                            })}
                        </Stack>
                    </div>
                </HStack>
            <MovesCard/> 
            </section>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                
            </Stack>
        </Box>
    </Center>
);
}