import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";

import { IseokApplyForm } from "src/components";

import "react-datepicker/dist/react-datepicker.css";

const ApplyPage: NextPage = () => {
  return (
    <Flex direction="column" alignItems="center" width="100%" pt={5} px={20}>
      <Stack spacing="5" width="100%">
        <Box>
          <Text fontSize="lg" fontWeight="medium">
            이석 신청
          </Text>
        </Box>
        <Divider />
        <IseokApplyForm />
      </Stack>
    </Flex>
  );
};

export default ApplyPage;
