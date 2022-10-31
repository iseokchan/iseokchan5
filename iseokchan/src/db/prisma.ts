import { PrismaClient } from "@prisma/client";

import {
  LoggerMiddleware,
  PasswordMiddleware,
  SoftDeleteMiddleware,
} from "./middlewares";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const applyMiddlewares = (prisma: PrismaClient): PrismaClient => {
  prisma.$use(LoggerMiddleware);
  prisma.$use(PasswordMiddleware);
  prisma.$use(SoftDeleteMiddleware);
  return prisma;
};

export const prisma =
  global.prisma ||
  applyMiddlewares(
    new PrismaClient({
      log: ["query"],
    })
  );

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
