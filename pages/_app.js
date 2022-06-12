import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import Layout from "../components/Layout/index";
import { theme } from '../styles/theme/index.js';

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </Layout>
      </ChakraProvider>
  )
}

export default MyApp
