import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { GridLoader } from "react-spinners";

import {
  ErrorAlert,
  IseokDatePickerField,
  IseokLocationSelectField,
  IseokReasonField,
  IseokTypeRadioGroupField,
  StudentSelectField,
  TeacherSelectField,
  WarningAlert,
} from "src/components";
import { useIseokApplyMeta } from "src/hooks";

import type { FormikHelpers } from "formik";

export const IseokApplyForm = () => {
  const { data: iseokApplyMeta, error: iseokApplyMetaError } =
    useIseokApplyMeta();

  if (iseokApplyMetaError) {
    return <ErrorAlert>이석 신청 정보를 불러오는데에 실패했어요.</ErrorAlert>;
  }

  if (!iseokApplyMeta) {
    return <GridLoader />;
  }

  if (iseokApplyMeta.iseokTypeList.length == 0) {
    return (
      <WarningAlert>
        신청 가능한 이석 종류가 없어요. 관리자에게 문의하세요.
      </WarningAlert>
    );
  }

  return (
    <Formik
      initialValues={{
        iseokType: iseokApplyMeta.iseokTypeList[0].id,
        startTime: new Date(),
        endTime: new Date(),
      }}
      validate={(values) => {
        const errors = {};

        return errors;
      }}
      onSubmit={function (
        values: { iseokType: number; startTime: Date; endTime: Date },
        formikHelpers: FormikHelpers<{
          iseokType: number;
          startTime: Date;
          endTime: Date;
        }>
      ): void | Promise<any> {
        throw new Error("Function not implemented.");
      }}
    >
      {({ handleSubmit, values, errors }) => (
        <VStack>
          <FormControl py={1}>
            <FormLabel>이석 종류</FormLabel>
            <IseokTypeRadioGroupField name="iseokType" />
          </FormControl>
          <FormControl py={1}>
            <FormLabel>신청 학생</FormLabel>
            <StudentSelectField name="students" />
          </FormControl>
          <FormControl py={1}>
            <FormLabel>지도교사</FormLabel>
            <TeacherSelectField name="teacher" />
          </FormControl>
          <FormControl py={1}>
            <FormLabel>이석 장소</FormLabel>
            <IseokLocationSelectField name="location" />
          </FormControl>
          <FormControl py={1}>
            <FormLabel>시작 시각</FormLabel>
            <IseokDatePickerField name="startTime" />
          </FormControl>
          <FormControl py={1}>
            <FormLabel>종료 시각</FormLabel>
            <IseokDatePickerField name="endTime" />
          </FormControl>
          <FormControl py={1}>
            <FormLabel>이석 사유</FormLabel>
            <IseokReasonField name="reason" />
          </FormControl>
          <Flex justifyContent="flex-end" width="100% ">
            <HStack spacing={1}>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  handleSubmit();
                }}
              >
                이석 신청
              </Button>
              <Button colorScheme="teal" size="sm">
                바로 승인
              </Button>
            </HStack>
          </Flex>
        </VStack>
      )}
    </Formik>
  );
};
