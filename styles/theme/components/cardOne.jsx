import { 
Box,
Heading,
Text,
Grid,
Flex,
Center,
useColorMode,
useColorModeValue,  
} from "@chakra-ui/react";

const Title  = (props) => {
	return(
		<Box rounded="base">
			<Box bg="#232323">
				<Center>
					<Heading color="white">{props.titulo}</Heading> 
				</Center> 
			</Box>
			<Box p="20px">
				<Text>{props.text}</Text>
			</Box>
		</Box>
	)
}
export default Title;