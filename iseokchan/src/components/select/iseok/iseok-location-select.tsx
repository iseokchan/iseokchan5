import styled from "@emotion/styled";
import { CreatableSelect } from "chakra-react-select";

import type { SingleValue } from "chakra-react-select";

type IseokLocationOption = {
  label: string;
  value: string;
};

type IseokLocationSelectProps = {
  name: string;
  value: string;
  handleChange?: (option: SingleValue<IseokLocationOption>) => void;
};

const UnstyleIseokLocationSelect = ({
  name,
  value,
  handleChange,
}: IseokLocationSelectProps) => (
  <CreatableSelect<IseokLocationOption>
    name={name}
    instanceId={name}
    options={["집", "병원", "1-1반"].map((s) => ({ label: s, value: s }))}
    value={
      value
        ? {
            label: value,
            value: value,
          }
        : undefined
    }
    onChange={handleChange}
    placeholder="이석 장소를 입력하세요."
    closeMenuOnSelect={false}
    size="sm"
    formatCreateLabel={(inputValue) => `${inputValue}로 입력할까요?`}
  />
);

export const IseokLocationSelect = styled(UnstyleIseokLocationSelect)``;
