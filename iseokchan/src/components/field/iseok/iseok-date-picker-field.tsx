import { Field } from "formik";

import { IseokDatePicker } from "src/components";

import type { FieldProps } from "formik";

type IseokDatePickerFieldBaseProps = FieldProps<Date | null>;

const IseokDatePickerFieldBase = ({
  field,
  form: { setFieldValue },
}: IseokDatePickerFieldBaseProps) => (
  <IseokDatePicker
    value={field.value}
    onChange={(date) => setFieldValue(field.name, date)}
  />
);

type IseokDatePickerFieldProps = {
  name: string;
};

export const IseokDatePickerField = ({ name }: IseokDatePickerFieldProps) => (
  <Field name={name} component={IseokDatePickerFieldBase} />
);
