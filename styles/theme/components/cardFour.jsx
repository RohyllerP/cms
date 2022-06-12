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
import Link from 'next/link'

const TitleTwo = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("white", "colors.quinto");
	return(
		<Box>
			<Box bg={bg}>
				<Box bg="#232323" p="20px"></Box>
				<Box p="20px">
					<Text>{props.text}</Text>
				</Box>
			</Box>
		</Box>
	)
}
export default TitleTwo;