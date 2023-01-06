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
  import {useNavigate} from "react-router-dom"
  import { goToDetailPage } from '../../Routes/Coordinator';
  
  export default function DetailCard(props) {
    const navigate = useNavigate()
  
    const UpperCaseFirstLetter = ([ first, ...rest ]) =>
    first === undefined ? '' : first.toUpperCase() + rest.join('')

        return (
      <Center py={6}>
        <Box 
        display={'flex'}
        justifyContent={'center'}
        w={'1389.14px'}
        h={'663px'}
        bg={'red'}
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
            bg={'pink'}
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
                <h3>id<div></div></h3>
                <h2>Nome do Pokemon</h2>
                <h2>Tipos</h2>
                <Box
                position={'absolute'}
                marginBottom={'26px'}
                w={'292px'}
                h={'453px'}
                bg={'pink'}
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