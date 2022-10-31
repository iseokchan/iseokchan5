import { list, queryField } from "nexus";

export const TeacherListQuery = queryField("teacherList", {
  type: list("Teacher"),
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
