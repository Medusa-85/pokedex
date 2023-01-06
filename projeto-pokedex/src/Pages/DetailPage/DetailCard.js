import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Progress,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useContext } from 'react';
  import {useNavigate} from "react-router-dom"
import { PokemonContext } from '../../Contexts/PokemonContext';
  import { goToDetailPage } from '../../Routes/Coordinator';
  
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
            <Box
            maxW={'320px'}
            w={'282px'}
            h={'282px'}
            bg={'pink'}
            borderRadius={'8px'}
            textAlign={'center'}>
                <Avatar
                    size={''}
                    src={props.image}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                />
            </Box>
            <Box
            maxW={'320px'}
            w={'282px'}
            h={'282px'}
            bg={'pink'}
            borderRadius={'8px'}
            textAlign={'center'}>
                <Avatar
                    size={''}
                    src={props.image}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                />
            </Box>
            <Box
            maxW={'320px'}
            w={'343px'}
            h={'613px'}
            bg={'white'}
            borderRadius={'8px'}
            textAlign={'center'}>
                <h2>Base stats</h2>
                <h3>Test<div></div></h3>
                <Stack spacing={5}>
                    <Progress colorScheme='green' size='sm' value={20} />
                    <Progress colorScheme='green' size='md' value={20} />
                    <Progress colorScheme='green' size='lg' value={20} />
                    <Progress colorScheme='green' height='32px' value={20} />
                </Stack>
            </Box>
            <section>
                <h3>#{pokemonDetail.data.id}<div></div></h3>
                <h2>{UpperCaseFirstLetter(pokemonDetail.data.name)}</h2>
                <h2>{pokemonDetail.data.types[0].type.name}</h2>
                <Box
                position={'absolute'}
                marginBottom={'26px'}
                w={'292px'}
                h={'453px'}
                bg={'white'}
                borderRadius={'8px'}
                textAlign={'center'}>
                    <h2>Moves</h2>
                </Box>
            </section>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                
            </Stack>
        </Box>
      </Center>
    );
  }