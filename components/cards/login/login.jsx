import {
    Box,
    Heading,
    Text,
    Stack,
    Flex,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

const Login = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("white","colors.quinto");
    return (
        <Box py="10em">
            <Box w="50%" rounded="2xl"  mx="auto" bg={bg} align="center">
                <Box p="30px">
                    <Heading mt="5px">{props.Title}</Heading>
                    <Stack spacing="30px">
                        <FormControl id='id-nombre' isRequired>
                            <FormLabel fontWeight="600">Nombre</FormLabel>
                            <Input placeholder='Nombre' />
                        </FormControl>
                        <FormControl id='id-cedula' isRequired>
                            <FormLabel fontWeight="600">Cedula</FormLabel>
                            <Input placeholder='Cedula' />
                        </FormControl>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
export default Login;