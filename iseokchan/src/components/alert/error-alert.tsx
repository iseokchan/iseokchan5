import { AlertBase, AlertBaseProps } from "./base";

type ErrorAlertProps = Omit<AlertBaseProps, "status">;

export const ErrorAlert = ({ children }: ErrorAlertProps) => (
  <AlertBase status="error">{children}</AlertBase>
);
