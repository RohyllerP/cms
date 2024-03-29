import { 
Box,
} from "@chakra-ui/react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Head from "next/head";

export default function Layout({children,title,description}){
	return (
		<Box>
	      <Head>
	        <title>{title}</title>
	        <meta charSet="utf-8"/> 
	        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	        <link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
			<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
		  </Head>
	      <Navbar />
	      <main>{children}</main>
	      <Footer />
	    </Box>
	)
}

Layout.defaultProps = {
  title:"Inicio",
  description: "Conociendo las emociones de los profesores del Colegio 'María Santísima' "
}