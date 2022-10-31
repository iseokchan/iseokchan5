import { useId } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { RefAttributes } from "react";

import type {
  GroupBase,
  OptionsOrGroups,
  Props,
  PropsValue,
  SelectInstance,
} from "chakra-react-select";

export type PrimaryKeyOption = {
  label: string;
  value: number;
};

export const PrimaryKeySelect = <
  IsMulti extends boolean = false,
  Group extends GroupBase<PrimaryKeyOption> = GroupBase<PrimaryKeyOption>
>({
  name,
  value,
  options,
  ...props
}: { value: PrimaryKeyOption["value"] } & Omit<
  Props<PrimaryKeyOption, IsMulti, Group> &
    RefAttributes<SelectInstance<PrimaryKeyOption, IsMulti, Group>>,
  "value"
>) => {
  const id = useId(undefined, name);
  const instanceId = useId(undefined, name);
  const inputId = useId(undefined, name);

  const getSelectedOption = (
    selectedValue: PrimaryKeyOption["value"],
    options?: OptionsOrGroups<PrimaryKeyOption, Group>
  ): PropsValue<PrimaryKeyOption> | undefined => {
    if (!options) return undefined;

    for (const optionValue of options) {
      if ("value" in optionValue && optionValue.value === selectedValue) {
        return optionValue;
      } else if ("options" in optionValue) {
        const nestedOptionValue = getSelectedOption(
          selectedValue,
          optionValue.options
        );

        if (!nestedOptionValue) return nestedOptionValue;
      }
    }

    return undefined;
  };

  return (
    <Select<PrimaryKeyOption, IsMulti, Group>
      value={getSelectedOption(value, options)}
      id={id}
      instanceId={instanceId}
      inputId={inputId}
      name={name}
      options={options}
      {...props}
    />
  );
};
