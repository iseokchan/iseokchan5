import styled from "@emotion/styled";

import { DatePickerBase } from "../base";

type IseokDatePickerProps = {
  className?: string;
  value: Date | null;
  onChange?: (date: Date | null) => void;
};

const UnstyledIseokDatePicker = ({
  className,
  value,
  onChange,
}: IseokDatePickerProps) => {
  return (
    <DatePickerBase
      className={className}
      showTimeInput
      variant="light"
      popperPlacement="top"
      timeInputLabel="시간 선택"
      dateFormat="yyyy-MM-dd hh시 mm분"
      selected={value}
      onChange={(date) => {
        onChange?.(date);
      }}
      shouldCloseOnSelect={false}
    />
  );
};

export const IseokDatePicker = styled(UnstyledIseokDatePicker)``;
