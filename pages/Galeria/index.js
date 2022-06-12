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
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Carousel } from 'react-bootstrap';
import Head from "next/head";

function Galeria() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("colors.secondary", "colors.quinto");
    return (
        <Box>
            <Box>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                        crossOrigin="anonymous"
                    />
                    <title>Galeria de fotos</title>
                </Head>
            </Box>
            <Box>
                <Box w="9.5em" m="2em" color="white">
                    <Heading p="15px" bg={bg} rounded="3xl">Galeria</Heading>
                </Box>
                <Box my="5em" mx={['0', '0', '3em', '3em']}>
                    <Box>
                        <Carousel control={false} fade>
                            <Carousel.Item interval={6000}>
                                <Image
                                    src="/img/promofoto1.png"
                                    alt="promo colegio maria santisima"
                                    width={2000}
                                    height={500}
                                    objectFit="cover"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <Image
                                    src="/img/promofoto2.png"
                                    alt="promo colegio maria santisima"
                                    width={2000}
                                    height={500}
                                    objectFit="cover"
                                    objectPosition="bottom"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <Image
                                    src="/img/promofoto3.png"
                                    alt="promo colegio maria santisima"
                                    width={2000}
                                    height={500}
                                    objectFit="cover"
                                    objectPosition="bottom"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <Image
                                    src="/img/promofoto4.png"
                                    alt="promo colegio maria santisima"
                                    width={2000}
                                    height={500}
                                    objectFit="cover"
                                    objectPosition="bottom"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <Image
                                    src="/img/promofoto5.png"
                                    alt="promo colegio maria santisima"
                                    width={2000}
                                    height={500}
                                    objectFit="cover"
                                    objectPosition="bottom"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <Image
                                    src="/img/promofoto6.png"
                                    alt="promo colegio maria santisima"
                                    width={2000}
                                    height={500}
                                    objectFit="cover"
                                    objectPosition="bottom"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Galeria;