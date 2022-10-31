import {
  Box,
  Checkbox,
  Stack,
  useCheckbox,
  useId,
  useStyleConfig,
} from "@chakra-ui/react";

import type { BoxProps, UseCheckboxProps } from "@chakra-ui/react";

export type CheckboxCardBaseProps = {
  value: string;
  checkboxProps?: UseCheckboxProps;
} & BoxProps;

export const CheckboxCardBase = (props: CheckboxCardBaseProps) => {
  const { className, checkboxProps, children, ...rest } = props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useCheckbox(checkboxProps);
  const id = useId(undefined, "checkbox-card");
  const styles = useStyleConfig("RadioCard", props);

  return (
    <Box
      className={className}
      as="label"
      cursor="pointer"
      {...getLabelProps()}
      sx={{
        ".focus-visible + [data-focus]": {
          boxShadow: "outline",
          zIndex: 1,
        },
      }}
    >
      <input {...getInputProps()} aria-labelledby={id} />
      <Box sx={styles} {...getCheckboxProps()} {...rest}>
        <Stack direction="row">
          <Box flex="1">{children}</Box>
          <Checkbox
            pointerEvents="none"
            isFocusable={false}
            isChecked={state.isChecked}
            alignSelf="start"
          />
        </Stack>
      </Box>
    </Box>
  );
};
