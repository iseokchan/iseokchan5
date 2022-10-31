import { Alert, AlertIcon, Box, chakra, useRadio } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GridLoader } from "react-spinners";

import { usePeriodsOfDate } from "src/hooks";

import type { UseRadioProps } from "@chakra-ui/react";

type PeriodRadioCardGroupProps = {
  className?: string;
  date: Date;
};

const UnstyledPeriodRadioCardGroup = ({
  className,
  date,
}: PeriodRadioCardGroupProps) => {
  const { data, error } = usePeriodsOfDate(date);

  if (error) {
    return (
      <Box width="auto" mr={5}>
        <Alert status="error">
          <AlertIcon />
          교시 정보를 불러올 수 없어요.
        </Alert>
      </Box>
    );
  }

  if (!data) {
    return <GridLoader />;
  }

  if (data.length === 0) {
    return (
      <Box width="auto" mr={5}>
        <Alert status="error">
          <AlertIcon />
          이석 가능한 교시가 없어요.
        </Alert>
      </Box>
    );
  }

  const CustomRadio = (props: { name: string } & UseRadioProps) => {
    const { name, ...radioProps } = props;
    const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
      useRadio(radioProps);

    return (
      <chakra.label {...htmlProps} cursor="pointer">
        <input {...getInputProps({})} hidden />
        <Box
          {...getCheckboxProps()}
          bg={state.isChecked ? "green.200" : "transparent"}
          p={1}
          rounded="full"
        >
          {name[0]}
        </Box>
      </chakra.label>
    );
  };

  return (
    <div>
      {data.map((period) => (
        <CustomRadio key={period.id} name={period.name} />
      ))}
    </div>
    // <RadioCardGroupBase defaultValue="one" spacing="3">
    //   {["one", "two", "three"].map((option) => (
    //     <RadioCardBase key={option} value={option}>
    //       <Text color="emphasized" fontWeight="medium" fontSize="sm">
    //         Option {option}
    //       </Text>
    //       <Text color="muted" fontSize="sm">
    //         Jelly biscuit muffin icing dessert powder macaroon.
    //       </Text>
    //     </RadioCardBase>
    //   ))}
    // </RadioCardGroupBase>
  );
};

export const PeriodRadioCardGroup = styled(UnstyledPeriodRadioCardGroup)`
  height: 200px;
  padding: 1em;
  overflow-y: auto;
`;
