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
	return(
		<Box>
			<Box  my="20px" bg="colors.secondary">
				<Center>
					<Text fontSize="2xl"  color="white">
						<Link href="#">
							<a>{props.titulo}</a>
						</Link>
					</Text> 
				</Center> 
				<Text>{props.text}</Text>
			</Box>
		</Box>
	)
}
export default TitleTwo;