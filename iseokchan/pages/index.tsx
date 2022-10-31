import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, VStack } from "@chakra-ui/react";

import type { NextPage } from "next";

type MenuProps = {
  name: string;
  iconSrc: string;
};
const Menu = ({ name, iconSrc }: MenuProps) => (
  <Flex direction="column" alignItems="center" shadow="md" borderWidth="1px">
    <Flex boxSize="sm">
      <Image src={iconSrc} alt={name} style={{ margin: "auto" }}></Image>
    </Flex>
    <Box>{name}</Box>
  </Flex>
);

const Footer = () => <Flex>wefwefwefwe</Flex>;

const Home: NextPage = () => {
  return (
    <>
      <Flex
        height="100%"
        width="100%"
        px={10}
        py={3}
        direction="column"
        backgroundImage="url('/images/background.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        alignItems="flex-start"
        justifyContent="center"
        pt={10}
      >
        <Heading as="h1" size="lg" noOfLines={1}>
          강원과학고등학교 자기주도학습 관리 플랫폼 이석찬
        </Heading>
        <VStack>
          <Button
            colorScheme="teal"
            variant="solid"
            rightIcon={<ArrowForwardIcon />}
          >
            이석 신청
          </Button>
        </VStack>
      </Flex>
      {/* <HStack>
            <Menu name="이석 신청" iconSrc="/images/iseok_apply.png" />
            <Menu name="이석 확인" iconSrc="/images/iseok_check.png" />
            <Menu name="이석 관리" iconSrc="/images/iseok_manage.png" />
          </HStack> */}
    </>
  );
};

export default Home;
