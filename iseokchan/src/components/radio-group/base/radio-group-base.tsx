import { RadioGroup } from "@chakra-ui/react";
import { ReactNode } from "react";

import { ErrorAlert } from "src/components/alert";

import type { UseRadioGroupProps } from "@chakra-ui/react";

type RadioGroupBaseProps = UseRadioGroupProps & {
  children?: ReactNode;
  error?: string | null;
};

export const RadioGroupBase = ({
  children,
  error,
  ...rest
}: RadioGroupBaseProps) => (
  <RadioGroup {...rest}>
    {children}
    {error && <ErrorAlert>{error}</ErrorAlert>}
  </RadioGroup>
);
