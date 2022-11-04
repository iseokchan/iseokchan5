import { list, queryField } from "nexus";

export const teacherListQuery = queryField("teacherList", {
  type: list("TeacherType"),
  resolve(_, __, ctx) {
    return ctx.prisma.teacher.findMany({
      where: {
        user: {
          isActive: true,
        },
      },
    });
  },
});
