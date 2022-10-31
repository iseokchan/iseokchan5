import { Prisma } from "@prisma/client";

export const teacherWithInfoInclude = Prisma.validator<Prisma.TeacherInclude>()(
  {
    user: {
      select: {
        name: true,
      },
    },
  }
);

export type TeacherWithInfo = Prisma.StudentGetPayload<{
  include: typeof teacherWithInfoInclude;
}>;
