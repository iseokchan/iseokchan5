import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GridLoader } from "react-spinners";

import { usePeriodsOfDate } from "src/hooks";

import { PeriodCheckboxCard } from "./period-checkbox-card";

import { CheckboxCardGroupBase } from "../base";

type PeriodCheckBoxCardGroupProps = {
  className?: string;
  date: Date;
};

const UnstyledPeriodCheckBoxCardGroup = ({
  className,
  date,
}: PeriodCheckBoxCardGroupProps) => {
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

  return (
    <CheckboxCardGroupBase className={className}>
      {data.map((period) => (
        <PeriodCheckboxCard key={period.id} period={period} />
      ))}
    </CheckboxCardGroupBase>
  );
};

export const PeriodCheckBoxCardGroup = styled(UnstyledPeriodCheckBoxCardGroup)`
  height: 200px;
  padding: 1em;
  overflow-y: auto;
`;
