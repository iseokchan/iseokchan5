import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { formatDate } from "src/utils";

import { RadioCardBase } from "../base";

type Period = {
  id: number;
  name: string;
  startTime: Date;
  endTime: Date;
};

type PeriodRadioCardProps = {
  className?: string;
  period: Period;
};

const UnstyledPeriodRadioCardHeader = ({
  className,
  name,
}: {
  className?: string;
  name: string;
}) => <Text className={className}>{name}</Text>;

const PeriodRadioCardHeader = styled(UnstyledPeriodRadioCardHeader)`
  font-weight: bold;
  font-size: 1rem;
`;

const UnstyledPeriodRadioCardContent = ({
  className,
  startTime,
  endTime,
}: {
  className?: string;
  startTime: Date;
  endTime: Date;
}) => (
  <Text className={className}>
    {formatDate(startTime, "HH시 mm분")}
    &nbsp;~&nbsp;
    {formatDate(endTime, "HH시 mm분")}
  </Text>
);

const PeriodRadioCardContent = styled(UnstyledPeriodRadioCardContent)`
  font-size: 0.8rem;
`;

const UnstyledPeriodRadioCard = ({
  className,
  period,
}: PeriodRadioCardProps) => (
  <RadioCardBase className={className} value={period.name}>
    <PeriodRadioCardHeader name={period.name}></PeriodRadioCardHeader>
    <PeriodRadioCardContent
      startTime={period.startTime}
      endTime={period.endTime}
    ></PeriodRadioCardContent>
  </RadioCardBase>
);

export const PeriodRadioCard = styled(UnstyledPeriodRadioCard)`
  padding: 0.75em;
  border: 2px solid gray;
  border-radius: 15px;
  margin: 0 !important;
`;
