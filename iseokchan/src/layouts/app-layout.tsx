import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Navbar } from "src/components";

const Footer = () => <Flex>wefwefwefwe</Flex>;

export const AppLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Flex direction="column" width="100vw" minHeight="100vh" pt={5}>
      <Navbar mb={5} />
      <Flex flex="0 1 auto" width="100%" height="100%" m={0} p={0}>
        {children}
      </Flex>
    </Flex>
    <Footer />
  </>
);
