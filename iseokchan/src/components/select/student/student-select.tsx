import { Alert, AlertIcon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GridLoader } from "react-spinners";

import { useStudentList } from "src/hooks/student";

import { PrimaryKeyOption, PrimaryKeySelect } from "../base";

import type { MultiValue } from "chakra-react-select";

type StudentSelectProps = {
  name: string;
  value: number;
  handleChange?: (option: MultiValue<PrimaryKeyOption>) => void;
};

const UnstyledStudentSelect = ({
  name,
  value,
  handleChange,
}: StudentSelectProps) => {
  const { data, error } = useStudentList();

  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        학생 목록을 불러올 수 없어요.
      </Alert>
    );

  if (!data) {
    return <GridLoader />;
  }

  return (
    <PrimaryKeySelect
      isMulti
      isLoading={!data}
      name={name}
      value={value}
      options={data.studentList.map((student) => ({
        label: student.fullName,
        value: student.id,
      }))}
      onChange={handleChange}
      placeholder="학생을 선택하세요."
      closeMenuOnSelect={false}
      size="sm"
    />
  );
};

export const StudentSelect = styled(UnstyledStudentSelect)``;
