import { Alert, AlertIcon } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { useIseokTypeList } from "src/hooks";

import { PrimaryKeyOption, PrimaryKeySelect } from "../base";

import type { SingleValue } from "chakra-react-select";

type IseokTypeSelectProps = {
  name: string;
  value: number;
  handleChange?: (option: SingleValue<PrimaryKeyOption>) => void;
};

const UnstyledIseokTypeSelect = ({
  name,
  value,
  handleChange,
}: IseokTypeSelectProps) => {
  const { data, error } = useIseokTypeList();

  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        이석 종류 목록을 불러올 수 없어요.
      </Alert>
    );

  return (
    <PrimaryKeySelect
      name={name}
      isLoading={!data}
      options={data?.map((t) => ({
        label: t.name,
        value: t.id,
      }))}
      value={value}
      onChange={handleChange}
      placeholder="이석 종류를 선택하세요."
      closeMenuOnSelect={false}
      size="sm"
    />
  );
};

export const IseokTypeSelect = styled(UnstyledIseokTypeSelect)``;
