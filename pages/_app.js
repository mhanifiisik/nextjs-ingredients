import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "../Context/MainContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ContextProvider>
  );
}

export default MyApp;
