import { Box, Button, ButtonGroup, Flex, Image, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";

import type { FlexProps } from "@chakra-ui/react";

const LogoWithSiteName = (props: FlexProps) => (
  <Flex alignItems="center" {...props}>
    <Box boxSize={10}>
      <Image src="/images/logo.png" alt="logo" />
    </Box>
    <Box ml={3}>이석찬</Box>
  </Flex>
);

const UnstyledNavbar = (props: FlexProps) => (
  <Flex px={5} {...props}>
    <NextLink href="/" passHref>
      <Link>
        <LogoWithSiteName mr={3} />
      </Link>
    </NextLink>
    <ButtonGroup variant="ghost" spacing="1">
      <NextLink href="/apply" passHref>
        <Link>
          <Button>이석 신청</Button>
        </Link>
      </NextLink>
      <NextLink href="/check" passHref>
        <Link>
          <Button>이석 신청</Button>
        </Link>
      </NextLink>
      <NextLink href="/manage" passHref>
        <Link>
          <Button>이석 신청</Button>
        </Link>
      </NextLink>
    </ButtonGroup>
  </Flex>
);

export const Navbar = styled(UnstyledNavbar)``;
