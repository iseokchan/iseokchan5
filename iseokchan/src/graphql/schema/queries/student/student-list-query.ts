import { list, queryField } from "nexus";

export const StudentListQuery = queryField("studentList", {
  type: list("Student"),
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
