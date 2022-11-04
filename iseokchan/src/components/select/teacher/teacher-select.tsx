import { Alert, AlertIcon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GridLoader } from "react-spinners";

import { useTeacherList } from "src/hooks";

import { PrimaryKeyOption, PrimaryKeySelect } from "../base";

import type { SingleValue } from "chakra-react-select";

type TeacherSelectProps = {
  name: string;
  value: number;
  handleChange?: (option: SingleValue<PrimaryKeyOption>) => void;
};

const UnstyledTeacherSelect = ({
  name,
  value,
  handleChange,
}: TeacherSelectProps) => {
  const { data, error } = useTeacherList();

  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        지도교사 목록을 불러올 수 없어요.
      </Alert>
    );

  if (!data) {
    return <GridLoader />;
  }

  return (
    <PrimaryKeySelect
      name={name}
      value={value}
      options={data.teacherList.map((teacher) => ({
        label: teacher.name,
        value: teacher.id,
      }))}
      onChange={handleChange}
      placeholder="학생을 선택하세요."
      closeMenuOnSelect={false}
      size="sm"
    />
  );
};

export const TeacherSelect = styled(UnstyledTeacherSelect)``;
