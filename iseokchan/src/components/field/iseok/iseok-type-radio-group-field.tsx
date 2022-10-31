import { Field } from "formik";

import { IseokTypeRadioGroup } from "src/components/radio-group";

import type { FieldProps } from "formik";

type IseokTypeRadioGroupFieldBaseProps = FieldProps;

const IseokTypeRadioGroupFieldBase = ({
  field,
  form: { setFieldValue },
}: IseokTypeRadioGroupFieldBaseProps) => (
  <IseokTypeRadioGroup
    name={field.name}
    value={field.value}
    onChange={(value) => {
      setFieldValue(field.name, value);
    }}
  />
);

type IseokTypeRadioGroupFieldProps = {
  name: string;
};

export const IseokTypeRadioGroupField = ({
  name,
}: IseokTypeRadioGroupFieldProps) => (
  <Field name={name} component={IseokTypeRadioGroupFieldBase} />
);
