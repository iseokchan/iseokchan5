import { Textarea } from "@chakra-ui/react";
import { Field } from "formik";

import type { FieldProps } from "formik";

type IseokReasonFieldBaseProps = FieldProps;

const IseokReasonFieldBase = ({
  field,
  form: { setFieldValue },
}: IseokReasonFieldBaseProps) => (
  <Textarea
    name={field.name}
    value={field.value}
    onChange={(e) => setFieldValue(field.name, e.target.value)}
    placeholder="이석 사유를 입력하세요."
  />
);

type IseokReasonFieldProps = {
  name: string;
};

export const IseokReasonField = ({ name }: IseokReasonFieldProps) => (
  <Field name={name} component={IseokReasonFieldBase} />
);
