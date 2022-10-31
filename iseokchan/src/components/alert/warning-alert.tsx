import { AlertBase, AlertBaseProps } from "./base";

type WarningAlertProps = Omit<AlertBaseProps, "status">;

export const WarningAlert = ({ children }: WarningAlertProps) => (
  <AlertBase status="warning">{children}</AlertBase>
);
