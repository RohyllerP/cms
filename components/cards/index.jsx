import { 
Box,
Heading,
Center,
} from "@chakra-ui/react";

export const Title = (props) => {
	return(
		<Box rounded="base">
			<Box bg="#232323">
				<Center>
					<Heading color="white">{props.titulo}</Heading> 
				</Center> 
			</Box>
		</Box>
	)
}
