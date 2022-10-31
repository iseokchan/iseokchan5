import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { formatDate } from "src/utils";

import { CheckboxCardBase } from "../base";

import type { ReactNode } from "react";

type Period = {
  id: number;
  name: string;
  startTime: Date;
  endTime: Date;
};

type PeriodCheckboxCardProps = {
  className?: string;
  period: Period;
};

const UnstyledPeriodCheckboxCardHeader = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => <Text className={className}>{children}</Text>;

const PeriodCheckboxCardHeader = styled(UnstyledPeriodCheckboxCardHeader)`
  font-weight: bold;
  font-size: 1rem;
`;

const UnstyledPeriodCheckboxCardContent = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => <Text className={className}>{children}</Text>;

const PeriodCheckboxCardContent = styled(UnstyledPeriodCheckboxCardContent)`
  font-size: 0.8rem;
`;

const UnstyledPeriodCheckboxCard = ({
  className,
  period,
}: PeriodCheckboxCardProps) => (
  <CheckboxCardBase className={className} value={period.name}>
    <PeriodCheckboxCardHeader>{period.name}</PeriodCheckboxCardHeader>
    <PeriodCheckboxCardContent>
      {formatDate(period.startTime, "HH시 mm분")}
      &nbsp;~&nbsp;
      {formatDate(period.endTime, "HH시 mm분")}
    </PeriodCheckboxCardContent>
  </CheckboxCardBase>
);

export const PeriodCheckboxCard = styled(UnstyledPeriodCheckboxCard)`
  padding: 0.75em;
  border: 2px solid gray;
  border-radius: 15px;
  margin: 0 !important;
`;
