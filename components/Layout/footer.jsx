import { 
Box, 
Heading,
Flex,
Text,
Center,
useColorMode,
useColorModeValue, 
} from "@chakra-ui/react";
import Image from 'next/image';

export default function Footer(){
	const { colorMode, toggleColorMode } = useColorMode();
  	const bg = useColorModeValue("colors.cuarto","");
  	const bgTwo = useColorModeValue("white","colors.quinto");
	return(
		<Box>
			<Flex bg={bgTwo}>
				<Box  p="10px">
				    <Box cursor="pointer">
						<Image src="/img/logo2.png"
						alt="Logo del colegio Maria santisima"
						width={70}
						height={70} />
					</Box>
				</Box>
				<Box pt="5px">
					<Text color="gris" fontWeight="600">U.E Colegio María Santísima</Text>	
					<Box display="flex">
						<Text fontSize="md" fontWeight="600" pr="2">Dirección:</Text>
						<Text fontSize="md">Urb. El Recreo, Av. El Placer con calle Los Naranjos. Cabudare.. Lara</Text>		
					</Box>
					<Box display="flex">
						<Text fontSize="md" fontWeight="600" pr="2">Teléfono:</Text>
						<Text fontSize="md">(+58) 251-262.00.81</Text>		
					</Box>
				</Box>
			</Flex>
			<Box p="20px" bg={bg}>
				<Center>
			    	<Heading 
			    	color="white" 
			    	fontWeight="400" 
			    	as="h3" 
			    	size="xs">U.E. COLEGIO MARIA SANTISIMA | Diseñado por Rohyller Pereira</Heading>
			    </Center>
			</Box>
		</Box>
	)
}