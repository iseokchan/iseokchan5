import { Alert, AlertIcon } from "@chakra-ui/react";
import { ReactNode } from "react";

import type { AlertStatus } from "@chakra-ui/react";

export type AlertBaseProps = {
  children?: ReactNode;
  status: AlertStatus;
};

export const AlertBase = ({ children, status }: AlertBaseProps) => (
  <Alert status={status}>
    <AlertIcon />
    {children}
  </Alert>
);
