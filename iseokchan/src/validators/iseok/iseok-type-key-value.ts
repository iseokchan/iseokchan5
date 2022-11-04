import { Prisma } from "@prisma/client";

export const IseokTypeKeyValue = Prisma.validator<Prisma.IseokTypeSelect>()({
  id: true,
  name: true,
});

export type IseokTypeKeyValue = Prisma.IseokTypeGetPayload<{
  select: typeof IseokTypeKeyValue;
}>;
