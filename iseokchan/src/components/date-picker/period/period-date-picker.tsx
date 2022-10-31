import { Alert, AlertIcon, HStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";

import { PeriodRadioCardGroup } from "src/components/radio-card-group";

import { DatePickerBase } from "../base";
const UnstyledCustomTimeInput = ({
  className,
  date,
}: {
  className?: string;
  date: Date | null;
}) => {
  return date ? (
    <PeriodRadioCardGroup className={className} date={date} />
  ) : (
    <div className={className}>
      <Alert status="warning">
        <AlertIcon />
        날짜를 선택해주세요.
      </Alert>
    </div>
  );
};

const CustomTimeInput = styled(UnstyledCustomTimeInput)`
  margin: 0.5em;
`;

const UnstyledPeriodDatePicker = ({ className }: { className?: string }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <HStack className={className}>
      <DatePickerBase
        variant="light"
        popperPlacement="top"
        timeInputLabel="교시 선택"
        dateFormat="yyyy-MM-dd hh시 mm분"
        selected={selectedDate}
        onChange={(date) => {
          // setSelectedDate(date);
        }}
        shouldCloseOnSelect={false}
        showTimeInput
        customTimeInput={<CustomTimeInput date={selectedDate} />}
      />
    </HStack>
  );
};

export const PeriodDatePicker = styled(UnstyledPeriodDatePicker)``;
