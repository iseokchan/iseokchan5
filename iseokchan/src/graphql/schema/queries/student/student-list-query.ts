import { list, queryField } from "nexus";

export const studentListQuery = queryField("studentList", {
  type: list("StudentType"),
  resolve(_, __, ctx) {
    return ctx.prisma.student.findMany({
      where: {
        user: {
          isActive: true,
        },
      },
    });
  },
});
