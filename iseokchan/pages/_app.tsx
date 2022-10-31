import { ChakraProvider } from "@chakra-ui/react";

import { AppLayout } from "src/layouts";

import type { AppProps } from "next/app";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
