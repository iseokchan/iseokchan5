import { objectType } from "nexus";

export type Student = {
  id: number;
  name: string;
  fullName: string;
};

export const Student = objectType({
  name: "Student",
  definition(t) {
    t.int("id");
    t.string("name", {
      resolve: async (root, __, ctx) => {
        const user = await ctx.prisma.student
          .findUniqueOrThrow({
            where: {
              id: root.id!,
            },
          })
          .user();

        return user.name;
      },
    });
    t.string("fullName", {
      resolve: async (root, __, ctx) => {
        const registration = await ctx.prisma.student
          .findUniqueOrThrow({
            where: {
              id: root.id!,
            },
          })
          .studentRegistration({
            where: {
              year: 2022,
            },
          });

        const user = await ctx.prisma.student
          .findUniqueOrThrow({
            where: {
              id: root.id!,
            },
          })
          .user();

        return `${registration[0].grade}${
          registration[0].room
        }${registration[0].number.toString().padStart(2, "0")}${user.name}`;
      },
    });
  },
});
