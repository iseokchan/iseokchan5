// function RadioExample() {
//   const [value, setValue] = React.useState("1");
//   return (
//     <RadioGroup onChange={setValue} value={value}>
//       <Stack direction="row">
//         <Radio value="1">First</Radio>
//         <Radio value="2">Second</Radio>
//         <Radio value="3">Third</Radio>
//       </Stack>
//     </RadioGroup>
//   );
// }

import { Alert, AlertIcon, Radio, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GridLoader } from "react-spinners";

import { useIseokTypeList } from "src/hooks";

import { RadioGroupBase } from "./base";

type IseokTypeRadioGroupProps = {
  name: string;
  value: number;
  onChange: (nextValue: string) => void;
};

const UnstyledIseokTypeRadioGroup = ({
  name,
  value,
  onChange,
}: IseokTypeRadioGroupProps) => {
  const { data, error } = useIseokTypeList();

  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        이석 종류 목록을 불러올 수 없어요.
      </Alert>
    );

  if (!data) {
    return <GridLoader />;
  }

  if (data.iseokTypeList.length === 0)
    return (
      <Alert status="error">
        <AlertIcon />
        신청 가능한 이석 종류가 없어요.
      </Alert>
    );

  return (
    <RadioGroupBase name={name} onChange={onChange} value={value}>
      <Stack direction="row">
        {data.iseokTypeList.map((type) => (
          <Radio key={type.id} value={type.id}>
            {type.name}
          </Radio>
        ))}
      </Stack>
    </RadioGroupBase>
  );
};

export const IseokTypeRadioGroup = styled(UnstyledIseokTypeRadioGroup)``;
