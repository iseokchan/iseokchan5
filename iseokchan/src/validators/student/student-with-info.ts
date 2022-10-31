import { Prisma } from "@prisma/client";

export const studentWithInfoSelect = Prisma.validator<Prisma.StudentSelect>()({
  user: {
    select: {
      name: true,
    },
  },
  studentRegistration: {
    select: {
      year: true,
      grade: true,
      room: true,
      number: true,
    },
  },
});

export type StudentWithInfo = Prisma.StudentGetPayload<{
  select: typeof studentWithInfoSelect;
}>;
