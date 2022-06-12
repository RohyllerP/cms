import {
    Box,
    Heading,
    Text,
    Grid,
    Flex,
    Wrap,
    Button,
    Image,
    Stack,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from 'next/link';

function Estudiantes(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("white", "colors.quinto");
    return (
        <Box py="10em">
            <Box w={['100%', '100%', '50%', '50%']} rounded="2xl" mx="auto" bg={bg} align="center">
                <Box p="30px">
                    <Box bg="colors.cuarto" >
                        <Heading color="white" p="8px" as="h1" fontSize={{ base: '25px', md: '30px', lg: '36px' }} mt="5px" mb="20px">{props.Title}</Heading>
                    </Box>
                    <Stack spacing="30px" pt="20px">
                        <FormControl id='id-nombre' isRequired onSubmit={props.handleSubmit}>
                            <FormLabel fontSize={{ base: '15px', md: '20px', lg: '22px' }} fontWeight="400">Ingresa tu nombre</FormLabel>
                            <Input placeholder='Nombre' />
                        </FormControl>
                        <FormControl id='id-cedula' isRequired>
                            <FormLabel fontSize={{ base: '15px', md: '20px', lg: '22px' }} fontWeight="400">Ingresa tu cedula</FormLabel>
                            <Input placeholder='Cedula' />
                        </FormControl>
                        <Box>
                            <Button w="100%" variant="primary" type="submit">Iniciar Sesión</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
export default Estudiantes;