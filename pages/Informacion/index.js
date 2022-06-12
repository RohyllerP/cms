import { 
Box,
Heading,
Text,
Grid,
Flex,
Wrap,
Image,
useColorModeValue,
} from "@chakra-ui/react";
import Title from "../../styles/theme/components/cardOne";
import Head from "next/head";

function Informacion(){
    const bg = useColorModeValue("white","colors.quinto");

    return(
        <Box>
            <Box>
                <Head>
                    <title>Información</title>
                </Head>
                <Box bg={bg} my="4em" mx={['0','0','5em','5em']}>
                <Title 
                titulo="Más información" 
                text="El presente proyecto de grado está enfocado en diseñar un portal 
                web sobre la calidad evaluativa online del docente, de 5to año sección A,
                del Colegio María Santísima, mediante esta, se captará la fortaleza y 
                debilidades del desempeño de los docentes en el ámbito profesional, 
                corregir las debilidades y mejorar la calidad y los servicios que brinda 
                la institución. En este portal web, se puede ingresar cada uno de los 
                módulos respectivos para estudiantes y administración, es decir,
                ayudará a obtener la solución de una manera más rápida y precisa por medio de
                la tecnologias de información usando el internet como medio de comuncación dando
                como producto final reportes en formato PDF, clasificados por diferentes parámentros
                hacia los directivos del colegio."/>
                    <Box p="20px">
                      
                    </Box>
                    <Box>
                        <Image 
                        src="/img/logo2.jpg"
                        width={1200}
                        height={300}
                        alt="Imagen del colegio"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Informacion;
