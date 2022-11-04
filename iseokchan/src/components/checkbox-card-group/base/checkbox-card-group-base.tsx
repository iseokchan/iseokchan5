import { Stack, useCheckboxGroup } from "@chakra-ui/react";
import React from "react";

import { CheckboxCardBaseProps } from "./checkbox-card-base";

import type { StackProps, UseCheckboxGroupProps } from "@chakra-ui/react";

export type CheckboxCardGroupBaseProps = StackProps & UseCheckboxGroupProps;

export const CheckboxCardGroupBase = <
  CheckboxCardProps extends CheckboxCardGroupBaseProps = CheckboxCardGroupBaseProps
>({
  children,
  defaultValue,
  value,
  onChange,
  ...rest
}: CheckboxCardProps) => {
  const { getCheckboxProps } = useCheckboxGroup({
    defaultValue,
    value,
    onChange,
  });

  const cards = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<CheckboxCardBaseProps>>(React.isValidElement)
        .map((card) => {
          return React.cloneElement(card, {
            checkboxProps: getCheckboxProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getCheckboxProps]
  );

  return <Stack {...rest}>{cards}</Stack>;
};
