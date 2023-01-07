import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    HStack,
    Link,
    Progress,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import { LinearProgress} from '@mui/material';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import { PokemonContext } from '../../Contexts/PokemonContext';
import { goToDetailPage } from '../../Routes/Coordinator';
import BaseStatsCard from './BaseStatsCard';
import { BarBaseStats } from './DetailStyle';
import PhotosCard from './PhotosCard';
  
export default function DetailCard(props) {
const navigate = useNavigate()
const context = useContext(PokemonContext)
const {pokemons, pokemonDetail} = context

const UpperCaseFirstLetter = ([ first, ...rest ]) =>
first === undefined ? '' : first.toUpperCase() + rest.join('')

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
                                <Box 
                                maxWidth='100%' 
                                h='31px' 
                                bg='tomato' 
                                key={typesP.type.name}
                                >
                                    {typesP.type.name}
                                </Box>
                            )
                            })}
                        </Stack>
                    </div>
                </HStack>
                <Box
                position={'absolute'}
                marginBottom={'26px'}
                w={'292px'}
                h={'453px'}
                bg={'white'}
                borderRadius={'8px'}
                textAlign={'center'}>
                    <h2>Moves</h2>
                    <HStack spacing='24px'>
                    <div>
                        <Stack direction="row" spacing="7px">
                            {pokemonDetail.data.types.map((typesP) => {
                            return (
                                <Box 
                                maxWidth='100%' 
                                h='31px' 
                                bg='#ECECEC' 
                                border= '1px dashed rgba(0, 0, 0, 0.14)'
                                borderRadius='12px'
                                key={typesP.type.name}
                                width= '102px'
                                height= '37px'
                                >
                                    {typesP.type.name}
                                </Box>
                            )
                            })}
                        </Stack>
                    </div>
                </HStack>
                    
                </Box>
            </section>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                
            </Stack>
        </Box>
    </Center>
);
}