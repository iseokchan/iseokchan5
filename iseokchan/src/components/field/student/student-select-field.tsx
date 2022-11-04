import { Field } from "formik";

import { StudentSelect } from "src/components/select";

import type { FieldProps } from "formik";

type StudentSelectFieldBaseProps = FieldProps;

const StudentSelectFieldBase = ({
  field,
  form: { setFieldValue },
}: StudentSelectFieldBaseProps) => (
  <StudentSelect
    name={field.name}
    value={field.value}
    handleChange={(option) =>
      setFieldValue(
        field.name,
        option?.map((o) => o.value)
      )
    }
  />
);

type StudentSelectFieldProps = {
  name: string;
};

export const StudentSelectField = ({ name }: StudentSelectFieldProps) => (
  <Field name={name} component={StudentSelectFieldBase} />
);
