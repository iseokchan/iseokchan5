import { Field } from "formik";

import { IseokLocationSelect } from "src/components/select";

import type { FieldProps } from "formik";

type IseokLocationSelectFieldBaseProps = FieldProps;

const IseokLocationSelectFieldBase = ({
  field,
  form: { setFieldValue },
}: IseokLocationSelectFieldBaseProps) => (
  <IseokLocationSelect
    name={field.name}
    value={field.value}
    handleChange={(option) => setFieldValue(field.name, option?.value)}
  />
);

type IseokLocationSelectFieldProps = {
  name: string;
};

export const IseokLocationSelectField = ({
  name,
}: IseokLocationSelectFieldProps) => (
  <Field name={name} component={IseokLocationSelectFieldBase} />
);
