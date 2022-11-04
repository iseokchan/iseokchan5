import { objectType } from "nexus";

export type Teacher = {
  id: number;
  name: string;
};

export const TeacherType = objectType({
  name: "TeacherType",
  definition(t) {
    t.int("id");
    t.string("name", {
      resolve: async (root, __, ctx) => {
        const user = await ctx.prisma.teacher
          .findUniqueOrThrow({
            where: {
              id: root.id!,
            },
          })
          .user();

        return user.name;
      },
    });
  },
});
