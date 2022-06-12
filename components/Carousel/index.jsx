import {
    Box,
    Heading,
    Text,
    Image,
} from "@chakra-ui/react";
import Head from "next/head";
import { Carousel } from 'react-bootstrap';

export default function Images() {
    return (
        <Box>
            <Box>
                <Box>
                    <Head>
                        <link
                            rel="stylesheet"
                            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                            crossOrigin="anonymous"
                        />
                    </Head>
                </Box>
                <Box>
                <Carousel control="false" fade>
                    <Carousel.Item interval={6000}>
                        <Image
                            src="/img/homefoto1.png"
                            alt="promo de grado colegio maria santisima"
                            width={2000}
                            height={400}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={6000}>
                        <Image
                            src="/img/homefoto2.png"
                            alt="proyecto de grado colegio maria santisima"
                            width={2000}
                            height={400}
                            objectPosition="bottom"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={6000}>
                        <Image
                            src="/img/homefoto3.png"
                            alt="proyecto de grado colegio maria santisima"
                            width={2000}
                            height={400}
                        />
                    </Carousel.Item>
                </Carousel>
                </Box>
            </Box>
        </Box>
    )
}
