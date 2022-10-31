import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export const PasswordMiddleware = async (
  params: Prisma.MiddlewareParams,
  next: (params: Prisma.MiddlewareParams) => Promise<any>
) => {
  if (params.action.includes("create") || params.action == "upsert") {
    if ("password" in params.args) {
      params.args["password"] = bcrypt.hashSync(
        params.args["password"] as string,
        10
      );
    }
  }

  return next(params);
};
