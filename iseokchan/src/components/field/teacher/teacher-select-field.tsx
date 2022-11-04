import { Field } from "formik";

import { TeacherSelect } from "src/components/select";

import type { FieldProps } from "formik";

type TeacherSelectFieldBaseProps = FieldProps;

const TeacherSelectFieldBase = ({
  field,
  form: { setFieldValue },
}: TeacherSelectFieldBaseProps) => (
  <TeacherSelect
    name={field.name}
    value={field.value}
    handleChange={(option) => setFieldValue(field.name, option?.value)}
  />
);

type TeacherSelectFieldProps = {
  name: string;
};

export const TeacherSelectField = ({ name }: TeacherSelectFieldProps) => (
  <Field name={name} component={TeacherSelectFieldBase} />
);
